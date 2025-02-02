

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuizPage from './pages/QuizPage';
import ResultsPage from './pages/ResultsPage';
import axios from 'axios';

const App = () => {
  const [quizData, setQuizData] = useState(null);
  const [score, setScore] = useState(0);
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const response = await axios.get('/api/Uw5CrX'); // Use the proxy path
        setQuizData(response.data);
      } catch (error) {
        console.error('Error fetching quiz data:', error);
      }
    };
    

    fetchQuizData();
  }, []);

  if (isExpired) return <div>The quiz has expired.</div>;
  if (!quizData) return <div>Loading...</div>;

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<QuizPage quizData={quizData.questions} setScore={setScore} />}
        />
        <Route
          path="/results"
          element={<ResultsPage score={score} totalQuestions={quizData.questions.length} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
