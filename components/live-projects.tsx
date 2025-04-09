"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, CheckCircle, XCircle, Loader2 } from "lucide-react"
import Link from "next/link"

interface Project {
  id: string
  title: string
  description: string
  image: string
  url: string
  github?: string
  technologies: string[]
}

const projects: Project[] = [
  {
    id: "01",
    title: "FleetManager",
    description: "A comprehensive fleet management solution built with Next.js and Python FastAPI.",
    image: "/projects/fleetmanager.png",
    url: "https://fleetmanager.live",
    github: "https://github.com/bolexs/fleetmanager",
    technologies: ["Next.js", "React", "Python", "FastAPI", "TailwindCSS"],
  },
  {
    id: "02",
    title: "Quizlink",
    description:
      "Interactive quiz platform for creating, sharing, and participating in quizzes for educational purposes.",
    image: "/projects/quizlink.png",
    url: "https://quizlink.net",
    github: "https://github.com/bolexs/quizlink",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
  },
]

export function LiveProjects() {
  const [projectStatus, setProjectStatus] = useState<Record<string, boolean>>({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkSiteStatus = async () => {
      const statusResults: Record<string, boolean> = {}

      for (const project of projects) {
        try {
          // Simulate API call to check status
          // In a real implementation, you would call an API endpoint
          await new Promise((resolve) => setTimeout(resolve, 1000))
          statusResults[project.id] = Math.random() > 0.2 // 80% chance of being online for demo
        } catch (error) {
          console.error(`Error checking status for ${project.url}:`, error)
          statusResults[project.id] = false
        }
      }

      setProjectStatus(statusResults)
      setLoading(false)
    }

    checkSiteStatus()
  }, [])

  return (
    <section id="live-projects" className="py-16 md:py-24 relative overflow-hidden">
      <motion.div className="absolute inset-0 -z-10" style={{ opacity: 0.3 }}>
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-purple-500/5" />
      </motion.div>

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold inline-block">
            Live <span className="text-primary">Projects</span>
          </h2>
          <motion.div
            className="h-1 w-20 bg-primary mx-auto mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Check out my currently deployed projects with live status indicators.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="h-full"
              >
                <Card className="overflow-hidden h-full border-none shadow-lg bg-background/80 backdrop-blur-sm">
                  <CardContent className="p-0 flex flex-col h-full">
                    <div className="relative aspect-video group overflow-hidden">
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                        <Button asChild variant="secondary" size="sm" className="mr-2">
                          <Link href={project.url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Visit Site
                          </Link>
                        </Button>
                        {project.github && (
                          <Button asChild variant="outline" size="sm">
                            <Link href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4 mr-2" />
                              Code
                            </Link>
                          </Button>
                        )}
                      </div>
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={600}
                        height={300}
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-3 right-3 z-20">
                        {loading ? (
                          <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
                            <Loader2 className="w-3 h-3 mr-1 animate-spin" /> Checking
                          </Badge>
                        ) : projectStatus[project.id] ? (
                          <Badge variant="success" className="backdrop-blur-sm">
                            <CheckCircle className="w-3 h-3 mr-1" /> Live
                          </Badge>
                        ) : (
                          <Badge variant="destructive">
                            <XCircle className="w-3 h-3 mr-1" /> Offline
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div className="p-5 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4 flex-grow">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="font-normal text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
