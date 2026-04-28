export default function SkillGroup({ title, skills }) {
  return (
    <div>
      <h3 className="mb-3 border-b border-gold/30 pb-2 text-xs font-medium uppercase tracking-[0.14em] text-gold">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="rounded-full border border-cream/10 bg-cream/10 px-3 py-1 text-sm text-cream transition hover:border-gold hover:bg-gold/15">
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}
