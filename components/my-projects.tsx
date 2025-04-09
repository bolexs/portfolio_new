"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Project {
  id: string
  title: string
  description: string
  image: string
  link: string
  github?: string
}

const projects: Project[] = [
  {
    id: "01",
    title: "Pocket Tracker Application",
    description:
      "Pocket Tracker App is a simple tool designed to help you manage and monitor your expenses efficiently",
    image: "/bolu_icon/image 771.png",
    link: "https://github.com/babafemiolatona/pocket-tracker/blob/master/README.md",
    github: "https://github.com/babafemiolatona/pocket-tracker",
  },
  {
    id: "02",
    title: "TicketHUB Application",
    description:
      "TicketHUB aims to provide developers with a seamless and efficient experience for integrating event ticketing functionality into their applications.",
    image: "/bolu_icon/TicketHUB.png",
    link: "https://github.com/bolexs/TicketHUB/blob/main/README.md",
    github: "https://github.com/bolexs/TicketHUB",
  },
]

export function MyProjects() {
  return (
    <div className="py-8">
      <h3 className="text-2xl font-bold mb-6">My Projects</h3>
      <div className="space-y-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 200, damping: 15 }}>
              <Card className="overflow-hidden border-none shadow-lg bg-background/80 backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className={`grid md:grid-cols-2 gap-6 ${index % 2 === 1 ? "md:grid-flow-dense" : ""}`}>
                    <div className="relative aspect-video md:aspect-auto overflow-hidden group">
                      <motion.div
                        className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                        whileHover={{ opacity: 0.2 }}
                      />
                      <motion.div
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                        className="h-full"
                      >
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          width={600}
                          height={400}
                          className="object-cover w-full h-full"
                        />
                      </motion.div>
                    </div>
                    <div className="p-8 flex flex-col justify-center space-y-4">
                      <motion.div
                        className="text-4xl font-bold text-primary/50"
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        {project.id}
                      </motion.div>
                      <motion.h3
                        className="text-2xl font-bold"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        {project.title}
                      </motion.h3>
                      <motion.p
                        className="text-muted-foreground"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        {project.description}
                      </motion.p>
                      <motion.div
                        className="flex space-x-4"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <Button asChild variant="link" className="w-fit p-0 group">
                          <Link href={project.link} target="_blank" className="flex items-center gap-2">
                            Read More
                            <motion.span
                              className="transform transition-transform duration-300 group-hover:translate-x-1"
                              initial={{ x: -5, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: 0.1 }}
                            >
                              <ArrowRight className="w-4 h-4" />
                            </motion.span>
                          </Link>
                        </Button>
                        {project.github && (
                          <Button asChild variant="link" className="w-fit p-0 group">
                            <Link href={project.github} target="_blank" className="flex items-center gap-2">
                              GitHub
                              <Github className="w-4 h-4 ml-1" />
                            </Link>
                          </Button>
                        )}
                      </motion.div>
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
