import { assignments, topics } from "@/data/mathData";
import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";

export default function Assignments() {
  const [completed, setCompleted] = useState<string[]>(() =>
    JSON.parse(localStorage.getItem("completedAssignments") || "[]")
  );

  function toggleComplete(id: string) {
    const newList = completed.includes(id) ? completed.filter(x => x !== id) : [...completed, id];
    setCompleted(newList);
    localStorage.setItem("completedAssignments", JSON.stringify(newList));
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Assignments</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {assignments.map(a => {
          const topic = topics.find(t => t.id === a.topicId);
          const done = completed.includes(a.id);
          return (
            <div key={a.id} className="bg-white rounded-lg shadow-md p-5 flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-semibold mb-2">{a.title}</h2>
                <p className="text-gray-600">{a.description}</p>
                <p className="mt-2 text-sm text-gray-500">Topic: {topic?.name}</p>
                <p className="mt-1 text-sm">Difficulty: {a.difficulty}</p>
                <p className="mt-1 text-sm">Due: {new Date(a.dueDate).toLocaleDateString()}</p>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <Link to={`/assignments/${a.id}`} className="text-blue-600 hover:underline">View</Link>
                <button 
                  onClick={() => toggleComplete(a.id)} 
                  className={`px-3 py-1 rounded-md text-white ${done ? "bg-green-500" : "bg-gray-400 hover:bg-gray-500"}`}
                >
                  {done ? "Completed" : "Mark Complete"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}