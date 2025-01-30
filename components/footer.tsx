"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Footer() {
  const [imageError, setImageError] = useState(false);

  return (
    <footer className="py-8 border-t bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            {!imageError ? (
              <Image
                src="/bolu_icon/Vector.png"
                alt="Logo"
                width={24}
                height={24}
                className="object-contain"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-6 h-6 bg-gray-200 rounded-full" />
            )}
            <span className="text-xl font-bold text-foreground">Personal</span>
          </Link>

          <p className="text-sm font-semibold text-foreground mt-4 md:mt-0">
            © 2025 Boluwatife Ade-ojo. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
