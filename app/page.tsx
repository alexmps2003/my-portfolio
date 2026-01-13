import { Reveal } from "@/components/Reveal";
import { ProjectCard } from "@/components/ProjectCard";
import { ContactForm } from "@/components/ContactForm";
import TiltCard from "@/components/TiltCard";

const PROJECTS = [
  {
    title: "E-commerce App",
    description: "A full-stack shop with Stripe payments.",
    tags: ["Next.js", "Stripe", "Tailwind"],
    image: "/Ecommerce.jpg",
  },
  {
    title: "AI Dashboard",
    description: "Real-time data visualization using OpenAI.",
    tags: ["React", "Python", "Framer Motion"],
    image: "/AIdashboard.jpg",
  },
  {
    title: "Social Media Platform",
    description: "A place for developers to share code snippets.",
    tags: ["Next.js", "PostgreSQL", "Prisma"],
    image: "/Socialmediaplatform.jpg",
  },
];

const FAVORITE_TECH = [
  { name: "Next.js", reason: "For the speed and SEO" },
  { name: "Framer Motion", reason: "For making things feel alive" },
  { name: "Tailwind", reason: "For rapid, clean styling" },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white px-6 py-24 transition-colors duration-500">
      <section
        id="home"
        className="flex flex-col items-center justify-center pt-32 pb-20 text-center"
      >
        <Reveal>
          <h2 className="text-blue-600 dark:text-blue-500 text-lg md:text-xl font-medium mb-4 tracking-tight">
            Hi, I'm Pasindu Shanuka
          </h2>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">
            DESIGNER & <br />
            <span className="text-blue-600 dark:text-blue-500">DEVELOPER</span>
          </h1>
        </Reveal>

        <Reveal>
          <p className="mt-6 text-zinc-600 dark:text-gray-400 text-lg md:text-xl max-w-xl">
            I build high-end digital experiences using Next.js, Tailwind CSS,
            and Framer Motion.
          </p>
        </Reveal>
      </section>

      {/* Spacing */}
      <div className="h-24" />

      {/* Project Grid Section */}
      <section id="projects" className="w-full max-w-5xl">
        <Reveal>
          <h2 className="mb-12 text-4xl font-bold">Featured Work</h2>
        </Reveal>

        {/* This is the Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, index) => (
            <Reveal key={index}>
              <ProjectCard
                title={project.title}
                description={project.description}
                tags={project.tags}
                image={project.image}
              />
            </Reveal>
          ))}
        </div>

        <div className="py-20">
          <h3 className="text-sm uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-8">
            My Go-To Tools
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FAVORITE_TECH.map((tech) => (
              <TiltCard key={tech.name}>
                <div
                  key={tech.name}
                  className="p-6 rounded-xl border border-zinc-200 dark:border-white/5 bg-white dark:bg-zinc-900/30 shadow-sm dark:shadow-none transition-colors duration-500"
                >
                  <div style={{ transform: "translateZ(50px)" }}>
                    <h4 className="font-bold text-blue-600 dark:text-blue-400 mb-2">
                      {tech.name}
                    </h4>
                    <p className="text-sm text-zinc-500 dark:text-zinc-500">
                      {tech.reason}
                    </p>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>
      {/* contact form */}
      <section id="contact" className="py-20 w-full max-w-5xl">
        <h2 className="text-4xl font-bold text-center mb-10">Get In Touch</h2>
        <ContactForm />
      </section>
    </main>
  );
}
