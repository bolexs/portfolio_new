"use client"

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion"
import { useRef } from "react"

interface TextRevealProps {
  children: string
  className?: string
}

export function TextReveal({ children, className }: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "start 0.25"],
  })

  const words = children.split(" ")

  return (
    <div ref={containerRef} className={className}>
      <p className="flex flex-wrap">
        {words.map((word, i) => {
          const start = i / words.length
          const end = start + 1 / words.length
          return (
            <RevealWord key={i} range={[start, end]} progress={scrollYProgress}>
              {word}
            </RevealWord>
          )
        })}
      </p>
    </div>
  )
}

function RevealWord({
  children,
  range,
  progress,
}: {
  children: string
  range: [number, number]
  progress: MotionValue<number>
}) {
  const opacity = useTransform(progress, range, [0.15, 1])
  const y = useTransform(progress, range, [4, 0])

  return (
    <motion.span style={{ opacity, y }} className="inline-block mr-[0.3em] will-change-transform">
      {children}
    </motion.span>
  )
}
