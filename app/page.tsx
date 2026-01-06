import { Reveal } from "@/components/Reveal";
import { ProjectCard } from "@/components/ProjectCard";

const PROJECTS = [
  {
    title: "E-commerce App",
    description: "A full-stack shop with Stripe payments.",
    tags: ["Next.js", "Stripe", "Tailwind"],
  },
  {
    title: "AI Dashboard",
    description: "Real-time data visualization using OpenAI.",
    tags: ["React", "Python", "Framer Motion"],
  },
  {
    title: "Social Media Platform",
    description: "A place for developers to share code snippets.",
    tags: ["Next.js", "PostgreSQL", "Prisma"],
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-black text-white px-6 py-24">
      {/* Hero Section */}

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
              />
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
