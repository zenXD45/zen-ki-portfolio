"use client";

import React, { useRef, useEffect } from 'react';

export function ThunderCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);

  class Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    color: string;
    life: number;
    maxLife: number;
    opacity: number;
    initialOpacity: number;

    constructor(x: number, y: number, isOverText: boolean) {
      this.x = x;
      this.y = y;
      this.size = Math.random() * 5 + 2; // Increased size variation
      this.speedX = Math.random() * 3 - 1.5; // Wider speed range
      this.speedY = Math.random() * 3 - 1.5; // Wider speed range
      const yellowHue = 48;
      this.color = `hsl(${yellowHue}, 96%, 53%)`;
      this.life = 0;
      this.maxLife = Math.random() * 60 + 50; // Longer, more varied lifespan
      this.initialOpacity = isOverText ? 0 : 1;
      this.opacity = this.initialOpacity;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      
      const lifeRatio = this.life / this.maxLife;
      this.opacity = this.initialOpacity * (1 - lifeRatio);
      this.size = this.size * (1 - 0.01);

      this.life++;
    }

    draw(ctx: CanvasRenderingContext2D) {
      if (this.size > 0.1 && this.opacity > 0) {
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1; 
      }
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();

    const handleMouseMove = (e: MouseEvent) => {
      const el = document.elementFromPoint(e.clientX, e.clientY);
      const isText = el && ['P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'SPAN', 'A', 'BUTTON', 'DIV', 'INPUT', 'TEXTAREA'].includes(el.tagName);
      for (let i = 0; i < 5; i++) { 
        particles.current.push(new Particle(e.clientX, e.clientY, !!isText));
      }
    };
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.current.length - 1; i >= 0; i--) {
        const p = particles.current[i];
        p.update();
        p.draw(ctx);
        if (p.life >= p.maxLife || p.size <= 0.1 || p.opacity <= 0) {
          particles.current.splice(i, 1);
        }
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', setCanvasSize);
    
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed pointer-events-none top-0 left-0 w-full h-full z-[9999]" />;
}
