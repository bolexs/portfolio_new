"use client"

import { Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ParticlesBackground } from "@/components/particles-background"
import { TypingAnimation } from "@/components/typing-animation"

export function Hero() {
  return (
    <section
      id="home"
      className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden min-h-screen flex items-center"
    >
      <ParticlesBackground />
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold space-y-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <motion.span
                  className="text-muted-foreground block"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  Hello I'm
                </motion.span>
                <motion.span
                  className="block"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  Boluwatife Ade-ojo.
                </motion.span>
                <motion.span
                  className="block text-primary"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                >
                  <TypingAnimation
                    words={["Software Engineer", "Cloud Architect","Al engineer", "DevOps Engineer", "Data Architect"]}
                    typingSpeed={150}
                    deletingSpeed={100}
                    delayBetweenWords={1500}
                  />
                </motion.span>
              </motion.h1>
              <motion.p
                className="text-muted-foreground max-w-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.8 }}
              >
                A versatile software engineer with a strong focus on backend development and system architecture. I'm
                equally passionate about technology entrepreneurship, running a successful business focused on the sale
                of gadgets and accessories.
              </motion.p>
            </div>

            <motion.div
              className="flex items-center space-x-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.8 }}
            >
              {[
                {
                  href: "https://linkedin.com/in/boluwatife-ade-ojo",
                  icon: <Linkedin className="w-5 h-5" />,
                  label: "LinkedIn",
                },
                { href: "https://github.com/bolexs", icon: <Github className="w-5 h-5" />, label: "GitHub" },
                { href: "https://twitter.com/bolex396", icon: <Twitter className="w-5 h-5" />, label: "Twitter" },
              ].map((social, index) => (
                <motion.div key={social.label} whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href={social.href}
                    target="_blank"
                    className="p-3 rounded-lg border hover:border-primary hover:text-primary transition-all duration-300 flex items-center justify-center"
                    rel="noreferrer"
                  >
                    {social.icon}
                    <span className="sr-only">{social.label}</span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative aspect-square"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
            }}
          >
            <div className="relative w-full h-full">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
              <Image
                src="/bolu_icon/Frame 20.png"
                alt="Developer Illustration"
                width={500}
                height={500}
                className="object-contain relative z-10"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-primary rounded-full flex justify-center p-1"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        >
          <motion.div
            className="w-1 h-2 bg-primary rounded-full"
            animate={{
              y: [0, 15, 0],
              opacity: [1, 0, 1],
            }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
