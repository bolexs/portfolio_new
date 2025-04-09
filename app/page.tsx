import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ProjectsSection } from "@/components/projects-section"
import { Reviews } from "@/components/reviews"
import { Skills } from "@/components/skills"
import { Toaster } from "@/components/ui/sonner"
import { PageTransition } from "@/components/page-transition"

export default function Home() {
  return (
    <PageTransition>
      <main>
        <Header />
        <Hero />
        <About />
        <Skills />
        <ProjectsSection />
        <Reviews />
        <Contact />
        <Footer />
      </main>
      <Toaster />
    </PageTransition>
  )
}
