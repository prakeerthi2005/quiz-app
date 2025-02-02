import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ResultsPage.css'; 

const ResultsPage = ({ score, totalQuestions }) => {
  const navigate = useNavigate();

  const handleRestart = () => {
    navigate('/'); 
  };

  return (
    <div className="results-container">
      <div className="results-card">
        <h1 className="results-title">Quiz Completed!</h1>
        <p className="results-score">
          Your Score: <span>{score}</span> / <span>{totalQuestions * 4}</span>
        </p>
        <button className="restart-button" onClick={handleRestart}>
          Restart Quiz
        </button>
      </div>
    </div>
  );
};

export default ResultsPage;
