"use client"

import { FeaturedProjects } from "./featured-projects"
import { MyProjects } from "./my-projects"
import { SectionHeading } from "@/components/section-heading"

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-primary/5 via-transparent to-purple-500/5" />

      <div className="container mx-auto px-4">
        <SectionHeading subtitle="A showcase of my work, including both live projects and development repositories.">
          My <span className="text-primary">Projects</span>
        </SectionHeading>

        <FeaturedProjects />
        <MyProjects />
      </div>
    </section>
  )
}
