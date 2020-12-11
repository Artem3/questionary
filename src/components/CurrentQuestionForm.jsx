import React, { useState } from 'react';

export default function CurrentQuestionForm(props) {

    const [givenAnswer, setGivenAnswer] = useState("");

    return (
        <div>
            <input
                type="text"
                value={givenAnswer}
                onChange={e => setGivenAnswer(e.target.value)}
            />
            {props.currentQuestion.qText}
            <button onClick={() => props.onClick(givenAnswer)}>
                Next question
            </button>
        </div>
    )
}


