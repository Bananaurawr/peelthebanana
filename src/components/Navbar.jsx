import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 flex min-h-16 w-full items-center border-b border-gold/25 bg-navy-deep px-4 py-3 md:px-12">
      <Link to="/" className="mr-auto font-serif text-lg font-bold text-gold-light">
        Aura&apos;s Portfolio
      </Link>
      <div className="flex flex-wrap items-center gap-1 text-sm tracking-wide text-cream">
        <a href="/#skills" className="rounded-md px-3 py-2 hover:bg-white/10">Skills</a>
        <a href="/#get-to-know" className="rounded-md px-3 py-2 hover:bg-white/10">Explore</a>
        <a href="mailto:auranawamadani@gmail.com" className="rounded-md px-3 py-2 hover:bg-white/10">Contact</a>
      </div>
    </nav>
  )
}
