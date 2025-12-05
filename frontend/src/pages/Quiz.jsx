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
  // ✅ Partitioning logic
  const upcomingQuizzes = quizzes.filter(q => q.status === "scheduled");
  const takenQuizzes = quizzes.filter(q => q.status === "taken");

  return (
    <div className="p-6 relative">

      <Link to="/" className="btn btn-outline absolute top-4 left-4">
        ← Back
      </Link>

      <h1 className="text-3xl font-bold text-center mb-10">
        Quizzes Dashboard
      </h1>

      {/* ✅ UPCOMING QUIZZES SECTION */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-green-600">
          Upcoming Quizzes
        </h2>

        {upcomingQuizzes.length === 0 ? (
          <p className="text-gray-500">No upcoming quizzes.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {upcomingQuizzes.map((quiz) => (
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
                  <span className="text-green-600 font-bold">
                    Scheduled
                  </span>
                </p>

                <Link
                  to="/quiz-details"
                  state={quiz}
                  className="btn btn-primary mt-4"
                >
                  Take Quiz
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ✅ TAKEN QUIZZES SECTION */}
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-red-500">
          Completed Quizzes
        </h2>

        {takenQuizzes.length === 0 ? (
          <p className="text-gray-500">No completed quizzes yet.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {takenQuizzes.map((quiz) => (
              <div key={quiz.id} className="card bg-base-100 shadow-md p-4 opacity-70">
                <h2 className="text-xl font-semibold">{quiz.subject}</h2>

                <p className="mt-2">
                  <span className="font-semibold">Date:</span> {quiz.date}
                </p>

                <p>
                  <span className="font-semibold">Time:</span> {quiz.time}
                </p>

                <p className="mt-2">
                  <span className="font-semibold">Status:</span>{" "}
                  <span className="text-red-500 font-bold">
                    Taken
                  </span>
                </p>

                <button className="btn btn-disabled mt-4">
                  Completed
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}
