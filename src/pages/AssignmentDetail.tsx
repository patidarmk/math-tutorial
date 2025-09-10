import { useParams, Link } from "@tanstack/react-router";
import { assignments, topics } from "@/data/mathData";
import { useState } from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export default function AssignmentDetail() {
  const { id } = useParams({ from: "/assignments/$id" });
  const assignment = assignments.find(a => a.id === id);
  const topic = topics.find(t => t.id === assignment?.topicId);

  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [results, setResults] = useState<Record<string, { correct: boolean; explanation: string }>>({});
  const [showSolution, setShowSolution] = useState<Record<string, boolean>>({});

  if (!assignment) {
    return <div className="p-6">Assignment not found</div>;
  }

  const handleSubmit = (exId: string, correctAnswer: string, explanation: string) => {
    const given = (answers[exId] || "").trim();
    const isCorrect = given.toLowerCase() === correctAnswer.toLowerCase();
    setResults(prev => ({
      ...prev,
      [exId]: { correct: isCorrect, explanation }
    }));
  };

  const totalMarks = assignment.exercises.reduce((sum, ex) => sum + ex.marks, 0);
  const gainedMarks = Object.entries(results).reduce((sum, [qid, r]) => {
    if (r.correct) {
      const m = assignment.exercises.find(e => e.id === qid)?.marks || 0;
      return sum + m;
    }
    return sum;
  }, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild><Link to="/assignments">Assignments</Link></BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild><Link to={`/topics/${topic?.id}`}>{topic?.name}</Link></BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>{assignment.title}</BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <h1 className="text-3xl font-bold mt-4 mb-2">{assignment.title}</h1>
      <p className="text-gray-600 mb-6">{assignment.description}</p>

      <div className="mb-4 font-semibold">
        Score: {gainedMarks} / {totalMarks}
      </div>

      <div className="space-y-6">
        {assignment.exercises.map(ex => {
          const result = results[ex.id];
          return (
            <div key={ex.id} className="bg-white shadow rounded-md p-4">
              <p className="font-semibold">{ex.question}</p>
              <p className="text-sm text-gray-500 mb-2">Marks: {ex.marks}</p>
              <input
                className="border rounded px-2 py-1 w-32"
                placeholder="Your answer"
                value={answers[ex.id] || ""}
                onChange={(e) => setAnswers(prev => ({ ...prev, [ex.id]: e.target.value }))}
              />
              <button
                className="ml-2 px-3 py-1 rounded bg-blue-600 text-white"
                onClick={() => handleSubmit(ex.id, ex.answer, ex.explanation)}
              >
                Check
              </button>

              {result && (
                <div className="mt-2">
                  {result.correct ? (
                    <p className="text-green-600 font-medium">Correct! 🎉</p>
                  ) : (
                    <p className="text-red-600 font-medium">Incorrect.</p>
                  )}
                </div>
              )}

              {/* Always visible solution toggle */}
              <button
                className="mt-3 text-sm text-blue-600 underline"
                onClick={() => setShowSolution(prev => ({ ...prev, [ex.id]: !prev[ex.id] }))}
              >
                {showSolution[ex.id] ? "Hide Solution" : "💡 Show Solution"}
              </button>

              {showSolution[ex.id] && (
                <div className="mt-2 p-3 bg-gray-50 border rounded text-sm text-gray-700 transition-all">
                  <strong>Solution:</strong> {ex.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-8">
        <Link to="/assignments" className="text-blue-600 hover:underline">← Back to Assignments</Link>
      </div>
    </div>
  );
}