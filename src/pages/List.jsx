import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

export default function List(props) {
  const [content, setContent] = useState(fillContentFromStorage());

  function fillContentFromStorage() {
    const content = new Map();
    for (var i = 0, len = localStorage.length; i < len; ++i) {
      let title = localStorage.key(i);
      if (title === 'userId') {
        continue;
      }
      let qLength = JSON.parse(localStorage.getItem(title)).length;
      content.set(title, qLength);
    }
    return content;
  }

  const handleDelete = (title) => {
    localStorage.removeItem(title);
    setContent(fillContentFromStorage());
    props.setSize(localStorage.length - 1);
  };

  return (
    <>
      <Container style={{ minHeight: '100vh', color: 'white' }}>
        <h4 className="text-center py-3">The list of saved questionaries </h4>
        <Table bordered hover size="sm" variant="light">
          <thead className="bg-warning">
            <tr>
              <th>#</th>
              <th>Questionnaire title</th>
              <th>Number of questions</th>
              <th>Run</th>
              <th>Edit</th>
              <th>Remove</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Array.from(content)
              .sort()
              .map((elem, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{elem[0]}</td>
                    <td>{elem[1]}</td>
                    <td>
                      {/* --Run button--- */}
                      <Button variant="link">
                        <Link to={'/questionnaire/' + elem[0]}>&#9655;</Link>
                      </Button>
                    </td>
                    <td>
                      {/* --Edit button--- */}
                      <Button variant="link">
                        <Link to={'/' + elem[0]}>&#x270E;</Link>
                      </Button>
                    </td>
                    <td>
                      {/* --Delete button--- */}
                      <Button variant="link" onClick={() => handleDelete(elem[0])}>
                        &#x2716;
                      </Button>
                    </td>
                    <td>
                      {/* --Action button--- */}
                      <Dropdown>
                        <Dropdown.Toggle variant="withe" id="dropdown-basic" size="sm">
                          {index > 2 ? <span>&#9776;</span> : <span>&#128279;</span>}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">Share this pool</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Item2</Dropdown.Item>
                          <Dropdown.Divider />
                          <Dropdown.Item href="#/action-2">Item3</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
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
