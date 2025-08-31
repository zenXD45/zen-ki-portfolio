import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

const projects = [
  {
    title: 'Project Thunderclap',
    description: 'A blazing fast e-commerce platform built with Next.js and Vercel. Focuses on performance and user experience.',
    url: '#',
    year: '2023',
  },
  {
    title: 'Project Chuntaro',
    description: 'A social media dashboard for tracking and analyzing user engagement. Features real-time data visualization.',
    url: '#',
    year: '2023',
  },
  {
    title: 'Project Godspeed',
    description: 'A mobile-first workout logger app designed to be simple and intuitive. Built with React Native.',
    url: '#',
    year: '2022',
  },
  {
    title: 'Project First Form',
    description: 'A minimalist blogging platform with a focus on clean typography and a serene reading experience.',
    url: '#',
    year: '2021',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen p-8 md:p-24 animate-fade-in">
      <div className="max-w-3xl mx-auto space-y-16">
        <header className="space-y-4">
          <h1 className="text-2xl font-bold">Zenitsu Agatsuma</h1>
          <p className="text-muted-foreground">
            A passionate developer who might seem scared at first, but possesses shocking potential when it comes to building amazing web experiences.
          </p>
          <div className="flex gap-4">
            <Link href="#" target="_blank" className="text-muted-foreground hover:text-foreground">
              <Github size={20} />
            </Link>
            <Link href="#" target="_blank" className="text-muted-foreground hover:text-foreground">
              <Linkedin size={20} />
            </Link>
          </div>
        </header>

        <section>
          <h2 className="font-bold mb-6">/projects</h2>
          <ul className="space-y-6">
            {projects.map((project) => (
              <li key={project.title}>
                <div className="flex justify-between items-baseline">
                  <Link href={project.url} target="_blank" className="hover:underline">
                    <h3>{project.title}</h3>
                  </Link>
                  <span className="text-sm text-muted-foreground">{project.year}</span>
                </div>
                <p className="text-muted-foreground text-sm">{project.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <footer>
          <h2 className="font-bold mb-4">/contact</h2>
          <p className="text-muted-foreground">
            Say hello &rarr;{' '}
            <Link
              href="mailto:hello@example.com"
              className="underline hover:text-foreground"
            >
              hello@example.com
            </Link>
          </p>
        </footer>
      </div>
    </main>
  );
}
