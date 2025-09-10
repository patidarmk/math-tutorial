import { assignments } from "@/data/mathData";
import { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

export default function Progress() {
  const [completed, setCompleted] = useState<string[]>(() =>
    JSON.parse(localStorage.getItem("completedAssignments") || "[]")
  );

  const total = assignments.length;
  const doneCount = completed.length;
  const data = [
    { name: "Completed", value: doneCount },
    { name: "Pending", value: total - doneCount },
  ];
  const COLORS = ["#4CAF50", "#E0E0E0"];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Progress Tracker</h1>
      <p className="mb-4 text-gray-700">
        You have completed {doneCount} out of {total} assignments ({((doneCount / total) * 100).toFixed(1)}%).
      </p>
      <div className="w-full h-96">
        <ResponsiveContainer>
          <PieChart>
            <Pie data={data} dataKey="value" cx="50%" cy="50%" outerRadius={120} label>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}