import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

export default function AnswerTable(props) {
  const handleDetailResult = () => {
    props.onClick();
  };
  const [displayTable, setDisplayTable] = useState(false);

  const renderTable = (qList) => {
    < Table striped bordered hover size="sm" variand="warning" >
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
    </Table >
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
      <Button
        variant="info"
        className='mb-3'
        onClick={handleDetailResult}>See detailed results
      </Button>
      {/* test */}
      {displayTable ?
        <div> {renderTable(this.props.detailedResults)}</div>
        : <div>---no details--</div>
      }

    </div >
  );
}
