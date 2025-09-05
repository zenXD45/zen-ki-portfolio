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
import { useState } from "react";

export default function Home() {
   const [loading, setLoading] = useState(true);

 

  return (
    <div className="flex flex-col min-h-screen bg-background">
       {loading && <Loader onFinish={() => setLoading(false)} />}

 {!loading && (
        <main>
         
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
      )}

    </div>
  );
}
