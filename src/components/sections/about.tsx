"use client";

import { useState } from 'react';
import { generateAboutMeSection } from '@/ai/flows/generate-about-me-section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Sparkles, Zap } from 'lucide-react';
import { Skeleton } from '../ui/skeleton';
import { motion } from 'framer-motion';

type AboutMeState = {
  summary: string;
  zenitsuFunFact: string;
} | null;

export default function AboutSection() {
  const [bio, setBio] = useState('');
  const [result, setResult] = useState<AboutMeState>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!bio.trim()) {
      setError("Please enter a bio first.");
      return;
    }
    
    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const aiResult = await generateAboutMeSection({ bio });
      setResult(aiResult);
    } catch (err) {
      setError("Failed to generate content. Please try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      id="about"
      className="container mx-auto px-4 md:px-6 py-16 md:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-headline">
          About Me, but with a Spark!
        </h2>
        <p className="max-w-2xl mx-auto text-muted-foreground">
          Tell us about yourself, and let our AI assistant (powered by Zenitsu's lightning-fast thinking) whip up a unique summary and a fun fact for your profile.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <Card className="h-full">
          <CardHeader>
            <CardTitle>Your Biography</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Textarea
                placeholder="Paste or write your bio here... e.g., 'I am a full-stack developer with 5 years of experience, specializing in React and Node.js. I love building scalable applications and I'm a big fan of anime...'"
                rows={10}
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="resize-none"
                disabled={isLoading}
              />
              <Button type="submit" disabled={isLoading || !bio.trim()} className="w-full">
                {isLoading ? 'Generating...' : 'Generate with AI'}
                <Sparkles className="ml-2 h-4 w-4" />
              </Button>
              {error && <p className="text-sm text-destructive">{error}</p>}
            </form>
          </CardContent>
        </Card>

        <Card className="h-full bg-secondary">
          <CardHeader>
            <CardTitle>AI-Generated Profile</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 min-h-[250px]">
            {isLoading && (
              <div className="space-y-4">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <div className="pt-4 space-y-2">
                  <Skeleton className="h-4 w-1/2" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                </div>
              </div>
            )}
            {!isLoading && result && (
              <>
                <div>
                  <h3 className="font-semibold mb-2">Summary</h3>
                  <p className="text-muted-foreground">{result.summary}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Zap className="text-primary" /> Zenitsu Fun Fact
                  </h3>
                  <p className="text-muted-foreground italic">"{result.zenitsuFunFact}"</p>
                </div>
              </>
            )}
            {!isLoading && !result && (
              <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground">
                <Sparkles className="mx-auto h-12 w-12 text-muted-foreground/50 mb-4" />
                Your generated content will appear here.
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </motion.section>
  );
}
