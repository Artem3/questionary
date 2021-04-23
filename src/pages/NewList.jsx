import Questionnaire from 'components/Questionnaire';
import Container from 'react-bootstrap/Container';

export default function NewList(props) {
  return (
    <Container style={{ minHeight: '100vh', color: 'white' }}>
      <Questionnaire setSize={props.setSize} />
    </Container>
  );
}
