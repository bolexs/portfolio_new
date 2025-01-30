"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Image from "next/image";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/bolu_icon/Vector.png"
              alt="Logo"
              width={24}
              height={24}
              className="object-contain"
            />
            <span className="text-xl font-bold">Personal</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-sm hover:text-primary">
              About Me
            </Link>
            <Link href="#skills" className="text-sm hover:text-primary">
              Skills
            </Link>
            <Link href="#projects" className="text-sm hover:text-primary">
              Projects
            </Link>
            <Link href="#contact" className="text-sm hover:text-primary">
              Contact Me
            </Link>
          </nav>

          <Button asChild>
            <a
              href="https://drive.google.com/file/d/1w9-k26Hkm0AbYKQDaV3yo4SsELAJ5Nny/view?usp=sharing"
              target="_blank"
              className="flex items-center space-x-2"
              rel="noreferrer"
            >
              <span>Resume</span>
              <Download className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
