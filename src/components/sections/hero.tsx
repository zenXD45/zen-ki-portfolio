
"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MoveRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import React from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
};

const imageVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20,
        delay: 0.5,
      },
    },
    hover: {
      transition: { duration: 0.3 }
    }
  };


export default function HeroSection() {
  const targetRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const imageTransform = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const heroTitle = "Zenitsu Agatsuma".split(" ");
  const heroDescription = "A passionate developer who might seem scared at first, but possesses shocking potential when it comes to building amazing web experiences.".split(" ");

  return (
    <motion.section
      id="home"
      ref={targetRef}
      className="container mx-auto flex min-h-screen flex-col md:flex-row items-center gap-8 px-4 md:px-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="flex-1 space-y-6 text-center md:text-left" variants={containerVariants}>
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold tracking-tighter font-headline text-glow"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {heroTitle.map((word, index) => (
            <motion.span key={index} variants={wordVariants} className="inline-block mr-4">
              {word}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p
          className="max-w-xl mx-auto md:mx-0 text-xl text-muted-foreground"
           variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
           {heroDescription.map((word, index) => (
            <motion.span key={index} variants={wordVariants} className="inline-block mr-1.5">
              {word}
            </motion.span>
          ))}
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          variants={itemVariants}
        >
          <Button asChild size="lg" className="font-sans text-lg">
            <Link href="#projects">
              View My Work <MoveRight className="ml-2" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="font-sans text-lg">
            <Link href="#contact">Get In Touch</Link>
          </Button>
        </motion.div>
      </motion.div>
      <motion.div 
        className="flex-1 flex justify-center items-center"
        variants={imageVariants}
        whileHover="hover"
      >
        <motion.div 
          className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-primary/80"
          style={{ y: imageTransform }}
          >
          <Image
            src="https://i.pinimg.com/736x/9a/31/37/9a31378b1a533f07a974b6a93b48259d.jpg"
            alt="Zenitsu Portfolio Owner"
            fill
            priority
            data-ai-hint="portrait anime"
            className="object-cover object-center w-full h-full"
          />
           <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
