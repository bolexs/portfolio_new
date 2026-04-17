"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Send } from "lucide-react"
import Link from "next/link"
import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import { toast } from "sonner"
import { motion } from "framer-motion"
import { SectionHeading } from "@/components/section-heading"
import { useMagnetic } from "@/hooks/use-magnetic"

function AnimatedInput({
  type = "text",
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { type?: string }) {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className="relative">
      <input
        type={type}
        {...props}
        onFocus={(e) => {
          setIsFocused(true)
          props.onFocus?.(e)
        }}
        onBlur={(e) => {
          setIsFocused(false)
          props.onBlur?.(e)
        }}
        className="w-full bg-transparent border-b-2 border-border/50 pb-3 pt-2 focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground"
      />
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-primary"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isFocused ? 1 : 0 }}
        style={{ originX: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      />
    </div>
  )
}

function AnimatedTextarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className="relative">
      <textarea
        {...props}
        onFocus={(e) => {
          setIsFocused(true)
          props.onFocus?.(e)
        }}
        onBlur={(e) => {
          setIsFocused(false)
          props.onBlur?.(e)
        }}
        className="w-full min-h-[120px] bg-transparent border-b-2 border-border/50 pb-3 pt-2 focus:outline-none transition-colors resize-none text-foreground placeholder:text-muted-foreground"
      />
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-primary"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isFocused ? 1 : 0 }}
        style={{ originX: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      />
    </div>
  )
}

function MagneticButton({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const { x, y } = useMagnetic(ref, 0.25)

  return (
    <motion.div ref={ref} style={{ x, y }}>
      <Button type="submit" className="w-full group" {...props}>
        {children}
      </Button>
    </motion.div>
  )
}

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formRef.current) return

    const honeypot = (formRef.current.elements.namedItem("website") as HTMLInputElement | null)?.value
    if (honeypot) {
      toast.success("Message sent successfully!")
      formRef.current.reset()
      return
    }

    setIsSubmitting(true)

    try {
      await emailjs.sendForm(
        "service_iwrqg1i",
        "template_2cwju7l",
        formRef.current,
        "EhFVTitmCvc1-k2gi"
      )

      toast.success("Message sent successfully!")
      formRef.current.reset()
    } catch (error) {
      toast.error("Failed to send message. Please try again.")
      console.error(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/3" />

      <div className="container mx-auto px-4">
        <SectionHeading>
          Get In <span className="text-primary">Touch</span>
        </SectionHeading>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
          {/* Left info column — slides from left */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Let&apos;s <span className="text-primary">build</span> Something special
              </h3>
              <p className="text-muted-foreground mb-8">
                I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable
                interactive experiences.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-bold">Email</h4>
                <a
                  href="mailto:boluwatifeadeojo9@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  info@bobas.tech
                </a>
              </div>

              <div>
                <h4 className="text-xl font-bold">Socials</h4>
                <div className="flex items-center space-x-4 mt-2">
                  {[
                    {
                      href: "https://linkedin.com/in/boluwatife-ade-ojo",
                      icon: <Linkedin className="w-5 h-5" />,
                      label: "LinkedIn",
                    },
                    {
                      href: "https://github.com/bolexs",
                      icon: <Github className="w-5 h-5" />,
                      label: "GitHub",
                    },
                    {
                      href: "https://twitter.com/bolex396",
                      icon: <Twitter className="w-5 h-5" />,
                      label: "Twitter",
                    },
                  ].map((social) => (
                    <motion.div
                      key={social.label}
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href={social.href}
                        target="_blank"
                        className="p-2 rounded-lg border hover:border-primary hover:text-primary transition-all duration-300"
                        rel="noreferrer"
                      >
                        {social.icon}
                        <span className="sr-only">{social.label}</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right form column — slides from right */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6 p-6 bg-background/80 backdrop-blur-sm rounded-xl shadow-lg border border-border/50"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <AnimatedInput type="text" name="name" placeholder="Your Name" required />
            <AnimatedInput type="email" name="email" placeholder="Email" required />
            <AnimatedTextarea name="message" placeholder="How can I help?" required />
            {/* Honeypot — hidden from humans, filled by bots */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute left-[-9999px] h-0 w-0 opacity-0"
            />
            <MagneticButton disabled={isSubmitting}>
              <span className="mr-2">{isSubmitting ? "SENDING..." : "GET IN TOUCH"}</span>
              <motion.span
                animate={{ x: isSubmitting ? [0, 5, 0] : 0 }}
                transition={{ repeat: isSubmitting ? Number.POSITIVE_INFINITY : 0, duration: 1 }}
              >
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.span>
            </MagneticButton>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
