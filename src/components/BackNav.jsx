import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function BackNav() {
  return (
    <nav className="fixed top-0 z-50 flex h-16 w-full items-center border-b border-gold/20 bg-navy-deep px-5 md:px-12">
      <Link to="/" className="inline-flex items-center gap-2 rounded-lg border border-cream/15 bg-cream/5 px-5 py-2 text-sm font-medium text-cream transition hover:-translate-x-0.5 hover:border-gold hover:bg-gold/15">
        <ArrowLeft size={16} /> Back to Home
      </Link>
    </nav>
  )
}
