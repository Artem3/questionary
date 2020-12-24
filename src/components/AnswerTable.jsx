import React from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import ListGroup from "react-bootstrap/ListGroup";

export default function AnswerTable(props) {
  const renderTable = (qList) => (
    <Table striped bordered hover size="sm" variant="light">
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
          const variant = q.isCorrect ? "success": "danger";
          // const mark = q.isCorrect ? '&#10004;' : "";
          return (
            <tr key={q.id}>
              <td>{index + 1}</td>
              <td>{q.qText}</td>
              <td>{q.expectedAnswer}</td>
              <td>{q.givenAnswer}</td>
              <td>
              <ListGroup.Item variant={variant}>
                {/* {mark}  */}
              </ListGroup.Item>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );

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
      <Button variant="info" className="mb-3" onClick={props.onClick}>
        See detailed results
      </Button>
      {props.displayTable && renderTable(props.detailedResults)}
    </div>
  );
}
