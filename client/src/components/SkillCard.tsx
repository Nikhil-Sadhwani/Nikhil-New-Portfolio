'use client';

import { useEffect, useRef, useState } from 'react';

interface SkillCardProps {
  name: string;
  icon: string;
  proficiency: number;
}

const SkillCard = ({ name, icon, proficiency }: SkillCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentCardRef = cardRef.current;
    if (currentCardRef) {
      observer.observe(currentCardRef);
    }

    return () => {
      if (currentCardRef) {
        observer.unobserve(currentCardRef);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`bg-gray-800/50 p-4 rounded-lg backdrop-blur-sm border border-gray-700/50 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="text-2xl">{icon}</span>
        <h3 className="text-lg font-medium text-gray-200">{name}</h3>
      </div>
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000"
          style={{
            width: isVisible ? `${proficiency}%` : '0%'
          }}
        />
      </div>
    </div>
  );
};

export default SkillCard;
