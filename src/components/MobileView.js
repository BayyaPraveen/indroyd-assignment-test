import React, { useState } from 'react';
import './MobileView.css';

const MobileView = ({ players, currentQuestion, onAnswer, feedbackMessage }) => {
    const [selectedAnswer, setSelectedAnswer] = useState('');

    const handleSubmit = () => {
        const playerName = players[players.length - 1].name; // Last player who joined
        onAnswer(playerName, selectedAnswer);
    };

    return (
        <div>
            <h1>Mobile View</h1>
            <h2>{currentQuestion.question}</h2>
            {Object.entries(currentQuestion.options).map(([key, value]) => (
                <div key={key}>
                    <input
                        type="radio"
                        id={key}
                        name="answer"
                        value={key}
                        onChange={(e) => setSelectedAnswer(e.target.value)}
                    />
                    <label htmlFor={key}>{value}</label>
                </div>
            ))}
            <button onClick={handleSubmit}>Submit Answer</button>
            {feedbackMessage && <p>{feedbackMessage}</p>} {/* Display feedback */}
        </div>
    );
};

export default MobileView;
