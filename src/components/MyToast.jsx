import Toast from "react-bootstrap/Toast";

function MyToast(props) {
  return (
    <>
      <Toast
        show={props.show}
        autohide={props.autohide}
        delay={props.delay}
        onClose={props.onClose}
      >
        <Toast.Body>
          <span>&#10003;</span>
          <br />
          Successfully saved to the questionnaire list
        </Toast.Body>
      </Toast>
    </>
  );
}

export default MyToast;
