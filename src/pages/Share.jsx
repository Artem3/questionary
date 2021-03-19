import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import firebase from './../firebase';
import { v4 as uuid } from 'uuid';

function Share() {
  // const axios = require('axios').default;
  // const ref = firebase.firestore().collection('userId-9'); // ownerId

  const getAllLists = () => {
    const url =
      'https://firestore.googleapis.com/v1/projects/questionnaire-4f52b/databases/(default)/documents/userId-9/';
    axios
      .get(url)
      .then(function (response) {
        console.log(response.data.documents);
        response.data.documents.map((elem) => console.log(elem.name));
        console.log('---------');
        response.data.documents.map((elem) => console.log(elem.fields));
      
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const createList = () => {
    const test = {
      listId: 'listId-11',
      listName: 'lisName-11',
      questions: [
        { question: 'q9', expectedAnswer: 'a9' },
        { question: 'q10', expectedAnswer: 'a10' },
      ],
    };
    const testString = JSON.stringify(test);
    const toDbObj = { doc: testString };

    // ref
    //   .doc('listId-' + uuid()) //listId
    //   .set(toDbObj)
    //   .catch((err) => {
    //     console.error(err);
    //   });
    // console.log('createList-after');
  };
  // ----------------------------------------------------
  const cardStyle = {
    justifyContent: 'space-between',
    height: '14rem',
    alignItems: 'center',
    padding: '2rem',
  };

  const inputStyle = {
    textAlign: 'center',
    borderRadius: '5px',
    borderWidth: '1px',
  };

  const handleImportClick = () => {
    console.log('btn Import clicked');
  };

  return (
    <Container style={{ minHeight: '100vh', color: 'white' }}>
      <h4 className="text-center py-3">Import share questionneries </h4>
      <Card bg="light" text="dark" style={cardStyle}>
        <Card.Title style={{ width: '30rem' }}>
          Enter a code to the field:
        </Card.Title>

        <input type="number" 
        placeholder="351" 
        style={inputStyle} 
        onChange={(e) => console.log(e.target.value)} />
        
        {/* Import button */}
        <Button 
        variant="warning" 
        style={{ width: '8rem' }} 
        className="mt-2 mb-2" 
        onClick={handleImportClick}>
          Import &#8630;
        </Button>
      </Card>
    </Container>
  );
}

export default Share;
