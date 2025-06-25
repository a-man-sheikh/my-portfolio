import { useEffect, useState } from "react";

interface ProgressBarProps {
  skill: string;
  level: number;
  color?: string;
}

export function ProgressBar({ skill, level, color = "bg-ubuntu-orange" }: ProgressBarProps) {
  const [animatedLevel, setAnimatedLevel] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedLevel(level);
    }, 100);

    return () => clearTimeout(timer);
  }, [level]);

  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm">{skill}</span>
        <span className="text-sm text-ubuntu-orange">{level}%</span>
      </div>
      <div className="w-full bg-gray-600 rounded-full h-2">
        <div 
          className={`${color} h-2 rounded-full progress-bar`}
          style={{ width: `${animatedLevel}%` }}
        ></div>
      </div>
    </div>
  );
}
