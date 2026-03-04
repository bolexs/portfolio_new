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
import { ScrollProgress } from "@/components/scroll-progress"
import { SmoothScroll } from "@/components/smooth-scroll"

export default function Home() {
  return (
    <PageTransition>
      <SmoothScroll />
      <main>
        <ScrollProgress />
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
