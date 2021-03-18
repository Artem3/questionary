import Qestionnaire from 'components/Qestionnaire';
import Container from 'react-bootstrap/Container';

export default function NewList(props) {
  return (
    <Container style={{ minHeight: '100vh', color: 'white' }}>
      <Qestionnaire setSize={props.setSize} />
    </Container>
  );
}
