"use client";

import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/header";
import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import SkillsSection from "@/components/sections/skills";

import ContactSection from "@/components/sections/contact";
import Loader from "@/components/zenitsu-loader";
import React from 'react';
import { ParticleBackground } from "@/components/particle-background";
import SplashCursorDemo from "@/components/cursor-animation"
import ProjectShowCaseDemo from "@/components/ui/project-showcase"
import Image from 'next/image'
import { useState , useEffect} from "react";

export default function Home() {
    const [loading, setLoading] = useState(true);
  const [fadeOutLoader, setFadeOutLoader] = useState(false);

  // Called by loader after video end
  const handleVideoEnded = () => {
    setFadeOutLoader(true); // start fade-out animation for loader
  };

  // After fade-out duration, hide loader completely
  useEffect(() => {
    if (fadeOutLoader) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 800); // duration matches CSS fade time
      return () => clearTimeout(timer);
    }
  }, [fadeOutLoader]);

  return (
    <div className="relative min-h-screen">
      {/* Loader video always rendered while loading */}
      {loading && (
        <div
          className={`fixed inset-0 z-50 bg-black transition-opacity duration-800 ${
            fadeOutLoader ? "opacity-0" : "opacity-100"
          }`}
          style={{ pointerEvents: fadeOutLoader ? "none" : "auto" }}
        >
          <Loader onVideoEnded={handleVideoEnded} fadeOut={fadeOutLoader} />
        </div>
      )}

      {/* Site content beneath loader, fades in when loader fades out */}
      <main
        className={`transition-opacity duration-800 ${
          fadeOutLoader ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Your full site content */}
        <ParticleBackground />
      <Header />
      <main className="flex-1 relative z-10">
         <Image
      src="/images/zen1.webp"
      alt="zenitsu"
      fill
      priority
      className="w-full h-full object-cover opacity-20"
      />
        <HeroSection />
        <AboutSection />\
        <SplashCursorDemo/>
        <SkillsSection />
        <ProjectShowCaseDemo />
        <ContactSection />
      </main>
      <Toaster />
      </main>
    </div>
  );
}

