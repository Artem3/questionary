import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function ConfirmDialog(props) {
  return (
    <>
      <Modal show={props.show} onHide={props.onCancel} size="md">
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.prompt}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onCancel}>
            Cancel
          </Button>
          {!props.hideOkBtn && (
            <Button variant="primary" onClick={props.onOk}>
              Yes, override
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}
