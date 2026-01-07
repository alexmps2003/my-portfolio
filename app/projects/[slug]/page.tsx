import { PROJECT_DETAILS } from "@/constants/projects";
import { notFound } from "next/navigation";

// This must be an async function
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // 1. Await the params promise
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;

  // 2. Safety guard for the Vercel build process
  if (!slug) return null;

  // 3. Format the slug for display (e.g., "social-media" -> "social media")
  const displayTitle = slug.replaceAll("-", " ");

  // Look up the specific project data using the slug
  const project = PROJECT_DETAILS[slug as keyof typeof PROJECT_DETAILS];

  // If the user types a URL that doesn't exist, show a 404
  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white pt-32 px-6">
      <div className="max-w-4xl mx-auto">
        <a href="/" className="text-blue-500 hover:underline mb-8 inline-block">
          ← Back to Portfolio
        </a>

        {/* Use project.title instead of just displayTitle for accuracy */}
        <h1 className="text-6xl md:text-8xl font-bold mb-12">
          {project.title}
        </h1>

        <div className="w-full h-96 bg-zinc-900 rounded-3xl border border-white/10 flex items-center justify-center mb-16 overflow-hidden">
          {/* If you want to show the project image here too: */}
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-50"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">About</h2>
            {/* USE THE FULL DESCRIPTION FROM YOUR DATA */}
            <p className="text-zinc-400 text-lg leading-relaxed">
              {project.fullDescription}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 bg-zinc-900 border border-white/10 rounded-full text-sm text-zinc-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-zinc-500 uppercase text-xs font-bold tracking-widest">
                Year
              </p>
              {/* USE PROJECT YEAR */}
              <p className="text-lg">{project.year}</p>
            </div>
            <div>
              <p className="text-zinc-500 uppercase text-xs font-bold tracking-widest">
                Role
              </p>
              <p className="text-lg">Full Stack Dev</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
