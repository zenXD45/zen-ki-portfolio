"use client";

import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/header";
import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import SkillsSection from "@/components/sections/skills";
import ProjectsSection from "@/components/sections/projects";
import ContactSection from "@/components/sections/contact";
import { ZenitsuLoader } from "@/components/zenitsu-loader";
import React from 'react';
import { ParticleBackground } from "@/components/particle-background";
import { ThunderCursor } from "@/components/thunder-cursor";

export default function Home() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); 
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <ZenitsuLoader />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <ParticleBackground />
      <ThunderCursor />
      <Header />
      <main className="flex-1 relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Toaster />
    </div>
  );
}
