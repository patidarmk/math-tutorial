import { useParams, Link } from "@tanstack/react-router";
import { assignments } from "@/data/mathData";
import { baselineTopics } from "@/data/baselineTopics";
import { useState } from "react";

export default function BaselinePractice() {
  const { topicId, subId } = useParams({ from: "/baseline/practice/$topicId/$subId" });
  const topic = baselineTopics.find(t => t.id === topicId);
  const subtopic = topic?.subtopics.find(s => s.id === subId);

  const topicAssignments = assignments.find(a => a.topicId === topicId);
  const allExercises = topicAssignments?.exercises || [];

  // For now, no deep filtering on subtopic → show all from topic
  const exercises = allExercises;

  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [results, setResults] = useState<Record<string, { correct: boolean; explanation: string }>>({});
  const [showSolution, setShowSolution] = useState<Record<string, boolean>>({});

  const totalMarks = exercises.reduce((sum, ex) => sum + ex.marks, 0);
  const gainedMarks = Object.entries(results).reduce((sum, [id, r]) => {
    if (r.correct) {
      const m = exercises.find(e => e.id === id)?.marks || 0;
      return sum + m;
    }
    return sum;
  }, 0);

  const checkAnswer = (exId: string, correct: string, explanation: string) => {
    const given = (answers[exId] || "").trim();
    const good = given.toLowerCase() === correct.toLowerCase();
    setResults(prev => ({ ...prev, [exId]: { correct: good, explanation } }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{topic?.name} — {subtopic?.name}</h1>
      <p className="text-gray-700 mb-4">{subtopic?.description}</p>
      <p className="mb-6 font-semibold">Score: {gainedMarks} / {totalMarks}</p>

      <div className="space-y-6">
        {exercises.map(ex => {
          const result = results[ex.id];
          return (
            <div key={ex.id} className="bg-white p-4 rounded shadow">
              <p className="font-semibold">{ex.question}</p>
              <p className="text-sm text-gray-500 mb-2">Marks: {ex.marks}</p>
              <input
                className="border rounded px-2 py-1 w-32"
                value={answers[ex.id] || ""}
                onChange={(e) => setAnswers(prev => ({ ...prev, [ex.id]: e.target.value }))}
              />
              <button
                className="ml-2 px-3 py-1 bg-blue-600 text-white rounded"
                onClick={() => checkAnswer(ex.id, ex.answer, ex.explanation)}
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

      <div className="mt-6">
        <Link to="/baseline" className="text-blue-600 hover:underline">← Back to Baseline Hub</Link>
      </div>
    </div>
  );
}