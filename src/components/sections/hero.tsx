
"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MoveRight } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { SparklesIcon } from "lucide-react"
 
import { Badge } from "@/components/ui/badge"
 
import {ImageCursorTrail} from "../ui/image-cursortrail"



const images = [
  "https://images.pexels.com/photos/30082445/pexels-photo-30082445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.unsplash.com/photo-1692606743169-e1ae2f0a960f?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1709949908058-a08659bfa922?q=80&w=1200&auto=format",
  "https://images.unsplash.com/photo-1548192746-dd526f154ed9?q=80&w=1200&auto=format",
  "https://images.unsplash.com/photo-1644141655284-2961181d5a02?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.pexels.com/photos/30082445/pexels-photo-30082445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://assets.lummi.ai/assets/QmNfwUDpehZyLWzE8to7QzgbJ164S6fQy8JyUWemHtmShj?auto=format&w=1500",
  "https://images.unsplash.com/photo-1706049379414-437ec3a54e93?q=80&w=1200&auto=format",
  "https://assets.lummi.ai/assets/Qmb2P6tF2qUaFXnXpnnp2sk9HdVHNYXUv6MtoiSq7jjVhQ?auto=format&w=1500",
  "https://images.unsplash.com/photo-1508873881324-c92a3fc536ba?q=80&w=1200&auto=format",
]


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
  
  const [lightningActive, setLightningActive] = useState(false);
  const [lightningRepeat, setLightningRepeat] = useState<number>(1);
  
  useEffect(() => {
    const lightningInterval = setInterval(() => {
      setLightningActive(true);
      setLightningRepeat(Math.floor(Math.random() * 3) + 1); // Random 1-3 flashes
      setTimeout(() => {
        setLightningActive(false);
      }, 300);
    }, Math.random() * 5000 + 3000); // Random 3-8 seconds delay
    
    return () => clearInterval(lightningInterval);
  }, []);

  const imageTransform = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const heroTitle = "Zenitsu Agatsuma".split(" ");
  const heroDescription = "A passionate developer who might seem scared at first, but possesses shocking potential when it comes to building amazing web experiences.".split(" ");

  return (

        <section className="mx-auto w-full max-w-4xl rounded-[24px] border border-black/5 p-2 shadow-sm md:rounded-t-[44px]">
      <div className="relative mx-auto flex w-full flex-col rounded-[24px] border border-black/5 bg-neutral-800/5  shadow-sm md:items-start md:gap-8 md:rounded-b-[20px] md:rounded-t-[40px] ">
        <ImageCursorTrail
          items={images}
          maxNumberOfImages={5}
          distance={25}
          imgClass="sm:w-40 w-28 sm:h-48 h-36  "
          className=" max-w-4xl rounded-3xl "
        >
            <article className="relative z-50 flex flex-col items-center justify-center ">
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
      {/* Background Zenitsu Animation */}
      {/* Animated lightning background effects */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/40 to-black/20">
        {/* Lightning bolt pattern */}  
        <motion.div
          className="absolute inset-0 lightning-bolt"
          style={{
            backgroundImage: 'linear-gradient(135deg, transparent 48%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.1) 52%)',
            backgroundSize: '20px 20px',
            opacity: 0.1
          }}
          animate={{
            rotate: [0, 180],
            opacity: [0.05, 0.2, 0.05],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
      
      {/* Animated lightning flashes */}
      <div className="absolute inset-0 z-10">
        <AnimatePresence>
          {lightningActive && (
            <motion.div
              className="absolute inset-0 bg-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.7, 0] }}
              exit={{ opacity: 0 }}
              transition={{ 
                duration: 0.2, 
                repeat: lightningRepeat, 
                repeatType: "loop", 
                repeatDelay: 0.1 
              }}
            />
          )}
        </AnimatePresence>
      </div>
      
      <motion.div 
        className="flex-1 flex justify-center items-center"
        variants={imageVariants}
        whileHover="hover"
      >
        <motion.div 
          className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-primary/80"
          style={{ y: imageTransform }}
          >
          <video
            src="/videos/loader.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="object-cover object-center w-full h-full"
            style={{ aspectRatio: "16/9" }}
          >
            <source src="/videos/loader.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
           <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
        </motion.div>
      </motion.div>
</motion.section>
          </article>
        </ImageCursorTrail>
      </div>
    </section>

        
  );
}
