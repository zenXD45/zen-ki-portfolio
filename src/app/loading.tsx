"use client";

import { useEffect } from 'react';

export default function Loading() {
  // Add loading class to body for custom styling
  useEffect(() => {
    document.body.classList.add('loading');
    return () => {
      document.body.classList.remove('loading');
    };
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-background z-50">
      <div className="mb-6 w-24 h-24 relative">
        <div className="absolute inset-0 border-4 border-primary/20 rounded-full animate-spin"></div>
        <div className="absolute inset-4 border-4 border-primary border-t-transparent rounded-full animate-pulse"></div>
        <div className="absolute inset-2 border-4 border-transparent border-b-primary border-r-primary rounded-full animate-bounce"></div>
      </div>
      <p className="text-xl text-primary font-medium tracking-wider">
        <span className="inline-block animate-pulse mx-0.5">Z</span>
        <span className="inline-block animate-pulse mx-0.5">E</span>
        <span className="inline-block animate-pulse mx-0.5">N</span>
        <span className="inline-block animate-pulse mx-0.5">I</span>
        <span className="inline-block animate-pulse mx-0.5">T</span>
        <span className="inline-block animate-pulse mx-0.5">S</span>
        <span className="inline-block animate-pulse mx-0.5">U</span>
      </p>
    </div>
  );
}
