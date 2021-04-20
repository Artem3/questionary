import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import { doSharing } from 'utils/shareHelper';

export default function List(props) {
  const [content, setContent] = useState(fillContentFromStorage());

  function fillContentFromStorage() {
    const content = new Map();
    for (var i = 0, len = localStorage.length; i < len; ++i) {
      let title = localStorage.key(i);
      if (title === 'userId') {
        continue;
      }
      const savedPool = JSON.parse(localStorage.getItem(title));
      content.set(title, savedPool);
    }
    return content;
  }

  const handleDelete = (title) => {
    localStorage.removeItem(title);
    setContent(fillContentFromStorage());
    props.setSize(localStorage.length - 1);
  };

  const handleShare = (title) => {
    const pool = localStorage.getItem(title);
    doSharing(title, pool).then((result) => {
      const updatedPool = {
        questions: JSON.parse(pool).questions,
        sharedCode: result,
      };
      localStorage.setItem(title, JSON.stringify(updatedPool));
      setContent(fillContentFromStorage());
    });
  };

  const handleCopyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
  };

  const handleStopSharing = (code) => {
    //remove record from SharedCode table
    alert("Not implemented yet");
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
            {Array.from(content, ([title, poolAndCode]) => ({ title, poolAndCode }))
              .sort()
              .map((elem, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{elem.title}</td>
                    <td>{elem.poolAndCode.questions.length}</td>
                    <td>
                      {/* --Run button--- */}
                      <Button variant="link">
                        <Link to={`/${elem.title}/exam`}>&#9655;</Link>
                      </Button>
                    </td>
                    <td>
                      {/* --Edit button--- */}
                      <Button variant="link">
                        <Link to={`/${elem.title}/edit`}>&#x270E;</Link>
                      </Button>
                    </td>
                    <td>
                      {/* --Delete button--- */}
                      <Button variant="link" onClick={() => handleDelete(elem.title)}>
                        &#x2716;
                      </Button>
                    </td>
                    <td>
                      {/* --Action button--- */}
                      {elem.poolAndCode.sharedCode ? (
                        <>
                          {elem.poolAndCode.sharedCode}
                          <Dropdown>
                            <Dropdown.Toggle variant="outline-info">&#9881;</Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item onClick={() => handleCopyToClipboard(elem.poolAndCode.sharedCode)}>
                                Copy code &#9993;
                              </Dropdown.Item>
                              <Dropdown.Divider />
                              <Dropdown.Item onClick={() => handleStopSharing(elem.poolAndCode.sharedCode)}>
                                Stop sharing
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </>
                      ) : (
                        <Button variant="dark" onClick={() => handleShare(elem.title)}>
                          Share this pool &#9741;
                        </Button>
                      )}
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
