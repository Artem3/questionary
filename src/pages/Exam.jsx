import React, { useState, useEffect } from 'react';
import testDataJsonArray from 'data/test-data.json';

import AnswerTable from 'components/AnswerTable';
import CurrentQuestionForm from 'components/CurrentQuestionForm';
import { shuffle } from 'utils/arrayUtils';

export default function Exam() {
  const [qList, setQList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayTable, setDisplayTable] = useState(false);

  useEffect(() => {
    setQList(shuffle(testDataJsonArray));
  }, []);
  const isListCompleted = currentIndex <= qList.length - 1 ? false : true;

  // update current question with an answer
  const setNextQuestion = (givenAnswer) => {
    qList[currentIndex].givenAnswer = givenAnswer;

    if (qList[currentIndex].expectedAnswer === givenAnswer) {
      qList[currentIndex].isCorrect = true;
    }
    const unsweredQuestion = qList[currentIndex];
    qList.splice(currentIndex, 1, unsweredQuestion);
    setQList(qList);
    setCurrentIndex(currentIndex + 1);
  };

  function calculateCompactResult() {
    const totalCount = qList.length;
    const list = Object.values(qList);
    const incorrectAnswers = list.filter((i) => i.isCorrect === false).length;
    const totalCorrectAnswered = list.filter((i) => i.isCorrect === true)
      .length;

    if (incorrectAnswers + totalCorrectAnswered !== totalCount) {
      console.log('Incorrect result calculation!');
    }

    return {
      totalCount: totalCount,
      incorrectAnswers: incorrectAnswers,
      totalCorrectAnswered: totalCorrectAnswered,
    };
  }

  const calculateDatailedResult = () => {
    setDisplayTable(true);
  };

  return (
    <div>
      {isListCompleted ? (
        <div>
          <h2>Test completed!</h2>
          <AnswerTable
            results={calculateCompactResult()}
            onClick={calculateDatailedResult}
            detailedResults={qList}
            displayTable={displayTable}
          />
        </div>
      ) : (
        <CurrentQuestionForm
          onClick={setNextQuestion}
          currentQuestion={qList[currentIndex]}
        />
      )}
    </div>
  );
}
