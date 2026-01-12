import { Reveal } from "@/components/Reveal";
import { ProjectCard } from "@/components/ProjectCard";
import { ContactForm } from "@/components/ContactForm";

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
    <main className="flex min-h-screen flex-col items-center bg-black text-white px-6 py-24">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium">
        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
        Available for new projects — 2026
      </div>

      <section className="flex flex-col items-center justify-center pt-32 pb-20 text-center">
        <Reveal>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">
            DESIGNER & <br />
            <span className="text-blue-500">DEVELOPER</span>
          </h1>
        </Reveal>

        <Reveal>
          <p className="mt-6 text-gray-400 text-lg md:text-xl max-w-xl">
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
          <h3 className="text-sm uppercase tracking-widest text-zinc-500 mb-8">
            My Go-To Tools
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FAVORITE_TECH.map((tech) => (
              <div
                key={tech.name}
                className="p-6 rounded-xl border border-white/5 bg-zinc-900/30"
              >
                <h4 className="font-bold text-blue-400 mb-2">{tech.name}</h4>
                <p className="text-sm text-zinc-500">{tech.reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* contact form */}
      <section id="contact" className="py-20">
        <h2 className="text-4xl font-bold text-center mb-10">Get In Touch</h2>
        <ContactForm />
      </section>
    </main>
  );
}
