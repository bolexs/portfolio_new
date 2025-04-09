"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const imageScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1])
  const imageOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1])
  const textY = useTransform(scrollYProgress, [0.1, 0.4], [50, 0])

  return (
    <section id="about" className="py-16 md:py-24 overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold inline-block">
            About <span className="text-primary">Me</span>
          </h2>
          <motion.div
            className="h-1 w-20 bg-primary mx-auto mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div className="relative aspect-square" style={{ scale: imageScale, opacity: imageOpacity }}>
            <div className="relative w-full h-full">
              <motion.div
                className="absolute -inset-4 bg-gradient-to-tr from-primary/30 to-purple-500/30 rounded-2xl blur-xl"
                animate={{
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
              <Image
                src="/bolu_icon/Group 1000015845.png"
                alt="About Me"
                width={500}
                height={500}
                className="object-cover rounded-2xl relative z-10 border-4 border-background shadow-xl"
              />
            </div>
          </motion.div>

          <motion.div className="space-y-6" style={{ opacity: textOpacity, y: textY }}>
            <div className="space-y-4 text-muted-foreground">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                I am a backend engineer that loves learning and building innovative solutions. I have excellent
                organization skills, I am meticulous, and always looking for ways to improve on myself and skillset.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                I've worked on projects using Python, PHP, and JavaScript. Apart from that, I have developed databases,
                and integrated APIs. I also volunteer as a backend tutor. I am very enthusiastic about bringing the
                technical and visual aspects of digital products to life. Writing clear, readable, highly performant
                code matters to me.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                I began my journey as a software engineer in 2022, and since then, I've continued to grow and evolve as
                a developer, taking on new challenges and learning the latest technologies along the way. Now, 3 years
                after starting my software engineering journey, I'm building cutting-edge software applications using
                modern technologies such as React.js, Javascript, FastAPI, Tailwindcss, and more.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
