import { Route, Routes } from 'react-router';
import Dashboard from './pages/DashBoard';
import Auth from './pages/Auth';
import QuizzesPage from './pages/Quiz';
import ResultPage from './pages/Result';
import QuizDetailsPage from './components/QuizDetail';
import CreateQuizPage from './pages/Create';
import QuizTakingPage from './pages/QuizTaking';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/quiz" element={<QuizzesPage />} />
        <Route path="/results" element={<ResultPage />} />
        <Route path="/quiz-details" element={<QuizDetailsPage />} />
        <Route path="/create" element={<CreateQuizPage />} />
        <Route path="/take-quiz" element={<QuizTakingPage />} />
      </Routes>
    </div>
  );
}

