import { assignments } from "@/data/mathData";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export default function BaselineFull() {
  // Take first 2 exercises from each topic for ~24 Qs
  const allExercises = assignments.flatMap(a => a.exercises.slice(0, 2));
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [results, setResults] = useState<Record<string, { correct: boolean; explanation: string }>>({});
  const [showSolution, setShowSolution] = useState<Record<string, boolean>>({});

  const totalMarks = allExercises.reduce((sum, ex) => sum + ex.marks, 0);
  const gainedMarks = Object.values(results).reduce((sum, r, idx) => {
    if (r.correct) return sum + allExercises[idx].marks;
    return sum;
  }, 0);

  const handleSubmit = (exId: string, correctAnswer: string, explanation: string) => {
    const given = (answers[exId] || "").trim();
    const isCorrect = given.toLowerCase() === correctAnswer.toLowerCase();
    setResults(prev => ({
      ...prev,
      [exId]: { correct: isCorrect, explanation }
    }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild><Link to="/">Home</Link></BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>Baseline Full Test</BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <h1 className="text-3xl font-bold mt-4 mb-2">Year 9 Full Baseline Assessment</h1>
      <p className="text-gray-600 mb-6">Answer all questions to the best of your ability. Your score will be calculated automatically.</p>

      <div className="mb-4 font-semibold">
        Score: {gainedMarks} / {totalMarks}
      </div>

      <div className="space-y-6">
        {allExercises.map(ex => {
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

                  {/* Toggle Solution Button */}
                  <button
                    className="mt-2 text-sm text-blue-600 underline"
                    onClick={() => setShowSolution(prev => ({ ...prev, [ex.id]: !prev[ex.id] }))}
                  >
                    {showSolution[ex.id] ? "Hide Solution" : "Show Solution"}
                  </button>

                  {/* Solution Text */}
                  {showSolution[ex.id] && (
                    <div className="mt-2 p-3 bg-gray-50 border rounded text-sm text-gray-700">
                      <strong>Solution:</strong> {ex.explanation}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-8">
        <Link to="/baseline" className="text-blue-600 hover:underline">← Back to Baseline Hub</Link>
      </div>
    </div>
  );
}