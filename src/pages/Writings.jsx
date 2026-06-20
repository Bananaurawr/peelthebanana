import { Link } from "react-router-dom";
import BackNav from '../components/BackNav.jsx'
import { writings } from "../data/writings";

export default function Writings() {
  return (
    <main className="min-h-screen bg-cream text-navy">
      <BackNav />
      <section className="px-6 py-20 md:px-20">
        <h1 className="mb-3 text-center font-serif text-4xl">Writings</h1>
        <p className="mb-10 text-center text-navy/70">Thoughts, notes, and things worth saying</p>
        <div className="max-w-4xl mx-auto grid gap-6">
          {writings.map((post) => (
            <Link
              key={post.id}
              to={`/writings/${post.id}`}
              className="rounded-2xl border border-navy/20 p-6 hover:shadow-lg transition"
            >
              <p className="text-sm text-gray-500">{post.date} · {post.category}</p>
              <h2 className="text-2xl font-serif text-navy mt-2">{post.title}</h2>
              <p className="mt-3 text-gray-700">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}