"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LightningBolt = ({ delay }: { delay: number }) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="hsl(var(--primary))"
    stroke="hsl(var(--primary))"
    strokeWidth="1"
    className="w-full h-full absolute top-0 left-0"
    style={{
        filter: 'drop-shadow(0 0 5px hsl(var(--primary)))',
    }}
    initial={{ y: -50, opacity: 0 }}
    animate={{ y: 0, opacity: [0, 1, 1, 0] }}
    transition={{ duration: 0.5, delay, ease: 'easeOut' }}
  >
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </motion.svg>
);


export function ThunderCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [effects, setEffects] = useState<{ id: number; x: number; y: number }[]>([]);

  useEffect(() => {
    let hoverTimeout: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
        const newEffect = { id: Date.now(), x: e.clientX, y: e.clientY };
        
        setEffects(prev => [...prev, newEffect]);

        // Remove the effect after the animation is done
        setTimeout(() => {
            setEffects(prev => prev.filter(effect => effect.id !== newEffect.id));
        }, 1000); // A bit longer than animation duration
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(hoverTimeout);
    };
  }, []);

  return (
    <div className="fixed pointer-events-none top-0 left-0 w-full h-full z-[9999]">
      <AnimatePresence>
        {effects.map(effect => (
          <div
            key={effect.id}
            className="absolute"
            style={{
              top: effect.y,
              left: effect.x,
              width: '48px',
              height: '48px',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <div className="relative w-full h-full">
                <LightningBolt delay={0} />
                <LightningBolt delay={0.1} />
                <LightningBolt delay={0.2} />
            </div>
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
}