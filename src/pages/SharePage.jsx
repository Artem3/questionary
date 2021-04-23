import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { downloadSharedPool } from 'utils/shareHelper';

function SharePage() {
  //--- styles ---
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
    const inputWithCode = document.getElementById('theCode');
    const theCode = inputWithCode.value;
    if (!isCodeValide(inputWithCode)) return;
    downloadSharedPool(theCode).then((result) => {
      console.log('--' + result);
      if (result !== '') {
        const pool = JSON.parse(result);
        const title = pool.listTitle;
        const qArray = pool.questions;
        console.log(title);
        console.log(qArray);
      } else {
        alert('Questionneir is not found or removed by owner');
      }
    });
  };

  function isCodeValide(input) {
    if (!input.value || input.value.trim().length === 0) {
      alert('Empty  or invalid code.');
      return false;
    }
    if (parseInt(input.value) === undefined || isNaN(parseInt(input.value))) {
      alert('Invalid code: ' + input.value);
      return false;
    }
    return true;
  }

  function handleEnterKey(e) {
    if (e.key === 'Enter') {
      handleImportClick();
    }
  }

  return (
    <Container style={{ minHeight: '100vh', color: 'white' }}>
      <h4 className="text-center py-3">Import share questionneries </h4>

      <Card bg="light" text="dark" style={cardStyle}>
        <Card.Title style={{ width: '30rem' }}>Enter a code to the field:</Card.Title>

        {/* Input field */}
        <input
          id="theCode"
          type="number"
          placeholder="351"
          onFocus={(e) => {
            e.target.placeholder = '';
          }}
          style={inputStyle}
          onKeyDown={(e) => handleEnterKey(e)}
        />

        {/* Import button */}
        <Button variant="warning" style={{ width: '8rem' }} className="mt-2 mb-2" onClick={handleImportClick}>
          Import &#8630;
        </Button>
      </Card>
    </Container>
  );
}

export default SharePage;
