import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import firebase from './../firebase';

function Share() {
  const [lists, setLists] = useState([{ id: 'test', questions: ['a', 'b'] }]);
  console.log('---Share1--');

  const ref = firebase.firestore().collection('lists');

  useEffect(() => {
    console.log('---Share2--');
    getAllLists();
  }, []);

  function getAllLists() {
    ref.get().then((item) => {
      const items = item.docs.map((doc) => doc.data());
      console.log(items);
      setLists(items);
    });
  }

  return (
    <Container style={{ minHeight: '100vh', color: 'white' }}>
      <h3>Firebase Share test page </h3>

      <button onClick={getAllLists}>Get All questionnaires from DB</button>

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
