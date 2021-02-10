// import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';
import Qestionnaire from '../components/Qestionnaire';

export default function EditForm() {
  let { id } = useParams();

  return (
    <>
      <Container style={{ minHeight: '100vh', color: 'white' }}>
        <h1>Edit page of list with Name = {id}</h1>
        <Qestionnaire />
      </Container>
    </>
  );
}
