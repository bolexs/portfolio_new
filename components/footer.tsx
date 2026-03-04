"use client"

import { motion } from "framer-motion"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      className="py-8 bg-muted/30 border-t border-border/20 overflow-hidden"
      initial={{ clipPath: "inset(100% 0 0 0)" }}
      whileInView={{ clipPath: "inset(0% 0 0 0)" }}
      transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground">
            &copy; {currentYear} Boluwatife Ade-ojo. All rights reserved.
          </p>
          <p className="text-muted-foreground mt-2 md:mt-0">Built with Care &hearts;</p>
        </div>
      </div>
    </motion.footer>
  )
}
