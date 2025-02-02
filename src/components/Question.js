import React from 'react';
import '../styles/Question.css';
import { motion } from 'framer-motion';

const Question = ({ question, handleAnswer }) => {
  const title = "Genetics and Evolution";
  const topic = "The Molecular Basis of Inheritance";

  return (
    <div className="quiz-container">
      <header className="quiz-header">
        <br></br>
        <h1 className="quiz-title">Quiz title : {title}</h1>
        <h2 className="quiz-topic">Quiz topic : {topic}</h2>
        <br></br>
      </header>
      <motion.div 
        className="question-container"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="question-text" dangerouslySetInnerHTML={{ __html: question.description }} />
        <ul className="options-list">
          {question.options.map((option, index) => (
            <motion.li 
              key={option.id} 
              className="option-item"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button 
                className="option-button"
                onClick={() => handleAnswer(option.is_correct)}
              >
                {index + 1}. {option.description}
              </button>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Question;
