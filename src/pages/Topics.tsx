import { topics, assignments } from "@/data/mathData";
import { Link } from "@tanstack/react-router";

export default function Topics() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Math Topics</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {topics.map(topic => {
          const count = assignments.filter(a => a.topicId === topic.id).length;
          return (
            <div key={topic.id} className="bg-white rounded-lg shadow-md p-5">
              <h2 className="text-xl font-semibold mb-2">{topic.name}</h2>
              <p className="text-gray-600 mb-2">{topic.description}</p>
              <p className="text-sm text-gray-500 mb-3">{count} assignments</p>
              <Link to={`/topics/${topic.id}`} className="text-blue-600 hover:underline">View Topic</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}