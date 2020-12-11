import React, { useState } from 'react';
import testDataJsonArray from '../data/test-data.json';
import CurrentQuestionForm from './CurrentQuestionForm';

export default function DataProvider() {

    const [qList, setQList] = useState(testDataJsonArray);
    const [currentQuestionId, setCurrentQuestionId] = useState(1);

    const setNextQuestion = (givenAnswer) => {
        setQList(qList.map(q => q.id === currentQuestionId ? { ...q, givenAnswer: givenAnswer } : q))
        setCurrentQuestionId(currentQuestionId + 1)
    };

    return (
        <div>
            <CurrentQuestionForm
                onClick={setNextQuestion}
                currentQuestion={qList.find(q => q.id === currentQuestionId)}
            />
        </div>
    )

}
