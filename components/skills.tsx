"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

const skills = [
  { name: "Javascript", icon: "/bolu_icon/icon-javscript.png" },
  { name: "Postgres", icon: "/bolu_icon/icon-postgresql.svg" },
  { name: "Tailwindcss", icon: "/bolu_icon/icon-tailwindcss.svg" },
  { name: "Git", icon: "/bolu_icon/icon-git.svg" },
  { name: "React", icon: "/bolu_icon/icon-react.svg" },
  { name: "PHP", icon: "/bolu_icon/new-php-logo.svg" },
  { name: "Laravel", icon: "/bolu_icon/laravel-2.svg" },
  { name: "Python", icon: "/bolu_icon/py.png" },
  { name: "Django", icon: "/bolu_icon/django-logo-positive.svg" },
  { name: "FastAPI", icon: "/bolu_icon/FastAPI.svg" },
];

export function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="flex flex-col items-center justify-center p-6 text-center h-[150px]">
                  <Image
                    src={skill.icon || "/placeholder.svg"}
                    alt={skill.name}
                    width={50}
                    height={50}
                    className="mb-4"
                  />
                  <h3 className="font-semibold">{skill.name}</h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
