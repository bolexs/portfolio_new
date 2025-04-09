"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface FloatingAnimationProps {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
}

export function FloatingAnimation({ children, delay = 0, duration = 4, className = "" }: FloatingAnimationProps) {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        repeat: Number.POSITIVE_INFINITY,
        duration,
        delay,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
