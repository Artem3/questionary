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
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
      </tbody>
    </Table>
  );

  return (
    <div>
      <p>
        Out of <big>{props.results.totalCount}</big> questions, your result is
      </p>
      <ListGroup variant="flush">
        <ListGroup.Item variant="success">
          Correct answers: <b>{props.results.totalCorrectAnswered}</b>
        </ListGroup.Item>
        <ListGroup.Item variant="danger">
          Wrong answers: <b>{props.results.incorrectAnswers}</b>
        </ListGroup.Item>
      </ListGroup>
      <br />
      <Button variant="info" className="mb-3" onClick={props.onClick}>
        See detailed results
      </Button>
      {props.displayTable && renderTable(props.detailedResults)}
    </div>
  );
}
