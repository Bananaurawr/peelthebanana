import BackNav from '../components/BackNav.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { projects } from '../data/projects.js'

export default function Projects() {
  return (
    <main className="min-h-screen bg-cream text-navy">
      <BackNav />
      <section className="px-6 py-28 md:px-20">
        <h1 className="mb-3 text-center font-serif text-4xl">Projects</h1>
        <p className="mb-10 text-center text-navy/70">A selected list of things I have built.</p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => <ProjectCard key={project.title} {...project} />)}
        </div>
      </section>
    </main>
  )
}
