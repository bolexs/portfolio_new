"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useState } from "react"

export function CustomCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const smoothX = useSpring(cursorX, { stiffness: 300, damping: 28, mass: 0.5 })
  const smoothY = useSpring(cursorY, { stiffness: 300, damping: 28, mass: 0.5 })

  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    // Don't show on touch devices
    const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0
    setIsTouchDevice(hasTouch)
    if (hasTouch) return

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    // Detect hoverable elements
    const handleElementHover = () => setIsHovering(true)
    const handleElementLeave = () => setIsHovering(false)

    window.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)

    // Observe DOM for interactive elements
    const attachHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        "a, button, [role='button'], input, textarea, .cursor-hover"
      )
      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", handleElementHover)
        el.addEventListener("mouseleave", handleElementLeave)
      })
    }

    // Initial attach + re-attach on DOM changes
    attachHoverListeners()
    const observer = new MutationObserver(attachHoverListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
      observer.disconnect()
    }
  }, [cursorX, cursorY, isVisible])

  if (isTouchDevice) return null

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: smoothX,
          y: smoothY,
        }}
      >
        <motion.div
          className="rounded-full border border-white/80 -translate-x-1/2 -translate-y-1/2"
          animate={{
            width: isHovering ? 48 : 32,
            height: isHovering ? 48 : 32,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{
            width: { type: "spring", stiffness: 300, damping: 20 },
            height: { type: "spring", stiffness: 300, damping: 20 },
            opacity: { duration: 0.2 },
          }}
        />
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      >
        <motion.div
          className="rounded-full bg-white -translate-x-1/2 -translate-y-1/2"
          animate={{
            width: isHovering ? 6 : 4,
            height: isHovering ? 6 : 4,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{
            width: { type: "spring", stiffness: 500, damping: 25 },
            height: { type: "spring", stiffness: 500, damping: 25 },
            opacity: { duration: 0.2 },
          }}
        />
      </motion.div>
    </>
  )
}
