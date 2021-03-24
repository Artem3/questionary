import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import AnswerTable from 'components/AnswerTable';
import CurrentQuestionForm from 'components/CurrentQuestionForm';
import { shuffle } from 'utils/arrayUtils';

export default function Exam() {
  const { id } = useParams();
  const [qList, setQList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayTable, setDisplayTable] = useState(false);
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    setQList(shuffle(JSON.parse(localStorage.getItem(id))));
    //setQList(shuffle(JSON.parse(localStorage.getItem(id).questions))); check this
  }, [id]);

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
    setProgress(calculateProgress());
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

  const runAgain = () => {
    setDisplayTable(false);
    setCurrentIndex(0);
    setQList(shuffle(JSON.parse(localStorage.getItem(id))));
    // setQList(shuffle(JSON.parse(localStorage.getItem(id).questions))); // check this also
    setProgress(1);
  };

  function calculateProgress() {
    return Math.round(((currentIndex + 1) / qList.length) * 100 * 100) / 100;
  }

  return (
    <div>
      {isListCompleted ? (
        <div>
          <h3>Test completed!</h3>
          <AnswerTable
            results={calculateCompactResult()}
            onClick={calculateDatailedResult}
            detailedResults={qList}
            displayTable={displayTable}
            runAgain={runAgain}
          />
        </div>
      ) : (
        <CurrentQuestionForm
          onClick={setNextQuestion}
          currentQuestion={qList[currentIndex]}
          listTitle={id}
          currentProgress={progress}
        />
      )}
    </div>
  );
}
