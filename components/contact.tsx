"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

export function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm(
        "service_iwrqg1i",
        "template_2cwju7l",
        form.current!,
        "EhFVTitmCvc1-k2gi"
      );

      console.log(result);
      toast.success("Message sent successfully!");
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      console.error(error);
    }
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Form section with left margin */}
          <div className="max-w-md ml-8 md:ml-16">
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <Input type="text" name="name" placeholder="Your Name" required />
              <Input type="email" name="email" placeholder="Email" required />
              <Textarea name="message" placeholder="How can I help?" required />
              <Button type="submit">GET IN TOUCH</Button>
            </form>
          </div>

          {/* Content section with updated styling */}
          <div className="flex flex-col justify-center items-start space-y-8">
            <div className="space-y-2">
              <h2 className="text-5xl font-black leading-tight">
                Let&apos;s{" "}
                <span className="text-transparent [-webkit-text-stroke:2px_#000]">
                  talk
                </span>{" "}
                for
              </h2>
              <h2 className="text-5xl font-black">Something special</h2>
              <p className="text-[15px] font-bold text-zinc-500 my-4 max-w-md">
                I seek to push the limits of creativity to create high-engaging,
                user-friendly, and memorable interactive experiences.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl tracking-wide font-bold">
                boluwatufeadeojo@gmail.com
              </h4>
              <h4 className="text-xl tracking-wide font-bold">09058063363</h4>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4">Socials</h4>
              <div className="flex items-center space-x-4">
                <Link
                  href="https://linkedin.com/in/boluwatife-ade-ojo"
                  target="_blank"
                  className="p-2 rounded-lg border hover:bg-muted transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link
                  href="https://github.com/bolexs"
                  target="_blank"
                  className="p-2 rounded-lg border hover:bg-muted transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link
                  href="https://twitter.com/bolex396"
                  target="_blank"
                  className="p-2 rounded-lg border hover:bg-muted transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
