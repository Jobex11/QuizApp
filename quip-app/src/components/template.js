// =========  CREATING A FULL-FLEDGED  QUIZ APPLICATION  ========

import React, { useState, useEffect } from "react";

const questionsData = [
  // Your quiz questions data goes here
  // Each question should have an id, text, options, and correctAnswer property
];

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [timer, setTimer] = useState(300); // 5 minutes in seconds
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      handleSubmit();
    }
  }, [timer]);

  const handleAnswer = (answer) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    setCurrentQuestion((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setCurrentQuestion((prev) => prev - 1);
  };

  const handleSubmit = () => {
    setSubmitted(true);
    // Perform any additional actions on submission
  };

  const calculateScore = () => {
    // Implement your scoring logic based on the correct answers
  };

  const renderQuiz = () => {
    const currentQ = questionsData[currentQuestion];

    return (
      <div>
        <h3>{currentQ.text}</h3>
        {currentQ.options.map((option, index) => (
          <div key={index}>
            <input
              type="checkbox"
              checked={answers[currentQuestion] === index}
              onChange={() => handleAnswer(index)}
            />
            {option}
          </div>
        ))}
        <button onClick={handlePrevious} disabled={currentQuestion === 0}>
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentQuestion === questionsData.length - 1}
        >
          Next
        </button>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    );
  };

  const renderSubmitPage = () => {
    const score = calculateScore();

    return (
      <div>
        <h2>Quiz Submitted!</h2>
        <p>Your Score: {score}</p>
        {/* Display corrections and other information */}
      </div>
    );
  };

  return (
    <div>
      {submitted ? renderSubmitPage() : renderQuiz()}
      <div>
        Timer: {Math.floor(timer / 60)}:
        {timer % 60 < 10 ? `0${timer % 60}` : timer % 60}
      </div>
    </div>
  );
};

export default QuizApp;
