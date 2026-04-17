"use client"

import { useCallback, useEffect, useState } from "react"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"
import { useTheme } from "next-themes"
import { useIsMobile } from "@/hooks/use-mobile"

export function ParticlesBackground() {
  const [init, setInit] = useState(false)
  const { resolvedTheme } = useTheme()
  const isDarkTheme = resolvedTheme === "dark"
  const isMobile = useIsMobile()

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  const particlesLoaded = useCallback(async () => {}, [])

  if (!init) return null

  return (
    <Particles
      className="absolute inset-0 -z-10"
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={{
        background: {
          color: { value: "transparent" },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: { enable: false },
            onHover: { enable: true, mode: "grab" },
            resize: { enable: true },
          },
          modes: {
            grab: {
              distance: 140,
              links: { opacity: 0.3 },
            },
          },
        },
        particles: {
          color: {
            value: isDarkTheme ? "#ffffff" : "#000000",
          },
          links: {
            color: isDarkTheme ? "#ffffff" : "#000000",
            distance: isMobile ? 140 : 200,
            enable: true,
            opacity: 0.08,
            width: 0.5,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "out" },
            random: false,
            speed: isMobile ? 0.25 : 0.4,
            straight: false,
          },
          number: {
            density: { enable: true },
            value: isMobile ? 25 : 60,
          },
          opacity: {
            value: { min: 0.05, max: 0.2 },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 0.5, max: 2 },
          },
        },
        detectRetina: true,
      }}
    />
  )
}
