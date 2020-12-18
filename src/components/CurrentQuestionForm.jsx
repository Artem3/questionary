import React, { useState } from "react";
import Button from "react-bootstrap/Button";

export default function CurrentQuestionForm(props) {
  const [givenAnswer, setGivenAnswer] = useState("");
  const handleClick = () => {
    props.onClick(givenAnswer);
    setGivenAnswer("");
  };

  function handleEnterKey(e) {
    if (e.key === "Enter") {
      handleClick();
    }
  }

  return (
    <div>
      <input
        type="text"
        value={givenAnswer}
        onChange={(e) => setGivenAnswer(e.target.value)}
        ref={(ref) => ref && ref.focus()}
        onFocus={(e) =>
          e.currentTarget.setSelectionRange(
            e.currentTarget.value.length,
            e.currentTarget.value.length
          )
        }
        onKeyDown={(e) => handleEnterKey(e)}
      />
      {props.currentQuestion.qText}
      <Button variant="info" onClick={handleClick}>
        Next &gt;&gt;
      </Button>
      <br />
    </div>
  );
}
