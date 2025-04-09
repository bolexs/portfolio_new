"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

const skills = [
  { name: "Javascript", icon: "/bolu_icon/icon-javscript.png" },
  { name: "Postgres", icon: "/bolu_icon/icon-postgresql.svg" },
  { name: "Tailwindcss", icon: "/bolu_icon/icon-tailwindcss.svg" },
  { name: "Git", icon: "/bolu_icon/Vector (1).png" },
  { name: "React", icon: "/bolu_icon/icon-react.svg" },
  { name: "PHP", icon: "/bolu_icon/new-php-logo.svg" },
  { name: "Laravel", icon: "/bolu_icon/laravel-2.svg" },
  { name: "Python", icon: "/bolu_icon/py.png" },
  { name: "Django", icon: "/bolu_icon/django-logo-positive.svg" },
  { name: "FastAPI", icon: "/bolu_icon/FastAPI.svg" },
]

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100])

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    }),
  }

  return (
    <section id="skills" className="py-16 md:py-24 bg-muted/30 relative overflow-hidden" ref={sectionRef}>
      <motion.div className="absolute inset-0 -z-10" style={{ opacity: opacity.get() * 0.3 }}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5" />
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/10 dark:bg-primary/5"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      <motion.div className="container mx-auto px-4" style={{ y, opacity }}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold inline-block">My Skills</h2>
          <motion.div
            className="h-1 w-20 bg-primary mx-auto mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  y: -5,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Card className="border-2 hover:border-primary transition-all duration-300 overflow-hidden bg-background/80 backdrop-blur-sm">
                  <CardContent className="flex flex-col items-center justify-center p-6 text-center h-[150px]">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <Image
                        src={skill.icon || "/placeholder.svg"}
                        alt={skill.name}
                        width={50}
                        height={50}
                        className="mb-4"
                      />
                    </motion.div>
                    <motion.h3
                      className="font-semibold"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      {skill.name}
                    </motion.h3>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
