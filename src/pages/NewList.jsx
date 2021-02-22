import Qestionnaire from 'components/Qestionnaire';
import Container from 'react-bootstrap/Container';

export default function NewList() {
  const testArray = [{ question: 'qq1', expectedAnswer: 'qqE' }]
    return (
    <Container style={{ minHeight: '100vh', color: 'white' }}>
      <Qestionnaire inputFields = {testArray} />
    </Container>
  );
}
