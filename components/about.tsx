import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square">
            <Image
              src="/bolu_icon/Group 1000015845.png"
              alt="About Me"
              width={500}
              height={500}
              className="object-cover rounded-2xl"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I am a backend developer that loves learning and building
                innovative solutions. I have excellent organization skills, I am
                meticulous, and always looking for ways to improve on myself and
                skillset.
              </p>
              <p>
                I&apos;ve worked on projects using Python, PHP, and JavaScript.
                Apart from that, I have developed databases, and integrated
                APIs. I also volunteer as a backend tutor. I am very
                enthusiastic about bringing the technical and visual aspects of
                digital products to life. Writing clear, readable, highly
                performant code matters to me.
              </p>
              <p>
                I began my journey as a software engineer in 2022, and since
                then, I&apos;ve continued to grow and evolve as a developer,
                taking on new challenges and learning the latest technologies
                along the way. Now, 2 years after starting my software
                engineering journey, I&apos;m building cutting-edge software
                applications using modern technologies such as React.js,
                Javascript, FastAPI, Tailwindcss, and more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
