"use client"

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Quote } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const reviews = [
  {
    name: "Paul Negedu",
    role: "CEO at QuizLink | Ex-Dell Engineer",
    image: "/bolu_icon/Ellipse 2664.png",
    content:
      "Bolu is exceptional at taking ideas from 0 to 1 and architecting production-ready systems quickly. On QuizLink's launch day, he caught a security breach attempt and immediately pushed a fix, preventing a critical incident. He's a T-shaped developer with deep Python and database expertise plus full-stack knowledge. He architected our microservices infrastructure, implemented LLM integrations, and built systems serving 4,000+ active users. He thinks about scalability, maintainability, and security from day one.",
  },
  {
    name: "Ikechukwu Anowa-Duke",
    role: "Visual Designer",
    image: "/bolu_icon/Ellipse 2664.png",
    content:
      "Working with Boluwatife was a great experience. His technical expertise and attention to detail resulted in an outstanding product.",
  },
  {
    name: "Praise",
    role: "UI Designer",
    image: "/bolu_icon/Ellipse 2664.png",
    content:
      "Exceptional developer who brings both technical skill and creative thinking to every project. A pleasure to work with.",
  },
  {
    name: "Farouk Ejalonibu",
    role: "Frontend Engineer",
    image: "/bolu_icon/Ellipse 2664.png",
    content:
      "Boluwatife's backend development skills are top-notch. He consistently delivers high-quality, well-documented code.",
  },
]

const allReviews = [...reviews, ...reviews]

function ReviewCard({ review }: { review: (typeof reviews)[number] }) {
  return (
    <Card className="min-w-[320px] max-w-[400px] flex-shrink-0 group hover:border-primary/50 transition-colors duration-300">
      <CardContent className="p-6 flex flex-col h-full relative">
        <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/10 group-hover:text-primary/25 transition-colors duration-300" />

        <p className="text-muted-foreground flex-grow mb-4 relative z-10 text-sm leading-relaxed">
          &ldquo;{review.content}&rdquo;
        </p>
        <div className="flex items-center gap-3 mt-auto pt-4 border-t border-border/50">
          <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
            <Image src={review.image || "/placeholder.svg"} alt={review.name} fill className="object-cover" />
          </div>
          <div>
            <h4 className="font-semibold text-sm">{review.name}</h4>
            <p className="text-xs text-muted-foreground">{review.role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export function Reviews() {
  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeading>
          Client <span className="text-primary">Reviews</span>
        </SectionHeading>
      </div>

      {/* Infinite marquee */}
      <div className="relative group">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-background to-transparent z-10" />

        <div
          className="flex gap-6 py-4 animate-marquee group-hover:[animation-play-state:paused]"
          style={{ width: "fit-content" }}
        >
          {allReviews.map((review, i) => (
            <ReviewCard key={`review-${i}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  )
}
