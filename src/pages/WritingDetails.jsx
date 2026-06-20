import { useParams, Link } from "react-router-dom";
import { writings } from "../data/writings";

function WritingDetail() {
  const { id } = useParams();
  const post = writings.find((item) => item.id === id);

  if (!post) {
    return <p className="pt-24 text-center">Writing not found.</p>;
  }

  return (
    <main className="min-h-screen bg-cream pt-24 px-8">
      <article className="max-w-3xl mx-auto">
        <Link to="/writings" className="text-sm underline">Back to writings</Link>

        <p className="text-sm text-gray-500 mt-8">{post.date} · {post.category}</p>
        <h1 className="text-4xl font-serif text-navy mt-2">{post.title}</h1>

        <div className="mt-8 leading-8 whitespace-pre-line text-gray-800">
          {post.content}
        </div>
      </article>
    </main>
  );
}

export default WritingDetail;