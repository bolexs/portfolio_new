"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { FeaturedProjects } from "./featured-projects"
import { MyProjects } from "./my-projects"

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  return (
    <section id="projects" className="py-16 md:py-24 relative overflow-hidden" ref={sectionRef}>
      <motion.div className="absolute inset-0 -z-10" style={{ opacity: opacity.get() * 0.3 }}>
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-purple-500/5" />
      </motion.div>

      <motion.div className="container mx-auto px-4" style={{ opacity, scale }}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold inline-block">
            My <span className="text-primary">Projects</span>
          </h2>
          <motion.div
            className="h-1 w-20 bg-primary mx-auto mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A showcase of my work, including both live projects and development repositories.
          </p>
        </motion.div>

        <FeaturedProjects />
        <MyProjects />
      </motion.div>
    </section>
  )
}
