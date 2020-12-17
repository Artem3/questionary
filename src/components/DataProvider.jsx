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
  const [test, setTest] = useState("");

  const setNextQuestion = (givenAnswer) => {
    // update current question with an answer
    qList[currentIndex].givenAnswer = givenAnswer;
    const unsweredQuestion = qList[currentIndex];
    qList.splice(currentIndex, 1, unsweredQuestion);
    setQList(qList);
    setCurrentIndex(currentIndex + 1);
  };

  function calculateCompactResult() {
    //test array to check its dispalying
    return [
      { id: 1, aaa: "111", bbb: 10 },
      { id: 2, aaa: "222", bbb: 11 },
      { id: 3, aaa: "33", bbb: 12 },
    ];
  }

  const calculateDatailedResult = () => {
    console.log(88);
    setTest("abcd");
  };

  return (
    <div>
      {isListCompleted ? (
        <div>
          <h2>Test completed!</h2>
          <p>Your result is:</p>
          <AnswerTable
            results={calculateCompactResult()}
            onClick={calculateDatailedResult}
            detailedResults={test}
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
