"use client"

import { useMotionValue, useSpring } from "framer-motion"
import { useEffect, type RefObject } from "react"

export function useElementMousePosition(ref: RefObject<HTMLElement | null>) {
  const relX = useMotionValue(0)
  const relY = useMotionValue(0)
  const smoothRelX = useSpring(relX, { stiffness: 200, damping: 20 })
  const smoothRelY = useSpring(relY, { stiffness: 200, damping: 20 })

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      relX.set(((e.clientX - rect.left) / rect.width - 0.5) * 2)
      relY.set(((e.clientY - rect.top) / rect.height - 0.5) * 2)
    }

    const handleLeave = () => {
      relX.set(0)
      relY.set(0)
    }

    el.addEventListener("mousemove", handleMove)
    el.addEventListener("mouseleave", handleLeave)
    return () => {
      el.removeEventListener("mousemove", handleMove)
      el.removeEventListener("mouseleave", handleLeave)
    }
  }, [ref, relX, relY])

  return { relX: smoothRelX, relY: smoothRelY }
}
