import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import ListGroup from 'react-bootstrap/ListGroup';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Fade from 'react-bootstrap/Fade';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

export default function AnswerTable(props) {
  const [open, setOpen] = useState(false);
  const handResultlClick = () => {
    setOpen(!open);
    props.onClick();
  };

  const renderTable = (qList) => (
    <Fade in={open} appear timeout={600} mountOnEnter>
      <Table
        disabled
        bordered
        id="fade-tbl"
        striped
        hover
        size="sm"
        variant="light"
        className="mt-3"
      >
        <thead className="bg-warning">
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
            const variant = q.isCorrect ? 'success' : 'danger';
            const tickMark = q.isCorrect ? <span>&#10003;</span> : '';
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{q.question}</td>
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
    const valR =
      (props.results.totalCorrectAnswered * 100) / props.results.totalCount;
    return Math.round(valR * 100) / 100;
  }

  function countWrong() {
    const valW =
      (props.results.incorrectAnswers * 100) / props.results.totalCount;
    return Math.round(valW * 100) / 100;
  }

  return (
    <div>
      <p>
        Out of <big>{props.results.totalCount}</big> questions, your result is
      </p>

      <div
        style={{
          width: 300,
          margin: 'auto',
        }}
      >
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
      </div>

      <div
        style={{
          width: 600,
          marginTop: '1.2rem',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <ProgressBar
          style={{ borderRadius: '2rem', height: '1.3rem', fontSize: '1.1rem' }}
        >
          <ProgressBar
            variant="success"
            now={countRight()}
            label={countRight() + '%'}
            key={1}
          />
          <ProgressBar
            variant="danger"
            now={countWrong()}
            label={countWrong() + '%'}
            key={2}
          />
        </ProgressBar>
      </div>

      <ButtonToolbar className="justify-content-between">
        {/* Run again button */}
        <Button variant="warning" className="mt-5" onClick={props.runAgain}>
          Run again
        </Button>

        <Button
          variant="info"
          className="mt-5"
          onClick={handResultlClick}
          aria-controls="fade-tbl"
          aria-expanded={open}
        >
          {open ? 'Close' : 'Open'} detailed results
        </Button>
      </ButtonToolbar>

      {props.displayTable && renderTable(props.detailedResults)}
    </div>
  );
}
