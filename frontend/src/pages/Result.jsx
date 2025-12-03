import React from "react";
import { Link } from "react-router";

const results = [
  {
    id: 1,
    subject: "Operating Systems",
    date: "2025-02-18",
    score: 42,
    total: 50,
    percentage: "84%",
    status: "Pass",
  },
  {
    id: 2,
    subject: "DataStructures and Algorithms",
    date: "2025-02-20",
    score: 33,
    total: 50,
    percentage: "66%",
    status: "Pass",
  },
  {
    id: 3,
    subject: "Computer Science",
    date: "2025-02-25",
    score: 21,
    total: 50,
    percentage: "42%",
    status: "Fail",
  },
];

export default function ResultPage() {
  return (
    <div className="p-6">

      {/* Back Button */}
      <Link to="/" className="btn btn-outline mb-4">
        ← Back
      </Link>

      <h1 className="text-3xl font-bold mb-6">Your Results</h1>

      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="table">
          <thead className="bg-base-200">
            <tr>
              <th>#</th>
              <th>Subject</th>
              <th>Date</th>
              <th>Score</th>
              <th>Percentage</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {results.map((r, index) => (
              <tr key={r.id}>
                <td>{index + 1}</td>
                <td className="font-semibold">{r.subject}</td>
                <td>{r.date}</td>
                <td>
                  {r.score} / {r.total}
                </td>
                <td>{r.percentage}</td>
                <td
                  className={
                    r.status === "Pass"
                      ? "text-green-600 font-bold"
                      : "text-red-600 font-bold"
                  }
                >
                  {r.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
