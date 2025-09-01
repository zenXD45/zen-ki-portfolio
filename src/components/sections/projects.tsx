"use client";

import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Project Thunderclap',
    description: 'A blazing fast e-commerce platform built with Next.js and Vercel. Focuses on performance and user experience.',
    image: 'https://picsum.photos/600/400?random=1',
    tags: ['Next.js', 'React', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#',
    aiHint: 'ecommerce website'
  },
  {
    title: 'Project Chuntaro',
    description: 'A social media dashboard for tracking and analyzing user engagement. Features real-time data visualization.',
    image: 'https://picsum.photos/600/400?random=2',
    tags: ['React', 'D3.js', 'Firebase'],
    liveUrl: '#',
    githubUrl: '#',
    aiHint: 'dashboard analytics'
  },
  {
    title: 'Project Godspeed',
    description: 'A mobile-first workout logger app designed to be simple and intuitive. Built with React Native.',
    image: 'https://picsum.photos/600/400?random=3',
    tags: ['React Native', 'Mobile App'],
    liveUrl: '#',
    githubUrl: '#',
    aiHint: 'mobile app'
  },
  {
    title: 'Project First Form',
    description: 'A minimalist blogging platform with a focus on clean typography and a serene reading experience.',
    image: 'https://picsum.photos/600/400?random=4',
    tags: ['Next.js', 'MDX', 'Sanity'],
    liveUrl: '#',
    githubUrl: '#',
    aiHint: 'blog website'
  },
];

export default function ProjectsSection() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const hoverEffect = {
    scale: 1.05,
    boxShadow: "0px 0px 20px hsl(var(--primary))",
    transition: { duration: 0.3 }
  };


  return (
    <motion.section
      id="projects"
      className="container mx-auto px-4 md:px-6 py-16 md:py-24 flex flex-col justify-center h-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-4xl md:text-5xl font-bold font-headline text-glow">My Projects</h2>
        <p className="max-w-2xl mx-auto text-muted-foreground text-xl">
          Each mission completed with precision and a little bit of panic.
        </p>
      </div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <motion.div className="p-1 h-full" variants={cardVariants} whileHover={hoverEffect}>
                <Card className="h-full flex flex-col group overflow-hidden bg-card border-primary/30">
                  <CardHeader>
                    <div className="aspect-video relative overflow-hidden rounded-lg mb-4">
                        <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-300 group-hover:scale-110" data-ai-hint={project.aiHint} />
                        <div className="absolute inset-0 bg-black/20" />
                    </div>
                    <CardTitle className="font-headline text-3xl text-primary">{project.title}</CardTitle>
                    <div className="flex flex-wrap gap-2 pt-2">
                        {project.tags.map(tag => <Badge key={tag} variant="secondary" className="font-sans text-sm">{tag}</Badge>)}
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground text-lg">{project.description}</p>
                  </CardContent>
                  <CardFooter className="flex justify-start gap-4">
                    <Button asChild className="font-sans text-lg">
                        <Link href={project.liveUrl} target="_blank">
                            <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                        </Link>
                    </Button>
                    <Button asChild variant="outline" className="font-sans text-lg">
                        <Link href={project.githubUrl} target="_blank">
                            <Github className="mr-2 h-4 w-4" /> Source
                        </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="ml-12 hidden sm:flex" />
        <CarouselNext className="mr-12 hidden sm:flex" />
      </Carousel>
    </motion.section>
  );
}
