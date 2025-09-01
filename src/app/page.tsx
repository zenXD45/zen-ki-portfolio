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
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="relative">
          <div className="sticky-section">
            <HeroSection />
          </div>
          <div className="sticky-section bg-background">
            <AboutSection />
          </div>
          <div className="sticky-section bg-background">
            <SkillsSection />
          </div>
          <div className="sticky-section bg-background">
            <ProjectsSection />
          </div>
          <div className="sticky-section bg-background">
            <ContactSection />
          </div>
        </div>
      </main>
      <Toaster />
    </div>
  );
}
