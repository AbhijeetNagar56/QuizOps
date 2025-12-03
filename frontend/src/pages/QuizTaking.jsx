import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router";

export default function QuizTakingPage() {
  const navigate = useNavigate();

  const questions = [
    {
      q: "Which data structure uses FIFO?",
      options: ["Stack", "Queue", "Tree", "Graph"],
      answer: "Queue",
    },
    {
      q: "What does CPU stand for?",
      options: [
        "Central Process Unit",
        "Central Processing Unit",
        "Computer Personal Unit",
        "Control Processing Unit",
      ],
      answer: "Central Processing Unit",
    },
    {
      q: "Which of the following is NOT an OS?",
      options: ["Linux", "Windows", "Oracle", "MacOS"],
      answer: "Oracle",
    },
    {
      q: "Which sorting algorithm is fastest on average?",
      options: ["Bubble Sort", "Selection Sort", "Quick Sort", "Insertion Sort"],
      answer: "Quick Sort",
    },
    {
      q: "Which language is used to style web pages?",
      options: ["HTML", "CSS", "C++", "SQL"],
      answer: "CSS",
    },
    {
      q: "What does RAM stand for?",
      options: [
        "Read Access Memory",
        "Random Access Memory",
        "Run Active Memory",
        "Remote Access Memory",
      ],
      answer: "Random Access Memory",
    },
    {
      q: "Which protocol is used for sending emails?",
      options: ["HTTP", "SMTP", "FTP", "SSH"],
      answer: "SMTP",
    },
    {
      q: "What is the time complexity of binary search?",
      options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
      answer: "O(log n)",
    },
    {
      q: "Which of these is a backend language?",
      options: ["React", "Java", "CSS", "HTML"],
      answer: "Java",
    },
    {
      q: "WWW stands for?",
      options: [
        "World Web Wide",
        "World Wide Web",
        "Web World Wide",
        "Wide Web World",
      ],
      answer: "World Wide Web",
    },
  ];

  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState(Array(10).fill(null));
  const [review, setReview] = useState(Array(10).fill(false));
  const [time, setTime] = useState(600);

  // CAMERA
  const videoRef = useRef(null);
  const [stream, setStream] = useState(null);

  useEffect(() => {
    const enableCamera = async () => {
      try {
        const camStream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false,
        });
        setStream(camStream);
        if (videoRef.current) videoRef.current.srcObject = camStream;
      } catch (err) {
        console.error("Camera error:", err);
      }
    };

    enableCamera();

    return () => {
      if (stream) stream.getTracks().forEach((t) => t.stop());
    };
  }, []);

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach((t) => t.stop());
    }
  };

  // TIMER
  useEffect(() => {
    const t = setInterval(() => {
      setTime((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(t);
  }, []);

  const formatTime = () => {
    const min = Math.floor(time / 60);
    const sec = time % 60;
    return `${min}:${sec < 10 ? "0" : sec}`;
  };

  const handleAnswer = (opt) => {
    const updated = [...answers];
    updated[currentQ] = opt;
    setAnswers(updated);
  };

  const markReview = () => {
    const updated = [...review];
    updated[currentQ] = !updated[currentQ];
    setReview(updated);
  };

  const submitQuiz = () => {
    stopCamera(); // TURN OFF CAMERA WHEN SUBMIT
    navigate("/results", { state: answers });
  };

  return (
    <div className="p-6">

      {/* Back */}
      <Link to="/quiz" className="btn btn-outline mb-4">
        ← Back
      </Link>

      <h1 className="text-3xl font-bold mb-6">CS261: Data Structures and Algorithms</h1>

      {/* Timer */}
      <div className="fixed top-4 right-6 bg-base-200 px-4 py-2 rounded-lg shadow-md font-bold text-lg">
        ⏳ {formatTime()}
      </div>

      <div className="flex gap-6">
        
        {/* Sidebar */}
        <div className="w-40 bg-base-200 rounded-lg p-4 h-fit shadow-md">
          <h3 className="font-bold mb-3 text-center">Questions</h3>

          <div className="grid grid-cols-2 gap-2">
            {answers.map((ans, i) => {
              let color = ans ? "btn-success" : "btn-error";
              if (review[i]) color = "btn-warning";

              return (
                <button
                  key={i}
                  className={`btn btn-xs ${color}`}
                  onClick={() => setCurrentQ(i)}
                >
                  {i + 1}
                </button>
              );
            })}
          </div>
        </div>

        {/* Question Box */}
        <div className="flex-1 card bg-base-100 p-6 shadow-lg">
          <h2 className="text-xl font-bold mb-4">Question {currentQ + 1}</h2>
          <p className="text-lg mb-6">{questions[currentQ].q}</p>

          <div className="space-y-3">
            {questions[currentQ].options.map((opt, idx) => (
              <label
                key={idx}
                className={`block p-3 border rounded-lg cursor-pointer ${
                  answers[currentQ] === opt ? "bg-green-200" : "bg-base-200"
                }`}
              >
                <input
                  type="radio"
                  name={`q${currentQ}`}
                  checked={answers[currentQ] === opt}
                  onChange={() => handleAnswer(opt)}
                  className="mr-2"
                />
                {opt}
              </label>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-6">
            <button
              className="btn"
              disabled={currentQ === 0}
              onClick={() => setCurrentQ(currentQ - 1)}
            >
              ← Previous
            </button>

            <button
              className={`btn ${review[currentQ] ? "btn-warning" : "btn-outline"}`}
              onClick={markReview}
            >
              {review[currentQ] ? "Unmark Review" : "Mark for Review"}
            </button>

            {currentQ === questions.length - 1 ? (
              <button className="btn btn-primary" onClick={submitQuiz}>
                Submit Quiz
              </button>
            ) : (
              <button
                className="btn btn-primary"
                onClick={() => setCurrentQ(currentQ + 1)}
              >
                Next →
              </button>
            )}
          </div>
        </div>
      </div>

      {/* CAMERA PREVIEW */}
      <div className="fixed bottom-4 right-4 w-40 h-32 bg-black rounded-lg overflow-hidden shadow-lg border border-gray-300 z-50">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover"
        ></video>
      </div>
    </div>
  );
}
