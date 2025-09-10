import { Link } from "@tanstack/react-router";
import { baselineTopics } from "@/data/baselineTopics";
import { Button } from "@/components/ui/button";

export default function Baseline() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Year 9 Baseline Assessment Hub</h1>
      <p className="mb-8 text-gray-700">
        Use the options below to either take the full mixed baseline assessment or focus on practice
        for a specific topic and subtopic.
      </p>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Full Assessment</h2>
        <Link to="/baseline/full">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            Start Full Baseline Test
          </Button>
        </Link>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Practice by Topic</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {baselineTopics.map(topic => (
            <div key={topic.id} className="bg-white shadow rounded-lg p-5">
              <h3 className="text-xl font-bold mb-2">{topic.name}</h3>
              <p className="text-gray-600 mb-4">{topic.description}</p>
              <div className="space-y-2">
                {topic.subtopics.map(sub => (
                  <Link
                    key={sub.id}
                    to={`/baseline/practice/${topic.id}/${sub.id}`}
                    className="block text-blue-600 hover:underline"
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}