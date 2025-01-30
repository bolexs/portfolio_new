"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const projects = [
  {
    id: "01",
    title: "Pocket Tracker Application",
    description:
      "Pocket Tracker App is a simple tool designed to help you manage and monitor your expenses efficiently",
    image: "/bolu_icon/image 771.png",
    link: "https://github.com/babafemiolatona/pocket-tracker",
  },
  {
    id: "02",
    title: "TicketHUB Application",
    description:
      "TicketHUB aims to provide developers with a seamless and efficient experience for integrating event ticketing functionality into their applications.",
    image: "/bolu_icon/TicketHUB.png",
    link: "https://github.com/bolexs/TicketHUB",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-primary">Projects</span>
        </h2>
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className={`grid md:grid-cols-2 gap-6 ${index % 2 === 1 ? "md:grid-flow-dense" : ""}`}>
                    <div className="relative aspect-video md:aspect-auto">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="p-6 flex flex-col justify-center space-y-4">
                      <div className="text-4xl font-bold text-muted-foreground">{project.id}</div>
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                      <p className="text-muted-foreground">{project.description}</p>
                      <Button asChild variant="link" className="w-fit p-0">
                        <Link href={project.link} target="_blank" className="flex items-center gap-2">
                          Read More <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

