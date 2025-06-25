import { useEffect, useState } from "react";

interface TypingAnimationProps {
  text: string;
  className?: string;
  speed?: number;
}

export function TypingAnimation({ text, className = "", speed = 50 }: TypingAnimationProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    } else {
      // Hide cursor after typing is complete
      const timer = setTimeout(() => {
        setShowCursor(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, speed]);

  return (
    <span className={className}>
      {displayText}
      {showCursor && <span className="blinking-cursor">_</span>}
    </span>
  );
}
