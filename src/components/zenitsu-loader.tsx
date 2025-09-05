import { useState, useEffect } from "react";

interface LoaderProps {
  onFinish: () => void;
}

export default function Loader({ onFinish }: LoaderProps) {
  const [fadeOut, setFadeOut] = useState(false);

  const handleVideoEnd = () => {
    setFadeOut(true); // trigger fade-out
  };

  // After fade transition (e.g. 600ms), call parent's onFinish
  useEffect(() => {
    if (fadeOut) {
      const timer = setTimeout(() => {
        onFinish();
      }, 600); // match CSS transition duration
      return () => clearTimeout(timer);
    }
  }, [fadeOut, onFinish]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-600 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
      style={{ pointerEvents: fadeOut ? 'none' : 'auto' }}
    >
      <video
        src="/videos/zen.mp4"
        autoPlay
        muted
        className="w-full h-full object-cover"
        onEnded={handleVideoEnd}
      />
    </div>
  );
}
