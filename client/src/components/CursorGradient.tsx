'use client';

import { useEffect, useRef, useState } from 'react';

interface Point {
  x: number;
  y: number;
  timestamp: number;
}

const CursorGradient = () => {
  const [mounted, setMounted] = useState(false);
  const cursorRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const pointsRef = useRef<Point[]>([]);
  const lastPointRef = useRef<Point | null>(null);

  useEffect(() => {
    setMounted(true);
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    const handleMouseMove = (e: MouseEvent) => {
      cursorRef.current = {
        x: e.clientX,
        y: e.clientY
      };

      const currentPoint = {
        x: e.clientX,
        y: e.clientY,
        timestamp: Date.now()
      };

      // Only add point if it's far enough from the last point
      if (lastPointRef.current) {
        const dx = currentPoint.x - lastPointRef.current.x;
        const dy = currentPoint.y - lastPointRef.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance > 5) { // Minimum distance between points
          pointsRef.current.push(currentPoint);
          lastPointRef.current = currentPoint;
        }
      } else {
        pointsRef.current.push(currentPoint);
        lastPointRef.current = currentPoint;
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw gradient
      const gradient = ctx.createRadialGradient(
        cursorRef.current.x,
        cursorRef.current.y,
        0,
        cursorRef.current.x,
        cursorRef.current.y,
        200
      );
      
      gradient.addColorStop(0, 'rgba(130, 130, 255, 0.15)');
      gradient.addColorStop(0.5, 'rgba(130, 130, 255, 0.05)');
      gradient.addColorStop(1, 'rgba(130, 130, 255, 0)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw and update trailing lines
      const now = Date.now();
      const duration = 1000; // Duration in milliseconds before points disappear

      // Remove old points
      pointsRef.current = pointsRef.current.filter(point => 
        now - point.timestamp < duration
      );

      // Draw lines between points
      if (pointsRef.current.length > 1) {
        ctx.beginPath();
        ctx.moveTo(pointsRef.current[0].x, pointsRef.current[0].y);

        for (let i = 1; i < pointsRef.current.length; i++) {
          const point = pointsRef.current[i];
          const prevPoint = pointsRef.current[i - 1];
          
          // Calculate opacity based on age
          const age = now - point.timestamp;
          const opacity = Math.max(0, 1 - age / duration);
          
          ctx.beginPath();
          ctx.moveTo(prevPoint.x, prevPoint.y);
          ctx.lineTo(point.x, point.y);
          ctx.strokeStyle = `rgba(130, 130, 255, ${opacity * 0.5})`;
          ctx.lineWidth = 2;
          ctx.stroke();
        }
      }

      animationFrameRef.current = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationFrameRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none -z-5"
      aria-hidden="true"
    />
  );
};

export default CursorGradient;
