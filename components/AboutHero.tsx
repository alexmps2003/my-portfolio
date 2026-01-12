export default function AboutHero() {
  return (
    <section className="py-24 px-6 border-t border-white/5">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6">
            Beyond the <span className="text-blue-500">Code</span>
          </h2>
          <p className="text-zinc-400 leading-relaxed mb-4">
            I’m a developer who believes that digital experiences should feel as
            natural as a physical one. When I’m not pushing pixels in Next.js,
            you can find me [Insert Hobby: e.g., exploring brutalist
            architecture, practicing photography, or deep-diving into music
            theory].
          </p>
          <p className="text-zinc-400 leading-relaxed">
            I build with a focus on performance, motion, and that "extra 10%" of
            polish that makes a user smile.
          </p>
        </div>
        <div className="aspect-square bg-zinc-900 rounded-2xl border border-white/10 flex items-center justify-center text-zinc-500 italic">
          {/* Replace this with a real photo of yourself or your workspace */}
          [Placeholder for a Personal Photo]
        </div>
      </div>
    </section>
  );
}
