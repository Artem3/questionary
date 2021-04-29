import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { downloadSharedPool } from 'utils/shareHelper';
import QuestionnaireReadOnly from 'components/QuestionnaireReadOnly';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import MySpinner from 'components/MySpinner';

function SharePage() {
  const [showPool, setShowPool] = useState(false);
  const [importedPool, setImportedPool] = useState([]);
  const [importedTitle, setImportedTitle] = useState('');
  const [spinner, setSpinner] = useState(false);

  //--- styles ---
  const cardStyle = {
    justifyContent: 'space-between',
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
    enableSpinner();
    downloadSharedPool(theCode).then((result) => {
      console.log('--' + result);
      if (result !== '') {
        const pool = JSON.parse(result);
        const title = pool.listTitle;
        const qArray = pool.questions;
        console.log(title);
        setImportedTitle(title);
        setImportedPool(qArray);
        setShowPool(true);
      } else {
        alert('Questionneir is not found or removed by owner');
      }
      disableSpinner();
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

  const enableSpinner = () => {
    setSpinner(true);
  };

  const disableSpinner = () => {
    setSpinner(false);
  };

  return (
    <Container style={{ minHeight: '100vh', color: 'white' }}>
      <h4 className="text-center py-3">Import share questionneries </h4>
      <Card bg="light" text="dark" style={cardStyle}>
        <Card.Title style={{ width: '30rem' }}>Enter a code here:</Card.Title>

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
        {spinner ? (
          <MySpinner myStyle="mt-2 mb-2" text=" Uploading..." />
        ) : (
          <Button variant="warning" style={{ width: '8rem' }} className="mt-2 mb-2" onClick={handleImportClick}>
            Import &#8630;
          </Button>
        )}

        {/* Imported questionnair */}
        {showPool && (
          <>
            <h3 className="text-center mt-2">
              <b>{importedTitle}</b>
            </h3>
            <ButtonToolbar className="justify-content-between" style={{ width: '100%' }}>
              {/* Cancel button */}
              <Button variant="danger" className="mt-3 mb-1">
                Cancel
              </Button>

              {/* Save locally button */}
              <Button variant="info" className="mt-3 mb-1">
                Save locally
              </Button>
            </ButtonToolbar>

            {/* Imported table  */}
            <QuestionnaireReadOnly pool={importedPool} />
          </>
        )}
      </Card>
    </Container>
  );
}

export default SharePage;
