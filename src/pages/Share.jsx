import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import firebase from './../firebase';
import { v4 as uuid } from 'uuid';

function Share() {
  const [lists, setLists] = useState([]);

  const axios = require('axios').default;
  const ref = firebase.firestore().collection('userId-9');// ownerId

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
        // response.data.documents.map((elem) =>
        //   console.log(elem.fields.questions.arrayValue.values.map((val) => console.log(val.mapValue.fields)))
        // );
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

    ref
      .doc('listId-' + uuid()) //listId
      .set(toDbObj)
      .catch((err) => {
        console.error(err);
      });
    console.log('createList-after');
  };

  return (
    <Container style={{ minHeight: '100vh', color: 'white' }}>
      <h3>Firebase Share test page </h3>

      <button onClick={getAllLists}>Get All questionnaires from DB</button>
      <br />
      <br />
      <button onClick={createList}>Create new questionnaires</button>

      <div>
        <h3>All:</h3>
        {lists.map((qList) => (
          <div key={qList.list_id_1}>
            {console.log(qList.list_id_1)}
            <h6>Name: {qList.listName}</h6>
            <h6>Owner: {qList.ownerId}</h6>
            <h6>Questions: {qList.questions.length}</h6>
            <br />
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Share;
