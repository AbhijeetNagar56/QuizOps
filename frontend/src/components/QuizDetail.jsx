import React, { useState } from "react";
import { useLocation, Link } from "react-router";

export default function QuizDetailsPage() {
  const { state: quiz } = useLocation();
  const [agreed, setAgreed] = useState(false);

  if (!quiz) {
    return (
      <div className="p-6">
        <p className="text-lg text-red-600">No quiz data found.</p>
        <Link to="/quizzes" className="btn mt-4">Go Back</Link>
      </div>
    );
  }

  return (
    <div className="p-6">

      {/* Back Button */}
      <Link to="/quiz" className="btn btn-outline mb-4">
        ← Back
      </Link>

      <div className="max-w-xl mx-auto bg-base-100 shadow-xl p-6 rounded-lg">

        {/* User Image */}
        <div className="flex justify-center mb-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
            className="w-24 h-24 rounded-full shadow-md"
            alt="User"
          />
        </div>

        {/* Student Info */}
        <h1 className="text-2xl font-bold text-center">{quiz.subject}</h1>

        <div className="mt-4 space-y-2 text-lg">
          <p><span className="font-semibold">Student Name:</span> Student A</p>
          <p><span className="font-semibold">Roll No:</span> 25CSE001</p>
          <p><span className="font-semibold">Date:</span> {quiz.date}</p>
          <p><span className="font-semibold">Time:</span> {quiz.time}</p>
        </div>

        {/* Instructions Section */}
        <div className="mt-6 bg-base-200 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">📘 Instructions</h2>
          <ul className="list-disc pl-6 space-y-1 text-sm">
            <li>Do not refresh or close the window during the exam.</li>
            <li>Each question carries equal marks.</li>
            <li>You can mark questions for review.</li>
            <li>Submit the exam before the timer ends. Automatically submitted otherwise.</li>
            <li>Your camera permission is required during the exam.</li>
            <li>Keep your picture clear and visible at all times.</li>
            <li>Once submitted, you cannot retake the quiz.</li>
          </ul>
        </div>

        {/* Agreement Checkbox */}
        <div className="mt-4 flex items-center gap-2">
          <input
            type="checkbox"
            checked={agreed}
            onChange={() => setAgreed(!agreed)}
            className="checkbox"
          />
          <label className="text-sm">
            I have read all the instructions and agree to proceed.
          </label>
        </div>

        {/* Start Quiz Button */}
        <div className="mt-6 text-center">
          <Link
            className={`btn btn-primary w-full ${!agreed ? "btn-disabled" : ""}`}
            to={agreed ? "/take-quiz" : "#"}
            state={quiz}
          >
            Start Quiz
          </Link>
        </div>
      </div>
    </div>
  );
}
