import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { questions } from './data';
import ComputerView from './components/ComputerView';
import MobileView from './components/MobileView';
import './App.css';

function App() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [players, setPlayers] = useState([]);
    const [correctAnswers, setCorrectAnswers] = useState([]);
    const [isMobile, setIsMobile] = useState(false);
    const [feedbackMessage, setFeedbackMessage] = useState("");
    const [feedbackClass, setFeedbackClass] = useState(""); // New state for feedback class

    const handlePlayerJoin = (name) => {
        setPlayers([...players, { name, score: 0 }]);
        setIsMobile(true);
    };

    const handleAnswer = (playerName, selectedAnswer) => {
        const currentQuestion = questions[currentQuestionIndex];
        if (selectedAnswer === currentQuestion.answer) {
            setCorrectAnswers([...correctAnswers, playerName]);
            setFeedbackMessage(`Congratulations, ${playerName}!`);
            setFeedbackClass("correct-message"); // Set class for correct answer
            setTimeout(() => {
                if (currentQuestionIndex < questions.length - 1) {
                    setCurrentQuestionIndex(currentQuestionIndex + 1);
                    setFeedbackMessage(""); // Clear feedback for the next question
                    setFeedbackClass(""); // Clear class for the next question
                } else {
                    alert("Game Over! Thanks for playing!");
                }
            }, 2000); // Wait 2 seconds before moving to the next question
        } else {
            setFeedbackMessage("Wrong answer! Try again.");
            setFeedbackClass("wrong-message"); // Set class for wrong answer
        }
    };

    return (
        <div className="container">
            {isMobile ? (
                <MobileView
                    players={players}
                    currentQuestion={questions[currentQuestionIndex]}
                    onAnswer={handleAnswer}
                    feedbackMessage={feedbackMessage}
                    feedbackClass={feedbackClass} // Pass feedback class
                />
            ) : (
                <ComputerView
                    players={players}
                    currentQuestion={questions[currentQuestionIndex]}
                    correctAnswers={correctAnswers}
                    feedbackMessage={feedbackMessage}
                    feedbackClass={feedbackClass} // Pass feedback class
                />
            )}
            <QRCodeSVG value={window.location.href} />
            {!isMobile && <button onClick={() => handlePlayerJoin(prompt("Enter your name:"))}>Join Game</button>}
        </div>
    );
}

export default App;
