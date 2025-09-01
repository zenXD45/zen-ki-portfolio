
"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Database, Smartphone, Cloud, PenTool, GitBranch } from 'lucide-react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'Frontend', description: 'React, Next.js, TypeScript', icon: <Code /> },
  { name: 'Backend', description: 'Node.js, Express, Python', icon: <Database /> },
  { name: 'Mobile', description: 'React Native, Flutter', icon: <Smartphone /> },
  { name: 'Cloud & DevOps', description: 'AWS, Docker, Vercel', icon: <Cloud /> },
  { name: 'UI/UX Design', description: 'Figma, Prototyping', icon: <PenTool /> },
  { name: 'Version Control', description: 'Git, GitHub', icon: <GitBranch /> },
];

export default function SkillsSection() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="skills"
      className="container mx-auto px-4 md:px-6 flex flex-col justify-center h-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-4xl md:text-5xl font-bold font-headline text-glow">My Skills</h2>
        <p className="max-w-2xl mx-auto text-muted-foreground text-xl">
          A collection of my technical capabilities and tools I use.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            variants={itemVariants}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="group transition-all duration-300 hover:shadow-lg hover:border-primary hover:-translate-y-1 bg-card border-primary/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-headline text-2xl text-primary">
                  {skill.icon}
                  {skill.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg">{skill.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
