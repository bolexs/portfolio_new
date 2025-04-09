"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, CheckCircle, XCircle, Loader2 } from "lucide-react"
import Link from "next/link"

interface Project {
  id: string
  title: string
  description: string
  image: string
  url: string
  technologies: string[]
}

const projects: Project[] = [
  {
    id: "01",
    title: "FleetManager Tech",
    description:
      "Advanced fleet management technology platform with predictive maintenance and analytics capabilities.",
    image: "/projects/fleetmanager-tech.png",
    url: "https://fleetmanager.tech",
    technologies: ["Next.js", "React", "Python", "FastAPI", "TailwindCSS"],
  },
  {
    id: "02",
    title: "Quizlink",
    description:
      "Interactive quiz platform for creating, sharing, and participating in quizzes for educational and entertainment purposes.",
    image: "/projects/quizlink.png",
    url: "https://quizlink.net",
    technologies: ["React", "Python", "FastAPI", "Postgres", "Tailwind CSS"],
  },
]

export function FeaturedProjects() {
  const [projectStatus, setProjectStatus] = useState<Record<string, boolean>>({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkSiteStatus = async () => {
      const statusResults: Record<string, boolean> = {}

      for (const project of projects) {
        try {
          // Simulate API call to check status
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
    <div className="py-8">
      <h3 className="text-2xl font-bold mb-6">Featured Projects</h3>
      <div className="grid md:grid-cols-3 gap-x-8 gap-y-16">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="h-full"
            >
              <Card className="overflow-hidden h-full border-none shadow-lg bg-background/80 backdrop-blur-sm">
                <CardContent className="p-0 flex flex-col h-full">
                  <div className="relative aspect-video group overflow-hidden">
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                      <Button asChild variant="secondary" size="sm">
                        <Link href={project.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Visit Site
                        </Link>
                      </Button>
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
  )
}
