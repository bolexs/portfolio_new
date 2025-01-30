import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold space-y-2">
                <span className="text-muted-foreground block">
                  Hello I&apos;m
                </span>
                <span className="block">Boluwatife Ade-ojo.</span>
                <span className="block">Software Developer</span>
                <span className="text-muted-foreground block">
                  Based In Nigeria.
                </span>
              </h1>
              <p className="text-muted-foreground max-w-lg">
                A versatile software engineer with a strong focus on backend
                development and system architecture. I&apos;m equally passionate
                about technology entrepreneurship, running a successful business
                focused on the sale of gadgets and accessories.
              </p>
            </div>

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

          <div className="relative aspect-square">
            <Image
              src="/bolu_icon/Frame 20.png"
              alt="Developer Illustration"
              width={500}
              height={500}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
