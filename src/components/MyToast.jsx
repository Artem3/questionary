import Toast from 'react-bootstrap/Toast';

export default function MyToast(props) {
  return (
    <div
      style={{
        position: 'absolute',
        top: '45%',
        left: '40%',
        color: 'black',
        background: 'white',
      }}
    >
      <Toast show={props.show} autohide={props.autohide} delay={props.delay} onClose={props.onClose}>
        <Toast.Header>
          <strong className="mr-auto">&#9940; Error</strong>
        </Toast.Header>
        <Toast.Body>{props.text}</Toast.Body>
      </Toast>
    </div>
  );
}
