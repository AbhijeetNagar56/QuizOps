import React, { useState } from "react";
import { Link } from "react-router";

export default function CreateQuizPage() {
  const [questions, setQuestions] = useState([
    { question: "", options: ["", "", "", ""], answer: "" },
  ]);

  const addQuestion = () => {
    setQuestions([
      ...questions,
      { question: "", options: ["", "", "", ""], answer: "" },
    ]);
  };

  const updateQuestion = (index, value) => {
    const updated = [...questions];
    updated[index].question = value;
    setQuestions(updated);
  };

  const updateOption = (qIndex, optIndex, value) => {
    const updated = [...questions];
    updated[qIndex].options[optIndex] = value;
    setQuestions(updated);
  };

  const updateAnswer = (qIndex, value) => {
    const updated = [...questions];
    updated[qIndex].answer = value;
    setQuestions(updated);
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">

      {/* Back Button */}
      <Link to="/" className="btn btn-outline mb-6">
        ← Back
      </Link>

      <h1 className="text-3xl font-bold mb-4">Create New Quiz</h1>

      {/* Quiz Basic Info */}
      <div className="card bg-base-100 shadow-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Quiz Information</h2>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Quiz Title */}
          <input
            type="text"
            placeholder="Quiz Title"
            className="input input-bordered w-full"
          />

          {/* Subject */}
          <select className="select select-bordered w-full">
            <option disabled selected>Select Subject</option>
            <option>Operating Systems</option>
            <option>Data Structures and Algorithms</option>
            <option>Software Engineering</option>
            <option>Differential Equation</option>
          </select>

          {/* Date */}
          <input type="date" className="input input-bordered w-full" />

          {/* Time */}
          <input type="time" className="input input-bordered w-full" />

          {/* NEW: Batch Selection */}
          <select className="select select-bordered w-full">
            <option disabled selected>Select Batch</option>
            <option>24 CSE</option>
            <option>24 ECE</option>
            <option>24 AIML</option>
            <option>25 CSE</option>
            <option>25 ECE</option>
            <option>25 AIML</option>
          </select>
        </div>
      </div>

      {/* Question List */}
      <div className="space-y-6">
        {questions.map((q, qIndex) => (
          <div key={qIndex} className="card bg-base-100 shadow-md p-6">
            <h2 className="text-lg font-semibold mb-2">
              Question {qIndex + 1}
            </h2>

            <input
              type="text"
              placeholder="Enter question"
              className="input input-bordered w-full mb-3"
              onChange={(e) => updateQuestion(qIndex, e.target.value)}
            />

            <div className="grid grid-cols-2 gap-4">
              {q.options.map((opt, optIndex) => (
                <input
                  key={optIndex}
                  type="text"
                  placeholder={`Option ${optIndex + 1}`}
                  className="input input-bordered w-full"
                  onChange={(e) =>
                    updateOption(qIndex, optIndex, e.target.value)
                  }
                />
              ))}
            </div>

            <select
              className="select select-bordered w-full mt-3"
              onChange={(e) => updateAnswer(qIndex, e.target.value)}
            >
              <option disabled selected>Select Correct Answer</option>
              {q.options.map((opt, i) => (
                <option key={i} value={opt}>
                  Option {i + 1}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>

      {/* Add Question Button */}
      <div className="text-center mt-6">
        <button className="btn btn-secondary" onClick={addQuestion}>
          + Add Question
        </button>
      </div>

      {/* Save Quiz Button */}
      <div className="text-center mt-6">
        <button className="btn btn-primary w-1/2 mt-4">Save Quiz</button>
      </div>
    </div>
  );
}
