import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";

export default function List() {
  const [lists, setLists] = useState(localStorage);
  
  return (
    <Container /* style={{ minHeight: "100vh", color: "white" }}*/>
      <h3>List of you saved questionnaires</h3>

      <ListGroup.Item disabled>Cras justo odio</ListGroup.Item>
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Morbi leo risus</ListGroup.Item>
      <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
    </Container>
  );
}
