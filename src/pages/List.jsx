import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

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

  const handleRun = () => {
    console.log('Run btn clicked');
  };
  const handleEdit = () => {
    console.log('Edit btn clicked');
  };
  const handleDelete = (title) => {
    localStorage.removeItem(title);
    setContent(fillContentFromStorage());
  };

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
            {Array.from(content)
              .sort()
              .map((elem, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{elem[0]}</td>
                    <td>{elem[1]}</td>
                    <td>
                      <Button variant="link" onClick={() => handleRun()}>
                        &#9655;
                      </Button>
                    </td>
                    <td>
                      <Button variant="link" onClick={() => handleEdit()}>
                        &#x270E;
                      </Button>
                    </td>
                    <td>
                      <Button
                        variant="link"
                        onClick={() => handleDelete(elem[0])}
                      >
                        &#x2716;
                      </Button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </Container>
    </>
  );
}
