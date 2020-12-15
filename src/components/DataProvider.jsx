import React, { useState } from "react";
import testDataJsonArray from "../data/test-data.json";
import CurrentQuestionForm from "./CurrentQuestionForm";
import constructor from "./Constructor";

export default function DataProvider() {
  const [qList, setQList] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const isListCompleted = currentIndex <= qList.length - 1 ? false : true;

  // shuffl array once at the begining
  constructor(() => {
    const shuffle = (list) => list.sort(() => 0.5 - Math.random());
    setQList(shuffle(testDataJsonArray));
  });

  const setNextQuestion = (givenAnswer) => {
    // update current question with an answer
    qList[currentIndex].givenAnswer = givenAnswer;
    const unsweredQuestion = qList[currentIndex];
    qList.splice(currentIndex, 1, unsweredQuestion);

    setQList(qList);
    setCurrentIndex(currentIndex + 1);
    // isListCompleted || setCurrentIndex(currentIndex + 1);
  };

  return (
    <div>
      {isListCompleted ? (
        <h1>Test completed!</h1>
      ) : (
        <CurrentQuestionForm
          onClick={setNextQuestion}
          currentQuestion={qList[currentIndex]}
        />
      )}
    </div>
  );
}
