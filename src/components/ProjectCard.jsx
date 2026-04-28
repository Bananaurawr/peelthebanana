export default function ProjectCard({ title, description, link, image }) {
  return (
    <article className="rounded-2xl border border-navy/15 bg-white/30 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-4 flex aspect-video items-center justify-center overflow-hidden rounded-xl bg-navy/10">
        {image ? <img src={image} alt={title} className="h-full w-full object-cover" /> : <span className="text-sm text-navy/60">Project image</span>}
      </div>
      <h2 className="mb-2 font-serif text-2xl text-navy">{title}</h2>
      <p className="mb-4 leading-relaxed text-navy/80">{description}</p>
      <a href={link} className="font-medium text-gold hover:underline">View project</a>
    </article>
  )
}
