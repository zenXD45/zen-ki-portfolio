"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from 'next/link';
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
    const { toast } = useToast();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // In a real app, you'd handle form submission here.
        // For this demo, we'll just show a success toast.
        toast({
            title: "Message Sent!",
            description: "Thanks for reaching out. I'll get back to you... maybe after a nap.",
        });
        (e.target as HTMLFormElement).reset();
    };

  return (
    <section id="contact" className="container mx-auto px-4 md:px-6 py-16 md:py-24 animate-fade-in">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-headline">Send a Signal</h2>
        <p className="max-w-2xl mx-auto text-muted-foreground">
          Have a question or a mission for me? Don't be shy, send a message. I promise I won't scream... much.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-slide-in-from-left">
            <Card>
                <CardHeader>
                    <CardTitle>Contact Form</CardTitle>
                    <CardDescription>Fill out the form and I'll receive your message.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <Input placeholder="Your Name" name="name" required />
                        <Input type="email" placeholder="Your Email" name="email" required />
                        <Textarea placeholder="Your Message" name="message" rows={5} required />
                        <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Send Message</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
        <div className="space-y-6 text-center md:text-left animate-slide-in-from-right">
            <h3 className="text-2xl font-semibold">Or find me elsewhere</h3>
            <p className="text-muted-foreground">
                Connect with me on social media. I'm usually lurking around, avoiding demons and shipping bugs.
            </p>
            <div className="flex justify-center md:justify-start gap-6">
                <Link href="#" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                    <Github className="w-8 h-8" />
                </Link>
                <Link href="#" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin className="w-8 h-8" />
                </Link>
                <Link href="#" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                    <Twitter className="w-8 h-8" />
                </Link>
            </div>
        </div>
      </div>
    </section>
  );
}
