"use client";

import { useState, useEffect } from 'react';
import { ZenitsuLoader } from '@/components/zenitsu-loader';
import { Header } from '@/components/header';
import HeroSection from '@/components/sections/hero';
import AboutSection from '@/components/sections/about';
import SkillsSection from '@/components/sections/skills';
import ProjectsSection from '@/components/sections/projects';
import ContactSection from '@/components/sections/contact';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Simulate loading time
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <ZenitsuLoader />;
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <SectionSeparator />
        <AboutSection />
        <SectionSeparator />
        <SkillsSection />
        <SectionSeparator />
        <ProjectsSection />
        <SectionSeparator />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

const SectionSeparator = () => (
  <div className="container mx-auto px-4 md:px-6">
    <Separator className="my-16 md:my-24 bg-primary/20" />
  </div>
);

const Footer = () => (
    <footer className="py-6 md:px-8 md:py-0 bg-background/50 border-t mt-16">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
            <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
                Built with thunder and lightning. &copy; {new Date().getFullYear()}
            </p>
        </div>
    </footer>
)
