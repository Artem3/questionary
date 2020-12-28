import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import ListGroup from "react-bootstrap/ListGroup";
import ProgressBar from "react-bootstrap/ProgressBar";
import Fade from "react-bootstrap/Fade";

export default function AnswerTable(props) {
  const [open, setOpen] = useState(false);
  const handResultlClick = () => {
    setOpen(!open);
    props.onClick();
  };

  const renderTable = (qList) => (
    <Fade in={open} appear timeout={600} mountOnEnter>
      <Table id="fade-tbl" striped bordered hover size="sm" variant="light">
        <thead>
          <tr>
            <th>#</th>
            <th>Question</th>
            <th>Expected answer</th>
            <th>Your answer</th>
            <th>Correctness</th>
          </tr>
        </thead>
        <tbody>
          {qList.map((q, index) => {
            const variant = q.isCorrect ? "success" : "danger";
            const tickMark = q.isCorrect ? <span>&#10003;</span> : "";
            return (
              <tr key={q.id}>
                <td>{index + 1}</td>
                <td>{q.qText}</td>
                <td>{q.expectedAnswer}</td>
                <td>{q.givenAnswer}</td>
                <td>
                  <ListGroup.Item variant={variant}>{tickMark}</ListGroup.Item>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Fade>
  );

  function countRight() {
    return (
      (props.results.totalCorrectAnswered * 100) / props.results.totalCount
    );
  }
  function countWrong() {
    return (props.results.incorrectAnswers * 100) / props.results.totalCount;
  }

  return (
    <div>
      <p>
        Out of <big>{props.results.totalCount}</big> questions, your result is
      </p>

      <ListGroup variant="flush">
        {(() => {
          if (props.results.totalCorrectAnswered > 0) {
            return (
              <ListGroup.Item variant="success">
                Correct answers: <b>{props.results.totalCorrectAnswered}</b>
              </ListGroup.Item>
            );
          }
        })()}

        {(() => {
          if (props.results.incorrectAnswers > 0) {
            return (
              <ListGroup.Item variant="danger">
                Wrong answers: <b>{props.results.incorrectAnswers}</b>
              </ListGroup.Item>
            );
          }
        })()}
      </ListGroup>

      <br />
      <ProgressBar>
        <ProgressBar
          variant="success"
          now={countRight()}
          label={countRight() + "%"}
          key={1}
        />
        <ProgressBar
          variant="danger"
          now={countWrong()}
          label={countWrong() + "%"}
          key={2}
        />
      </ProgressBar>

      <br />
      <Button
        variant="info"
        className="mb-3"
        onClick={handResultlClick}
        aria-controls="fade-tbl"
        aria-expanded={open}
      >
        {open ? "Close" : "Open"} detailed results
      </Button>
      {props.displayTable && renderTable(props.detailedResults)}
    </div>
  );
}
