import React, { useState } from "react";
import testDataJsonArray from "../data/test-data.json";
import CurrentQuestionForm from "./CurrentQuestionForm";
import AnswerTable from "./AnswerTable";
import constructor from "./Constructor";

export default function DataProvider() {
  const [qList, setQList] = useState("");

  // shuffl array once at the begining
  constructor(() => {
    const shuffle = (list) => list.sort(() => 0.5 - Math.random());
    setQList(shuffle(testDataJsonArray));
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const isListCompleted = currentIndex <= qList.length - 1 ? false : true;
  const [displayTable, setDisplayTable] = useState(false);

  // update current question with an answer
  const setNextQuestion = (givenAnswer) => {
    qList[currentIndex].givenAnswer = givenAnswer;

    if (qList[currentIndex].expectedAnswer == givenAnswer) {
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
      console.log("Incorrect result calculation!");
    }

    return {
      totalCount: totalCount,
      incorrectAnswers: incorrectAnswers,
      totalCorrectAnswered: totalCorrectAnswered,
    };
  }

  const calculateDatailedResult = () => {
    console.log(88);
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
