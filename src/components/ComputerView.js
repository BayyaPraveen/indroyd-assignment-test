import React from 'react';
import './ComputerView.css';

const ComputerView = ({ players, currentQuestion, correctAnswers, feedbackMessage }) => {
    return (
        <div>
            <h1>Computer View</h1>
            <h2>{currentQuestion.question}</h2>
            <ul>
                {Object.entries(currentQuestion.options).map(([key, value]) => (
                    <li key={key}>{key}: {value}</li>
                ))}
            </ul>
            <h3>Correct Answers:</h3>
            <ul>
                {correctAnswers.map((name, index) => (
                    <li key={index}>{name} answered correctly!</li>
                ))}
            </ul>
            {feedbackMessage && <h3>{feedbackMessage}</h3>} {/* Display feedback */}
        </div>
    );
};

export default ComputerView;
