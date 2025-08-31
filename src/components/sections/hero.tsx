"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MoveRight, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
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
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };


export default function HeroSection() {
  return (
    <motion.section
      id="home"
      className="relative container mx-auto flex flex-col md:flex-row items-center gap-8 px-4 md:px-6 py-20 md:py-32 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
        <motion.div 
            className="absolute -top-1/4 -left-1/4 w-1/2 h-full text-primary/10 -z-1"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { duration: 1.5, delay: 1 } }}
        >
            <Zap className="w-full h-full animate-pulse" />
        </motion.div>
        <motion.div 
            className="absolute -bottom-1/4 -right-1/4 w-1/2 h-full text-primary/10 -z-1"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { duration: 1.5, delay: 1.2 } }}
        >
            <Zap className="w-full h-full animate-pulse" />
        </motion.div>

      <motion.div className="flex-1 space-y-6 text-center md:text-left" variants={containerVariants}>
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold tracking-tighter font-headline"
          variants={itemVariants}
        >
          Zenitsu Agatsuma
        </motion.h1>
        <motion.p
          className="max-w-xl mx-auto md:mx-0 text-lg text-muted-foreground"
          variants={itemVariants}
        >
          A passionate developer who might seem scared at first, but possesses shocking potential when it comes to building amazing web experiences.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          variants={itemVariants}
        >
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="#projects">
              View My Work <MoveRight className="ml-2" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="#contact">Get In Touch</Link>
          </Button>
        </motion.div>
      </motion.div>
      <motion.div 
        className="flex-1 flex justify-center items-center"
        variants={imageVariants}
        whileHover="hover"
      >
        <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-primary/80">
          <Image
            src="https://i.pinimg.com/736x/9a/31/37/9a31378b1a533f07a974b6a93b48259d.jpg"
            alt="Zenitsu Portfolio Owner"
            fill
            data-ai-hint="portrait anime"
            className="object-cover object-center w-full h-full"
          />
           <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
        </div>
      </motion.div>
    </motion.section>
  );
}
