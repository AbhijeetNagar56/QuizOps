import React from "react";
import { Link } from "react-router";

const upcomingQuizzes = [
  {
    id: 1,
    course: "Database Management Systems",
    faculty: "Dr. Mehta",
    date: "2025-03-10",
    time: "10:00 AM",
  },
  {
    id: 2,
    course: "Web Technologies",
    faculty: "Prof. Radhika",
    date: "2025-03-12",
    time: "2:00 PM",
  },
  {
    id: 3,
    course: "Machine Learning",
    faculty: "Dr. Sharma",
    date: "2025-03-14",
    time: "11:30 AM",
  },
];

export default function UpcomingQuizzes() {
  return (
    <div className="p-6">

      {/* Back Button */}
      <Link to="/" className="btn btn-outline mb-4">
        ← Back
      </Link>

      <h1 className="text-3xl font-bold mb-6">Upcoming Quizzes</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {upcomingQuizzes.map((quiz) => (
          <div key={quiz.id} className="card bg-base-100 shadow-md border">
            <div className="card-body">
              <h2 className="card-title text-lg font-semibold">
                {quiz.course}
              </h2>

              <p><span className="font-semibold">Faculty:</span> {quiz.faculty}</p>
              <p><span className="font-semibold">Date:</span> {quiz.date}</p>
              <p><span className="font-semibold">Time:</span> {quiz.time}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
