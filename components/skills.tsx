"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"
import { SectionHeading } from "@/components/section-heading"
import { useElementMousePosition } from "@/hooks/use-element-mouse-position"

const skills = [
  { name: "TypeScript", icon: "/bolu_icon/icon-typescript.svg" },
  { name: "Python", icon: "/bolu_icon/py.png" },
  { name: "React", icon: "/bolu_icon/icon-react.svg" },
  { name: "Nest.js", icon: "/bolu_icon/icon-nestjs.svg" },
  { name: "FastAPI", icon: "/bolu_icon/FastAPI.svg" },
  { name: "Django", icon: "/bolu_icon/django-logo-positive.svg" },
  { name: "Docker", icon: "/bolu_icon/icon-docker.svg" },
  { name: "Kubernetes", icon: "/bolu_icon/icon-kubernetes.svg" },
  { name: "Terraform", icon: "/bolu_icon/icon-terraform.svg" },
  { name: "Postgres", icon: "/bolu_icon/icon-postgresql.svg" },
  { name: "Tailwindcss", icon: "/bolu_icon/icon-tailwindcss.svg" },
  { name: "Git", icon: "/bolu_icon/Vector (1).png" },
]

const dealtCardVariants = {
  hidden: (i: number) => ({
    opacity: 0,
    scale: 0.6,
    y: 100,
    x: 50,
    rotate: 8 + (i % 5) * 2,
    filter: "blur(4px)",
  }),
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    x: 0,
    rotate: 0,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.06,
      duration: 0.6,
      type: "spring",
      stiffness: 200,
      damping: 18,
      mass: 0.8,
    },
  }),
}

function SkillCard({ skill, index }: { skill: (typeof skills)[number]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const { relX, relY } = useElementMousePosition(cardRef)
  const rotateX = useTransform(relY, [-1, 1], [10, -10])
  const rotateY = useTransform(relX, [-1, 1], [-10, 10])

  return (
    <motion.div
      custom={index}
      variants={dealtCardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      style={{ perspective: 800 }}
    >
      <motion.div
        ref={cardRef}
        className="group relative cursor-pointer"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{
          scale: 1.05,
          y: -8,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Glow effect behind card on hover */}
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/0 via-primary/0 to-purple-500/0 rounded-xl blur-lg transition-all duration-500 group-hover:from-primary/20 group-hover:via-primary/10 group-hover:to-purple-500/20" />

        <Card className="relative border-2 border-border/50 group-hover:border-primary/60 transition-all duration-300 overflow-hidden bg-background/90 backdrop-blur-sm">
          <CardContent
            className="flex flex-col items-center justify-center p-6 text-center h-[150px]"
            style={{ transform: "translateZ(20px)" }}
          >
            <div className="transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1 mb-4">
              <Image
                src={skill.icon || "/placeholder.svg"}
                alt={skill.name}
                width={50}
                height={50}
              />
            </div>
            <h3 className="font-semibold transition-colors duration-300 group-hover:text-primary">
              {skill.name}
            </h3>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5" />

      <div className="container mx-auto px-4">
        <SectionHeading>My Skills</SectionHeading>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>

        {/* Subtle marquee ticker */}
        <div className="mt-16 overflow-hidden opacity-[0.07]">
          <motion.div
            className="flex gap-12 whitespace-nowrap"
            animate={{ x: [0, -1200] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            {[...skills, ...skills].map((skill, i) => (
              <span key={i} className="text-5xl md:text-7xl font-bold select-none">
                {skill.name}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
