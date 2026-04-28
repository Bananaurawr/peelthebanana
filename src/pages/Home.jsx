import { ArrowDown } from 'lucide-react'
import Navbar from '../components/Navbar.jsx'
import SkillGroup from '../components/SkillGroup.jsx'
import ExploreCard from '../components/ExploreCard.jsx'
import { skillGroups } from '../data/skills.js'
import auraImg from '../assets/aura.jpg'

export default function Home() {
  return (
    <main className="bg-cream text-navy">
      <Navbar />

      <section className="relative flex min-h-screen flex-col items-center justify-center gap-10 overflow-hidden px-6 pt-24 text-center md:flex-row md:gap-16 md:px-20 md:text-left">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(30,38,64,0.07)_1px,transparent_1px)] [background-size:28px_28px]" />
        <div className="relative z-10 flex h-56 w-56 shrink-0 items-center justify-center rounded-3xl bg-navy/10 shadow-[10px_10px_0_#1e2640] md:h-80 md:w-80">
          <img src={auraImg} alt="Aura" className="w-80 h-80 object-cover rounded-2xl"></img>
        </div>

        <div className="relative z-10 max-w-xl">
          <div className="relative mb-6 h-16">
            <h2 style={{ '--chars': 6, '--w': '6ch', '--start': '0s', animation: 'typing 2s steps(var(--chars)) var(--start) forwards, deleting 1.5s steps(var(--chars)) calc(var(--start) + 3s) forwards' }} className="absolute left-0 top-0 overflow-hidden whitespace-nowrap font-serif text-5xl font-bold opacity-0">Hello!</h2>
            <h2 style={{ '--chars': 5, '--w': '5ch', '--start': '4.5s', animation: 'typing 2s steps(var(--chars)) var(--start) forwards, deleting 1.5s steps(var(--chars)) calc(var(--start) + 3s) forwards' }} className="absolute left-0 top-0 overflow-hidden whitespace-nowrap font-serif text-5xl font-bold opacity-0">Halo!</h2>
            <h2 style={{ '--chars': 8, '--w': '9ch', '--start': '9s', animation: 'typing 2s steps(var(--chars)) var(--start) forwards, deleting 1.5s steps(var(--chars)) calc(var(--start) + 3s) forwards' }} className="absolute left-0 top-0 overflow-hidden whitespace-nowrap font-serif text-5xl font-bold opacity-0">Merhaba!</h2>
            <h2 style={{ '--chars': 5, '--w': '5ch', '--start': '13.5s', animation: 'typing 2s steps(var(--chars)) var(--start) forwards, blinking-cursor 0.75s step-end calc(var(--start) + 2s) infinite' }} className="absolute left-0 top-0 overflow-hidden whitespace-nowrap font-serif text-5xl font-bold opacity-0">你好!</h2>
          </div>

          <p className="mb-7 text-lg leading-8 text-[#3a3f58]">
            My name is <strong>Aura Amrah</strong> known online as Bananadaddy or Banana.<br />
            I&apos;m a Computer Engineering student at Ankara University, currently finishing my 2nd year.<br />
            Currently I&apos;m building things with code, cloud, and a bit of AI on the side.
          </p>

          <div className="flex flex-wrap justify-center gap-3 md:justify-start">
            <a href="https://www.linkedin.com/in/aura-amrah/" target="_blank" className="rounded-lg border border-transparent bg-navy px-6 py-3 text-sm font-medium tracking-wide text-cream transition hover:-translate-y-1 hover:border-gold hover:shadow-lg">LinkedIn</a>
            <a href="https://github.com/Bananaurawr" target="_blank" className="rounded-lg border border-transparent bg-navy px-6 py-3 text-sm font-medium tracking-wide text-cream transition hover:-translate-y-1 hover:border-gold hover:shadow-lg">GitHub</a>
          </div>
        </div>

        <a href="#skills" style={{ animation: 'fade-in 2s ease-in, bounce-down 2s infinite 7s' }} className="absolute bottom-12 left-1/2 z-10 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full bg-navy text-cream transition hover:bg-gold">
          <ArrowDown size={18} />
        </a>
      </section>

      <section id="skills" className="bg-navy px-6 py-20 text-cream md:px-20">
        <h2 className="mb-2 font-serif text-3xl text-gold-light">Skills</h2>
        <p className="mb-12 text-sm text-muted">Things I work with</p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => <SkillGroup key={group.title} {...group} />)}
        </div>
      </section>

      <section id="get-to-know" className="min-h-screen bg-navy-deep px-6 py-20 text-cream md:px-20">
        <h1 className="mb-2 text-center font-serif text-4xl">Get to Know Me</h1>
        <p className="mb-14 text-center text-sm uppercase tracking-widest text-muted">A little more beyond the code</p>
        <div className="flex flex-wrap justify-center gap-6">
          <ExploreCard icon="🛠️" title="Projects" description="Things I've built, from full-stack apps to AI tools" to="/projects" />
          <ExploreCard icon="🎵" title="Music" description="What I listen to and love" to="/music" />
          <ExploreCard icon="✍️" title="Writings" description="Thoughts, notes, and things worth saying" to="/writings" />
        </div>
      </section>
    </main>
  )
}
