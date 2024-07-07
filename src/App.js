import React, { useState } from "react";
import Question from "./Question";
import qBank from "./QuestionBank";
import Score from "./Score";
import "./App.css";

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [quizEnd, setQuizEnd] = useState(false);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    checkAnswer();
    handleNextQuestion();
  };

  const checkAnswer = () => {
    if (selectedOption === qBank[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < qBank.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption("");
    } else {
      setQuizEnd(true);
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-title">QUIZ APP</h1>
      {!quizEnd ? (
        <Question
          question={qBank[currentQuestion]}
          selectedOption={selectedOption}
          onOptionChange={handleOptionChange}
          onSubmit={handleFormSubmit}
        />
      ) : (
        <Score score={score} />
      )}
    </div>
  );
};

export default App;
