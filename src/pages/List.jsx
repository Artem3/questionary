import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

export default function List() {
  
  const [content, setContent] = useState(fillContentFromStorage());
  const i = 0;

  function fillContentFromStorage() {
    const content = new Map();
    for (var i = 0, len = localStorage.length; i < len; ++i) {
      let title = localStorage.key(i);
      let qLength = JSON.parse(localStorage.getItem(title)).length;
      content.set(title, qLength);
    }
    return content;
  }

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
            {content.forEach((title, size) => {

              return (
                <tr>
                  <td>{i}</td>
                  <td>{title}</td>
                  <td>{size}</td>
                  <td>Del</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
}
