"use client";

import React, { useRef, useEffect } from 'react';

export function ThunderCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePosition = useRef({ x: -100, y: -100 });
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

    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
      this.size = Math.random() * 4 + 1;
      this.speedX = Math.random() * 2 - 1;
      this.speedY = Math.random() * 2 - 1;
      const yellowHue = 48;
      this.color = `hsla(${yellowHue}, 96%, 53%, 1)`;
      this.life = 0;
      this.maxLife = Math.random() * 60 + 40;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.life++;
      if (this.life < this.maxLife) {
        this.size -= 0.05;
      }
      if (this.size < 0) {
        this.size = 0;
      }
    }

    draw(ctx: CanvasRenderingContext2D) {
      if (this.size > 0) {
        ctx.beginPath();
        const opacity = 1 - this.life / this.maxLife;
        const yellowHue = 48;
        this.color = `hsla(${yellowHue}, 96%, 53%, ${opacity})`;
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
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
      mousePosition.current = { x: e.clientX, y: e.clientY };
      for (let i = 0; i < 2; i++) {
        particles.current.push(new Particle(e.clientX, e.clientY));
      }
    };
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.current.length - 1; i >= 0; i--) {
        const p = particles.current[i];
        p.update();
        p.draw(ctx);
        if (p.life >= p.maxLife || p.size <= 0) {
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
