import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';

export default function MySpinner(props) {
  return (
    <Button variant="primary" disabled className={props.myStyle}>
      <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
      {props.text}
    </Button>
  );
}
