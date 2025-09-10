import { Link } from "@tanstack/react-router";
import { assignments } from "@/data/mathData";
import { MadeWithApplaa } from "@/components/made-with-applaa";

export default function Index() {
  const featured = assignments.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 bg-gradient-to-br from-blue-50 to-purple-50">
        <section className="text-center py-16 px-4">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Year 9 Maths Tracker
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
            Stay on top of Maths assignments, track daily progress, and master UK Year 9 topics with interactive practice.
          </p>
          <Link
            to="/assignments"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
          >
            View All Assignments
          </Link>
        </section>

        <section className="container mx-auto px-4 pb-16">
          <h2 className="text-2xl font-semibold mb-6">Featured Assignments</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {featured.map((a) => (
              <div
                key={a.id}
                className="bg-white rounded-lg shadow-md p-5"
              >
                <h3 className="text-lg font-bold mb-2">{a.title}</h3>
                <p className="text-gray-600 mb-3">{a.description}</p>
                <Link
                  to={`/assignments/${a.id}`}
                  className="text-blue-600 hover:underline"
                >
                  Start
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
      <MadeWithApplaa />
    </div>
  );
}