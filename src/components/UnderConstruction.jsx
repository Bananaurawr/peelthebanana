import BackNav from './BackNav.jsx'
import catConstruction from "../assets/cat-construction.jpg";

export default function UnderConstruction({ title, link }) {
  return (
    <main className="min-h-screen bg-navy-deep text-cream">
      <BackNav />
      <section className="flex min-h-screen flex-col items-center justify-center gap-5 px-6 pt-20 text-center">
        <h1 className="font-serif text-4xl text-gold-light">{title}</h1>
        <h2 className="text-lg font-normal text-muted"><i>Meow</i> this page is under construction</h2>
        <div className="flex h-64 w-64 items-center justify-center rounded-2xl bg-cream/10 shadow-[8px_8px_0_#c9933a]">
          <img src={catConstruction} alt="Under Construction" className="h-full w-full object-cover rounded-2xl" />
        </div>
        <p className="max-w-md leading-relaxed text-muted">
          Please check back soon! {link}
        </p>
      </section>
    </main>
  )
}
