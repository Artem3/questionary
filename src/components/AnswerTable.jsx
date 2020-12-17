import React, { useState } from "react";

export default function AnswerTable(props) {
  const handleDetailResult = () => {
    props.onClick();
  };

  return (
    <div>
      <ul style={{ listStyleType: "none" }}>
        {props.results.map((item) => (
          <li key={item.id}>{item.aaa + "--" + item.bbb}</li>
        ))}
      </ul>
      <br />
      <button onClick={handleDetailResult}>See detailed results</button>
      <div>{props.detailedResults}</div>
      <br />
    </div>
  );
}
