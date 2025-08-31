import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MoveRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="container mx-auto flex flex-col md:flex-row items-center gap-8 px-4 md:px-6 py-20 md:py-32">
      <div className="flex-1 space-y-6 text-center md:text-left animate-fade-in-down">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter font-headline">
          Zenitsu Agatsuma
        </h1>
        <p className="max-w-xl mx-auto md:mx-0 text-lg text-muted-foreground">
          A passionate developer who might seem scared at first, but possesses shocking potential when it comes to building amazing web experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="#projects">
              View My Work <MoveRight className="ml-2" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="#contact">Get In Touch</Link>
          </Button>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center animate-fade-in-up">
        <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-primary/80">
          <Image
            src="https://picsum.photos/400/400"
            alt="Zenitsu Portfolio Owner"
            width={400}
            height={400}
            data-ai-hint="portrait anime"
            className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
          />
        </div>
      </div>
    </section>
  );
}
