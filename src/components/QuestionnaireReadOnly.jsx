import Table from 'react-bootstrap/Table';

export default function QuestionnaireReadOnly(props) {
  return (
    <Table bordered hover size="sm">
      <thead>
        <th>#</th>
        <th>Question</th>
        <th>Expected answer</th>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
        </tr>
      </tbody>
    </Table>
  );
}
