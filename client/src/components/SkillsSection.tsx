"use client";

import { useEffect, useRef, useState } from "react";

interface Skill {
  name: string;
  icon: string;
}

interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: [
        { name: "React.js", icon: "⚛️" },
        { name: "Next.js", icon: "▲" },
        { name: "TypeScript", icon: "📘" },
        { name: "Tailwind CSS", icon: "🎨" },
        { name: "HTML5/CSS3", icon: "🌐" },
        { name: "Bootstrap", icon: "🎨" },
        { name: "MUI", icon: "🖌️" },
        { name: "React Native", icon: "📱" }
      ],
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: [
        { name: "Node.js", icon: "🟢" },
        { name: "Express.js", icon: "🚂" },
        { name: "NestJS", icon: "🦉" },
        { name: "PHP", icon: "🐘" },
        { name: "JavaScript", icon: "✨" },
        { name: "Python", icon: "🐍" },
        { name: "C/C++", icon: "©️" },
        { name: "Java", icon: "☕" },
        { name: "MongoDB", icon: "🍃" },
        { name: "PostgreSQL", icon: "🐘" },
      ],
    },
    {
      title: "DevOps & Tools",
      icon: "🛠️",
      skills: [
        { name: "Git", icon: "📦" },
        { name: "Github", icon: "🐙" },
        { name: "Docker", icon: "🐳" },
      ],
    },
    {
      title: "Other Skills",
      icon: "🎯",
      skills: [
        { name: "Agile/Scrum", icon: "📊" },
        { name: "RESTful APIs", icon: "🔌" },
        { name: "Testing", icon: "🧪" },
        { name: "Performance Optimization", icon: "⚡" },
        { name: "Problem Solving", icon: "🧩" },
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {skillCategories.map((category) => (
        <div
          key={category.title}
          className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:bg-gray-800/70 transition-colors"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">{category.icon}</span>
            <h3 className="text-xl font-semibold text-gray-200">
              {category.title}
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {category.skills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-2 text-gray-300 hover:text-gray-100 transition-colors"
              >
                <span>{skill.icon}</span>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsSection;
