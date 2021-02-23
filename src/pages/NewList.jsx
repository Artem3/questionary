import Qestionnaire from 'components/Qestionnaire';
import Container from 'react-bootstrap/Container';

export default function NewList() {
  const testArray = [{ question: '', expectedAnswer: '' }]
    return (
    <Container style={{ minHeight: '100vh', color: 'white' }}>
      <Qestionnaire />
    </Container>
  );
}
