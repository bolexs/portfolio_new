"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface SectionHeadingProps {
  children: React.ReactNode
  subtitle?: string
}

export function SectionHeading({ children, subtitle }: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <div ref={ref} className="text-center mb-16">
      <div className="overflow-hidden pb-1">
        <motion.h2
          className="text-3xl md:text-5xl font-bold"
          initial={{ y: 80, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 80, opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
        >
          {children}
        </motion.h2>
      </div>
      <motion.div
        className="h-[2px] bg-primary mx-auto mt-4"
        initial={{ width: 0 }}
        animate={isInView ? { width: 60 } : { width: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
      />
      {subtitle && (
        <motion.p
          className="text-muted-foreground mt-4 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
