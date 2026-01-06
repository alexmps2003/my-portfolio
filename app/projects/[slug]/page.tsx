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

  return (
    <main className="min-h-screen bg-black text-white pt-32 px-6">
      <div className="max-w-4xl mx-auto">
        <a href="/" className="text-blue-500 hover:underline mb-8 inline-block">
          ← Back to Portfolio
        </a>

        <h1 className="text-6xl md:text-8xl font-bold capitalize mb-12">
          {displayTitle}
        </h1>

        <div className="w-full h-96 bg-zinc-900 rounded-3xl border border-white/10 flex items-center justify-center mb-16">
          <span className="text-zinc-800 text-9xl font-bold uppercase select-none">
            {slug[0]}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">About</h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              This is a dynamic page for the {displayTitle}. Everything you see
              here is generated automatically based on the URL.
            </p>
          </div>
          <div className="space-y-6">
            <div>
              <p className="text-zinc-500 uppercase text-xs font-bold tracking-widest">
                Year
              </p>
              <p className="text-lg">2026</p>
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
