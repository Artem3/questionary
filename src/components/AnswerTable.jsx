import React from "react";

export default function AnswerTable(props) {
  return (
    <div>
      <ul style={{ listStyleType: "none" }}>
        {props.results.map((item) => (
          <li key={item.id}>{item.aaa + "--" + item.bbb}</li>
        ))}
      </ul>
    </div>
  );
}
