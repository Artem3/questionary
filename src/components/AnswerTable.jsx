import React from "react";

export default function AnswerTable(props) {
  const handleDetailResult = () => {
    props.onClick();
  };

  return (
    <div>
      <p>
        Out of <big>{props.results.totalCount}</big> questions, your result is
      </p>
      <ul style={{ listStyleType: "none" }}>
        <li>
          Correct answers: <b>{props.results.totalCorrectAnswered}</b>
        </li>
        <li>Wrong answers: <b>{props.results.incorrectAnswers}</b></li>
      </ul>
      <br />
      <button onClick={handleDetailResult}>See detailed results</button>
      <div>{props.detailedResults}</div>
      <br />
    </div>
  );
}
