"use client"

import Image from "next/image"
import { motion, useScroll, useTransform, useMotionValue, useSpring, useInView } from "framer-motion"
import { useRef, useEffect } from "react"
import { SectionHeading } from "@/components/section-heading"
import { TextReveal } from "@/components/text-reveal"

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const count = useMotionValue(0)
  const springCount = useSpring(count, { stiffness: 50, damping: 30 })
  const display = useTransform(springCount, (v) => Math.floor(v).toLocaleString())

  useEffect(() => {
    if (isInView) count.set(target)
  }, [isInView, target, count])

  return (
    <span ref={ref}>
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  )
}

const stats = [
  { value: 4, suffix: "+", label: "Years Experience" },
  { value: 4000, suffix: "+", label: "Platform Users" },
  { value: 10, suffix: "+", label: "Projects Delivered" },
]

export function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  // Clip-path curtain reveal for image
  const clipProgress = useTransform(scrollYProgress, [0.05, 0.35], [100, 0])
  const clipPath = useTransform(clipProgress, (v) => `inset(0 ${v}% 0 0)`)

  return (
    <section id="about" className="py-16 md:py-24 overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <SectionHeading>
          About <span className="text-primary">Me</span>
        </SectionHeading>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image with clip-path curtain reveal */}
          <div className="relative aspect-square">
            <div className="relative w-full h-full">
              <motion.div
                className="absolute -inset-4 bg-gradient-to-tr from-primary/30 to-purple-500/30 rounded-2xl blur-xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
              />
              <motion.div
                className="relative w-full h-full"
                style={{ clipPath }}
              >
                <Image
                  src="/bolu_icon/Group 1000015845.png"
                  alt="About Me"
                  width={500}
                  height={500}
                  className="object-cover rounded-2xl relative z-10 border-4 border-background shadow-xl"
                />
              </motion.div>
            </div>
          </div>

          {/* Text with word-by-word scroll reveal */}
          <div className="space-y-6">
            <div className="space-y-4 text-muted-foreground">
              <TextReveal>
                I am an infrastructure engineer who loves building scalable, high-impact solutions. One of my proudest achievements is co-building QuizLink, an interactive quiz platform that has grown to over 4,000 users. I am meticulous, detail-oriented, and always looking for ways to improve my craft.
              </TextReveal>
              <TextReveal>
                I've worked on projects using Python, TypeScript, and modern infrastructure tools like Docker, Kubernetes, and Terraform. From designing databases and integrating APIs to automating deployments and managing cloud infrastructure, I enjoy making systems reliable and efficient. Writing clear, readable, highly performant code matters to me.
              </TextReveal>
              <TextReveal>
                I began my journey as a software engineer in 2022, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, 4 years into my engineering journey, I'm building and deploying production-grade applications using modern technologies such as React, TypeScript, FastAPI, Nest.js, Docker, Kubernetes, and Terraform.
              </TextReveal>
            </div>

            {/* Stats counter row */}
            <motion.div
              className="grid grid-cols-3 gap-6 pt-6 border-t border-border/50"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
              viewport={{ once: true }}
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-foreground">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
