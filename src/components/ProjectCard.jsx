export default function ProjectCard({ title, description, link, tags = [] }) {
  return (
    <article className="rounded-2xl border border-navy/15 bg-white/30 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <h2 className="mb-2 font-serif text-2xl text-navy">{title}</h2>
      <p className="mb-4 leading-relaxed text-navy/80">{description}</p>
      {tags.length > 0 && (
        <div className="mb-5">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.12em] text-navy/60">Skills & interests</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="rounded-full border border-gold/35 bg-gold/10 px-2.5 py-1 text-xs font-medium text-navy">
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
      {link && <a href={link} className="font-medium text-gold hover:underline">View project</a>}
    </article>
  )
}
