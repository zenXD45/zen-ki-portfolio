import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Github, ExternalLink } from 'lucide-react';

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
  return (
    <section id="projects" className="container mx-auto px-4 md:px-6 py-16 md:py-24">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-headline">My Missions (Projects)</h2>
        <p className="max-w-2xl mx-auto text-muted-foreground">
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
              <div className="p-1 h-full">
                <Card className="h-full flex flex-col">
                  <CardHeader>
                    <div className="aspect-video relative overflow-hidden rounded-lg mb-4">
                        <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-300 hover:scale-110" data-ai-hint={project.aiHint} />
                    </div>
                    <CardTitle>{project.title}</CardTitle>
                    <div className="flex flex-wrap gap-2 pt-2">
                        {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{project.description}</p>
                  </CardContent>
                  <CardFooter className="flex justify-start gap-4">
                    <Button asChild>
                        <Link href={project.liveUrl} target="_blank">
                            <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                        </Link>
                    </Button>
                    <Button asChild variant="outline">
                        <Link href={project.githubUrl} target="_blank">
                            <Github className="mr-2 h-4 w-4" /> Source
                        </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="ml-12 hidden sm:flex" />
        <CarouselNext className="mr-12 hidden sm:flex" />
      </Carousel>
    </section>
  );
}
