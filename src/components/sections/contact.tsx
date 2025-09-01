"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from 'next/link';
import { useToast } from "@/hooks/use-toast";
import { motion } from 'framer-motion';

export default function ContactSection() {
    const { toast } = useToast();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        toast({
            title: "Message Sent!",
            description: "Thanks for reaching out. I'll get back to you... maybe after a nap.",
        });
        (e.target as HTMLFormElement).reset();
    };

    const sectionVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
    };

  return (
    <motion.section
      id="contact"
      className="container mx-auto px-4 md:px-6 py-16 md:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-4xl md:text-5xl font-bold font-headline text-glow">Contact Me</h2>
        <p className="max-w-2xl mx-auto text-muted-foreground text-xl">
          Have a question or a mission for me? Send a message.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
            <Card className="border-primary/50">
                <CardHeader>
                    <CardTitle className="font-headline text-3xl">Contact Form</CardTitle>
                    <CardDescription className="text-lg">Fill out the form to send a message.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <Input placeholder="Your Name" name="name" required className="text-lg" />
                        <Input type="email" placeholder="Your Email" name="email" required className="text-lg"/>
                        <Textarea placeholder="Your Message" name="message" rows={5} required className="text-lg"/>
                        <Button type="submit" className="w-full font-sans text-lg">Send Message</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
        <div className="space-y-6 text-center md:text-left">
            <h3 className="text-3xl font-semibold font-headline text-glow">Find Me Online</h3>
            <p className="text-muted-foreground text-xl">
                Connect with me on social media.
            </p>
            <div className="flex justify-center md:justify-start gap-6">
                <Link href="#" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                    <Github className="w-10 h-10" />
                </Link>
                <Link href="#" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin className="w-10 h-10" />
                </Link>
                <Link href="#" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                    <Twitter className="w-10 h-10" />
                </Link>
            </div>
        </div>
      </div>
    </motion.section>
  );
}
