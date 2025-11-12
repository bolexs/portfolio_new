"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import Image from "next/image"

const reviews = [
  {
    name: "Paul Negedu",
    role: "CEO at QuizLink | Ex-Dell Engineer",
    image: "/bolu_icon/Ellipse 2664.png",
    content:
      "I had the privilege of working with Bolu during the launch and development of QuizLink. Bolu is exceptional at taking ideas from 0 to 1, his ability to architect and ship production-ready systems quickly is remarkable. What sets Bolu apart is his proactive mindset and ownership mentality. On our launch day, he caught someone attempting to compromise our system and immediately pushed a security fix, preventing what could have been a critical incident. Bolu is the definition of a T-shaped developer - he has deep expertise in Python and database architecture while maintaining strong working knowledge across the full stack. At QuizLink, he architected our microservices infrastructure, implemented sophisticated LLM integrations, and built systems that now serve 4,000+ active users. He's someone who doesn't just write code - he thinks about scalability, maintainability, and security from day one.",
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

export function Reviews() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Client <span className="text-primary">Reviews</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image src={review.image || "/placeholder.svg"} alt={review.name} fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{review.name}</h3>
                      <p className="text-sm text-muted-foreground">{review.role}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground flex-grow">{review.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
