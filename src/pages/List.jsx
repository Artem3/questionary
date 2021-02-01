import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

export default function List() {
  // const [lists, setLists] = useState(localStorage);

  return (
    <>
      <Container style={{ minHeight: '100vh', color: 'white' }}>
        <h4>The list of saved questionaries </h4>
        <Table bordered hover size="sm" variant="light">
          <thead>
            <tr>
              <th>#</th>
              <th>List title</th>
              <th>Question number</th>
              <th>Run</th>
              <th>Edit</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {/* {for (let [key, value] of Object.entries(localStorage))  {
          console.log(`${key}: ${value}`)
        } }
            {/* <tr key={i.id}> */}
            <tr>
              <td>{1}</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
}
