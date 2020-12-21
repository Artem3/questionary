import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

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
    <Card bg="light" text="dark" style={{ alignItems: "center" }}>
      <Card.Title style={{ width: "30rem" }}>
        {props.currentQuestion.qText}
      </Card.Title>
      <input
        type="text"
        value={givenAnswer}
        style={{ textAlign: "center", borderRadius: "5px", borderWidth: "1px" }}
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
      <Button
        variant="info"
        style={{ width: "8rem" }}
        className="mt-2 mb-2"
        onClick={handleClick}
      >
        Next &gt;&gt;
      </Button>
    </Card>
  );
}
