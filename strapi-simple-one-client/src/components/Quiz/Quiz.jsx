import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineRestartAlt } from "react-icons/md";
import "./Quiz.css";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
  },
  {
    question: "What is the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ["Harper Lee", "Mark Twain", "J.K. Rowling", "Ernest Hemingway"],
  },
  {
    question: "What is the smallest prime number?",
    options: ["1", "2", "3", "5"],
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Gd", "Go"],
  },
  {
    question: "In what year did the Titanic sink?",
    options: ["1912", "1905", "1898", "1923"],
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      "Leonardo da Vinci",
      "Pablo Picasso",
      "Vincent van Gogh",
      "Claude Monet",
    ],
  },
  {
    question: "What is the tallest mountain in the world?",
    options: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
  },
  {
    question: "What is the hardest natural substance on Earth?",
    options: ["Gold", "Iron", "Diamond", "Platinum"],
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "Japan", "Thailand", "South Korea"],
  },
  {
    question: "Who developed the theory of relativity?",
    options: [
      "Isaac Newton",
      "Albert Einstein",
      "Niels Bohr",
      "Galileo Galilei",
    ],
  },
];

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [chatHistory, setChatHistory] = useState([]);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const chatEndRef = useRef(null);
  const navigate = useNavigate();

  const handleOptionClick = (option) => {
    const currentQuestion = questions[currentQuestionIndex];

    setChatHistory((prevChatHistory) => [
      ...prevChatHistory,
      { type: "question", text: currentQuestion.question },
      { type: "answer", text: option },
    ]);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsQuizCompleted(true);
    }
  };

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatHistory]);

  const handleSuggestProducts = () => {
    const answers = chatHistory
      .filter((item) => item.type === "answer")
      .map((item) => item.text);

    const dataToSend = {
      answers,
    };
    console.log(answers);

    navigate("/suggest-products", { state: dataToSend });
  };

  const handleReset = () => {
    setCurrentQuestionIndex(0);
    setChatHistory([]);
    setIsQuizCompleted(false);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="chat-container">
      <div className="chat-header">
        Self Assessment
        <span onClick={handleReset}>
          <MdOutlineRestartAlt />
        </span>
      </div>
      <div className="chat-history">
        {chatHistory.map((item, index) => (
          <div
            key={index}
            className={`chat-message ${
              item.type === "question" ? "doctor" : "user"
            }`}
          >
            {item.text}
          </div>
        ))}
        {isQuizCompleted && (
          <div className="chat-message doctor">
            Thank you for completing the Assessment!
          </div>
        )}
        <div ref={chatEndRef} />
      </div>
      {isQuizCompleted ? (
        <div className="question-card">
          <button
            className="suggest-products-btn"
            onClick={handleSuggestProducts}
          >
            Suggest Products
          </button>
        </div>
      ) : (
        <div className="question-card">
          <div className="chat-message doctor">{currentQuestion.question}</div>
          <div className="options">
            {currentQuestion.options.map((option, index) => (
              <div
                key={index}
                className="chat-message option"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
