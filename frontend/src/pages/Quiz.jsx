import React from "react";
import { Link } from "react-router";

const quizzes = [
  {
    id: 1,
    subject: "DataStructures and Algorithms",
    date: "2025-02-18",
    time: "10:00 AM",
    status: "scheduled",
  },
  {
    id: 2,
    subject: "Operating Systems",
    date: "2025-02-20",
    time: "02:00 PM",
    status: "taken",
  },
  {
    id: 3,
    subject: "Software Engineering",
    date: "2025-02-25",
    time: "09:00 AM",
    status: "scheduled",
  },
];

export default function QuizzesPage() {
  return (
    <div className="p-6 relative">

      <Link to="/" className="btn btn-outline absolute top-4 left-4">
        ← Back
      </Link>

      <h1 className="text-3xl font-bold text-center mb-6">
        Available Quizzes
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {quizzes.map((quiz) => (
          <div key={quiz.id} className="card bg-base-100 shadow-md p-4">
            
            <h2 className="text-xl font-semibold">{quiz.subject}</h2>

            <p className="mt-2">
              <span className="font-semibold">Date:</span> {quiz.date}
            </p>

            <p>
              <span className="font-semibold">Time:</span> {quiz.time}
            </p>

            <p className="mt-2">
              <span className="font-semibold">Status:</span>{" "}
              <span
                className={
                  quiz.status === "taken"
                    ? "text-red-500 font-bold"
                    : "text-green-600 font-bold"
                }
              >
                {quiz.status === "taken" ? "Taken" : "Scheduled"}
              </span>
            </p>

            <Link
              to="/quiz-details"
              state={quiz}    // ⬅ Passing quiz details
              className="btn btn-primary mt-4"
              disabled={quiz.status !== "scheduled"}
            >
              {quiz.status === "taken" ? "Completed" : "Take Quiz"}
            </Link>

          </div>
        ))}
      </div>
    </div>
  );
}
