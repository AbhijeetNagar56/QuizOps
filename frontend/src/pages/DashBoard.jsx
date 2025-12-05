import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from "react-router";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col bg-base-100">
      <Navbar />

      <div className="p-6 max-w-5xl mx-auto w-full">

        {/* Greeting Section */}
        <div className="flex items-center gap-4 mb-6">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH87TKQrWcl19xly2VNs0CjBzy8eaKNM-ZpA&s"
            className="w-20 h-20 rounded-full shadow-md"
            alt="student"
          />
          <div>
            <h1 className="text-3xl font-bold">Hello, Student A</h1>
            <p className="text-lg text-gray-500">Welcome back to your quiz dashboard.</p>
          </div>
        </div>

        {/* Dashboard Hero */}
        <div className="hero bg-base-200 rounded-xl shadow-lg p-8 mb-10">
          <div className="hero-content flex-col lg:flex-row gap-6">
            <img
              src="https://cdn-icons-png.flaticon.com/512/609/609361.png"
              className="w-40"
              alt="quiz illustration"
            />
            <div>
              <h2 className="text-2xl font-bold">Your Learning, Your Progress</h2>
              <p className="py-2 text-gray-600">
                Track your results, attempt quizzes, and stay updated with upcoming assessments.
              </p>
              <Link to="/quiz" className="btn btn-primary">
                Take a Quiz
              </Link>
            </div>
          </div>
        </div>

        {/* Dashboard Quick Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          
          <Link to="/results" className="card bg-base-200 shadow-md p-6 hover:shadow-xl transition cursor-pointer">
            <h3 className="text-xl font-semibold">📊 View Results</h3>
            <p className="mt-2 text-gray-600">Check your completed exam scores.</p>
          </Link>

          <Link to="/quiz" className="card bg-base-200 shadow-md p-6 hover:shadow-xl transition cursor-pointer">
            <h3 className="text-xl font-semibold">📝 Available Quizzes</h3>
            <p className="mt-2 text-gray-600">Attempt pending or scheduled quizzes.</p>
          </Link>

          <Link to="/create" className="card bg-base-200 shadow-md p-6 hover:shadow-xl transition cursor-pointer">
            <h3 className="text-xl font-semibold">➕ Create New Quiz</h3>
            <p className="mt-2 text-gray-600">Design and add quizzes for practice.</p>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

