import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Reviews } from "@/components/reviews";
import { Skills } from "@/components/skills";
import { Toaster } from "@/components/ui/sonner";

export default function Home() {
  return (
    <>
      <main>
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Reviews />
        <Contact />
        <Footer />
      </main>
      <Toaster />
    </>
  );
}
