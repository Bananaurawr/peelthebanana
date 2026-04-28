import { Link } from 'react-router-dom'

export default function ExploreCard({ icon, title, description, to }) {
  return (
    <Link to={to} className="flex w-56 flex-col items-center gap-2 rounded-2xl border border-cream/10 bg-cream/5 px-6 py-10 text-center text-cream transition hover:-translate-y-2 hover:border-gold hover:bg-gold/10 hover:shadow-2xl">
      <div className="text-3xl">{icon}</div>
      <h2 className="font-serif text-xl">{title}</h2>
      <p className="text-sm leading-relaxed text-muted">{description}</p>
    </Link>
  )
}
