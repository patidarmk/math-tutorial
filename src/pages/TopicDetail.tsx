import { useParams, Link } from "@tanstack/react-router";
import { topics, assignments } from "@/data/mathData";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export default function TopicDetail() {
  const { id } = useParams({ from: "/topics/$id" });
  const topic = topics.find(t => t.id === id);
  const topicAssignments = assignments.filter(a => a.topicId === id);

  if (!topic) {
    return <div className="p-6">Topic not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild><Link to="/topics">Topics</Link></BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>{topic.name}</BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <h1 className="text-3xl font-bold mt-4">{topic.name}</h1>
      <p className="text-gray-700 mb-6">{topic.description}</p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {topicAssignments.map(a => (
          <div key={a.id} className="bg-white rounded-lg shadow p-5 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold">{a.title}</h2>
              <p className="text-gray-600">{a.description}</p>
              <p className="mt-2 text-sm">Difficulty: {a.difficulty}</p>
            </div>
            <div className="mt-4">
              <Link to={`/assignments/${a.id}`} className="text-blue-600 hover:underline">View Assignment</Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <Link to="/topics" className="text-blue-600 hover:underline">← Back to Topics</Link>
      </div>
    </div>
  );
}