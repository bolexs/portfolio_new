"use client"

import { useMotionValue, useSpring, type SpringOptions } from "framer-motion"
import { useEffect } from "react"

export function useMousePosition(springConfig: SpringOptions = { stiffness: 150, damping: 15, mass: 0.1 }) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothX = useSpring(mouseX, springConfig)
  const smoothY = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  return { mouseX, mouseY, smoothX, smoothY }
}
