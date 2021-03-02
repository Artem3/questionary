import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function CurrentQuestionForm(props) {
  const [givenAnswer, setGivenAnswer] = useState('');
  const handleClick = () => {
    props.onClick(givenAnswer);
    setGivenAnswer('');
  };

  const cardStyle = {
    justifyContent: 'space-between',
    height: '14rem',
    alignItems: 'center',
    padding: '2rem',
  };

  const inputStyle = {
    textAlign: 'center',
    borderRadius: '5px',
    borderWidth: '1px',
  };

  function handleEnterKey(e) {
    if (e.key === 'Enter') {
      handleClick();
    }
  }

  return (
    <>
      {/* Questionary title */}
      <h4 className="text-center py-3">{props.listTitle}</h4>

      {/* Display question card */}
      <Card bg="light" text="dark" style={cardStyle}>
        <Card.Title style={{ width: '30rem' }}>
          {props.currentQuestion.question}
        </Card.Title>
        <input
          type="text"
          value={givenAnswer}
          style={inputStyle}
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
        {/* Next >> button */}
        <Button
          variant="info"
          style={{ width: '8rem' }}
          className="mt-2 mb-2"
          onClick={handleClick}
        >
          Next &gt;&gt;
        </Button>
      </Card>
      <ProgressBar variant="warning" animated now={props.currentProgress} />
    </>
  );
}
