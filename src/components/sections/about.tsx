
"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { User, Zap, Coffee } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
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

const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: { opacity: 1, scale: 1, rotate: 0, transition: { type: 'spring', damping: 15, stiffness: 100, delay: 0.4 } },
};

const factItemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 80 } },
};


const funFacts = [
    {
      icon: <User className="text-primary" />,
      text: "Publicly, a timid developer who's terrified of production bugs.",
    },
    {
      icon: <Zap className="text-primary" />,
      text: "Privately, enters a hyper-focused state to ship flawless code at lightning speed.",
    },
    {
      icon: <Coffee className="text-primary" />,
      text: "Fueled by green tea and the fear of breaking the build.",
    },
];

const aboutMeTitle = "About Me".split(" ");
const aboutMeDescription = "A little more about the developer behind the code.".split(" ");
const whoAmITitle = "Who Am I?".split(" ");
const whoAmIDescription = "I'm a passionate developer who, much like Zenitsu, can appear a bit anxious on the surface—especially when a critical deadline looms like an approaching storm. However, when the pressure is on, I find my focus, channeling everything into creating clean, efficient, and impactful web experiences. My true potential is unlocked when I'm deep in the code, building something extraordinary.".split(" ");
const funFactsTitle = "Fun Facts".split(" ");


export default function AboutSection() {
  return (
    <motion.section
      id="about"
      className="container mx-auto py-24 px-4 md:px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="text-center space-y-4 mb-12">
        <motion.h2 variants={sectionVariants} className="text-4xl md:text-5xl font-bold font-headline text-glow">
           {aboutMeTitle.map((word, index) => (
            <motion.span key={index} variants={wordVariants} className="inline-block mr-4">
              {word}
            </motion.span>
          ))}
        </motion.h2>
        <motion.p variants={sectionVariants} className="max-w-2xl mx-auto text-muted-foreground text-xl">
           {aboutMeDescription.map((word, index) => (
            <motion.span key={index} variants={wordVariants} className="inline-block mr-1.5">
              {word}
            </motion.span>
          ))}
        </motion.p>
      </div>
      
      <div className="grid md:grid-cols-5 gap-12 items-center">
        <motion.div 
            variants={imageVariants}
            className="md:col-span-2"
        >
            <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-2xl border-4 border-primary/80 group">
                <Image
                    src="https://i.pinimg.com/564x/e0/59/3a/e0593a027953b036573f4a47a7413a96.jpg"
                    alt="Zenitsu contemplating code"
                    fill
                    data-ai-hint="anime character thinking"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
            </div>
        </motion.div>

        <motion.div 
            variants={sectionVariants}
            className="md:col-span-3 space-y-6"
        >
          <motion.div variants={sectionVariants}>
            <motion.h3 variants={titleVariants} className="text-3xl font-bold font-headline text-primary mb-4">
                {whoAmITitle.map((word, index) => (
                    <motion.span key={index} variants={wordVariants} className="inline-block mr-1.5">
                    {word}
                    </motion.span>
                ))}
            </motion.h3>
            <motion.p className="text-muted-foreground text-lg leading-relaxed" variants={sectionVariants}>
                {whoAmIDescription.map((word, index) => (
                    <motion.span key={index} variants={wordVariants} className="inline-block mr-1.5">
                    {word}
                    </motion.span>
                ))}
            </motion.p>
          </motion.div>
          
          <motion.div variants={sectionVariants}>
             <motion.h3 variants={titleVariants} className="text-3xl font-bold font-headline text-primary mb-4">
                {funFactsTitle.map((word, index) => (
                    <motion.span key={index} variants={wordVariants} className="inline-block mr-1.5">
                        {word}
                    </motion.span>
                ))}
             </motion.h3>
             <motion.div className="space-y-4" variants={sectionVariants}>
                {funFacts.map((fact, index) => (
                    <motion.div key={index} variants={factItemVariants}>
                        <Card className="bg-card/50 border-primary/30">
                            <CardContent className="p-4 flex items-center gap-4">
                                <div className="p-2 bg-muted rounded-full">
                                    {fact.icon}
                                </div>
                                <p className="text-lg text-muted-foreground">{fact.text}</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
             </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
