"use client"

import { Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ParticlesBackground } from "@/components/particles-background"
import { TypingAnimation } from "@/components/typing-animation"
import { useMagnetic } from "@/hooks/use-magnetic"
import { useRef, useEffect, useState } from "react"

function MagneticSocialIcon({
  href,
  icon,
  label,
}: {
  href: string
  icon: React.ReactNode
  label: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { x, y } = useMagnetic(ref, 0.4)

  return (
    <motion.div ref={ref} style={{ x, y }}>
      <Link
        href={href}
        target="_blank"
        className="p-3 rounded-lg border hover:border-primary hover:text-primary transition-colors duration-300 flex items-center justify-center"
        rel="noreferrer"
      >
        {icon}
        <span className="sr-only">{label}</span>
      </Link>
    </motion.div>
  )
}

const socialContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 1.5 } },
}

const socialItemVariant = {
  hidden: { opacity: 0, y: 25, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 400, damping: 15 },
  },
}

export function Hero() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20, mass: 0.5 })
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20, mass: 0.5 })

  const [windowSize, setWindowSize] = useState({ width: 1, height: 1 })

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight })

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
    }
  }, [mouseX, mouseY])

  const imageX = useTransform(smoothMouseX, [0, windowSize.width], [-15, 15])
  const imageY = useTransform(smoothMouseY, [0, windowSize.height], [-15, 15])
  const blobX = useTransform(smoothMouseX, [0, windowSize.width], [10, -10])
  const blobY = useTransform(smoothMouseY, [0, windowSize.height], [10, -10])

  const nameChars = "Boluwatife Ade-ojo.".split("")

  return (
    <section
      id="home"
      className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden min-h-screen flex items-center"
    >
      <ParticlesBackground />
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold space-y-2">
                {/* "Hello I'm" — clip reveal */}
                <span className="overflow-hidden block">
                  <motion.span
                    className="text-muted-foreground block"
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1], delay: 0.3 }}
                  >
                    Hello I&apos;m
                  </motion.span>
                </span>

                {/* Name — character-by-character reveal with rotateX */}
                <span className="block overflow-hidden" aria-label="Boluwatife Ade-ojo.">
                  <span className="inline-block" style={{ perspective: 600 }}>
                    {nameChars.map((char, i) => (
                      <motion.span
                        key={i}
                        className="inline-block"
                        initial={{ y: "110%", rotateX: -80, opacity: 0 }}
                        animate={{ y: 0, rotateX: 0, opacity: 1 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.5 + i * 0.03,
                          ease: [0.33, 1, 0.68, 1],
                        }}
                        aria-hidden="true"
                      >
                        {char === " " ? "\u00A0" : char}
                      </motion.span>
                    ))}
                  </span>
                </span>

                {/* Typing animation — clip reveal for the container */}
                <span className="overflow-hidden block">
                  <motion.span
                    className="block text-primary"
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1], delay: 0.9 }}
                  >
                    <TypingAnimation
                      words={[
                        "Infrastructure Engineer",
                        "Cloud Architect",
                        "DevOps Engineer",
                        "Software Engineer",
                      ]}
                      typingSpeed={150}
                      deletingSpeed={100}
                      delayBetweenWords={1500}
                    />
                  </motion.span>
                </span>
              </h1>

              {/* Description — blur-in effect */}
              <motion.p
                className="text-muted-foreground max-w-lg"
                initial={{ opacity: 0, y: 15, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 1.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                A versatile infrastructure engineer with a strong focus on backend development and system architecture.
                I&apos;m equally passionate about technology entrepreneurship, running a successful business focused on
                the sale of gadgets and accessories.
              </motion.p>
            </div>

            {/* Social icons — magnetic + spring stagger */}
            <motion.div
              className="flex items-center space-x-4"
              variants={socialContainerVariants}
              initial="hidden"
              animate="visible"
            >
              {[
                {
                  href: "https://linkedin.com/in/boluwatife-ade-ojo",
                  icon: <Linkedin className="w-5 h-5" />,
                  label: "LinkedIn",
                },
                {
                  href: "https://github.com/bolexs",
                  icon: <Github className="w-5 h-5" />,
                  label: "GitHub",
                },
                {
                  href: "https://twitter.com/bolex396",
                  icon: <Twitter className="w-5 h-5" />,
                  label: "Twitter",
                },
              ].map((social) => (
                <motion.div key={social.label} variants={socialItemVariant}>
                  <MagneticSocialIcon {...social} />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Profile image — mouse parallax + clip-path circle reveal */}
          <motion.div
            className="relative aspect-square"
            initial={{ clipPath: "circle(0% at 50% 50%)" }}
            animate={{ clipPath: "circle(75% at 50% 50%)" }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.33, 1, 0.68, 1] }}
          >
            <div className="relative w-full h-full">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full blur-3xl"
                style={{ x: blobX, y: blobY }}
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
              <motion.div style={{ x: imageX, y: imageY }}>
                <Image
                  src="/bolu_icon/Frame 20.png"
                  alt="Developer Illustration"
                  width={500}
                  height={500}
                  className="object-contain relative z-10"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
