import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from '../components/ProgressBar';
import Question from '../components/Question';

const QuizPage = ({ quizData, setScore }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, updateScore] = useState(0);
  const navigate = useNavigate();

  const handleAnswer = (isCorrect) => {
    if (isCorrect) updateScore(score + 4); 
    else updateScore(Math.max(0, score - 1)); 

    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setScore(score);
      navigate('/results');
    }
  };

  const currentQuestion = quizData[currentQuestionIndex];

  return (
    <div>
      <ProgressBar current={currentQuestionIndex + 1} total={quizData.length} />
      <Question question={currentQuestion} handleAnswer={handleAnswer} />
    </div>
  );
};

export default QuizPage;
