import Table from 'react-bootstrap/Table';

export default function QuestionnaireReadOnly(props) {
  return (
    <Table bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Question</th>
          <th>Expected answer</th>
        </tr>
      </thead>
      <tbody>
        {props.pool.map((elem, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{elem.question}</td>
              <td>{elem.expectedAnswer}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
