"use client";

import React, { useState, useEffect } from 'react';
import { Bolt } from 'lucide-react';

export function ThunderCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    let animationTimeout: NodeJS.Timeout;
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
      setIsAnimating(true);
      
      clearTimeout(animationTimeout);
      animationTimeout = setTimeout(() => setIsAnimating(false), 200);
    };
    
    const handleMouseLeave = () => {
        setIsVisible(false);
    }

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(animationTimeout);
    };
  }, []);

  return (
    <div 
        className="fixed pointer-events-none top-0 left-0 z-[9999]" 
        style={{ 
            transform: `translate(${position.x}px, ${position.y}px)`,
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.2s ease-in-out',
        }}
    >
        <Bolt 
            className={`
                text-primary transition-all duration-200 ease-out
                ${isAnimating ? 'w-16 h-16 opacity-100 -rotate-12' : 'w-8 h-8 opacity-50 rotate-0'}
            `}
            style={{
                filter: isAnimating ? 'drop-shadow(0 0 10px hsl(var(--primary)))' : 'none',
            }}
        />
    </div>
  );
}
