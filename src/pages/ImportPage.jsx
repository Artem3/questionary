import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { downloadSharedPool } from 'utils/shareHelper';
import QuestionnaireReadOnly from 'components/QuestionnaireReadOnly';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import MySpinner from 'components/MySpinner';
import MyToast from 'components/MyToast';

export default function ImportPage() {
  const [importedPool, setImportedPool] = useState([]);
  const [importedTitle, setImportedTitle] = useState('');
  const [spinner, setSpinner] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [errors, setErrors] = useState([]);

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

  const setDefaultState = () => {
    setImportedPool([]);
    setImportedTitle('');
    setSpinner(false);
    setInputValue('');
    setErrors([]);
  };

  const handleImportClick = () => {
    const sharedCode = inputValue;
    if (!isCodeValid(inputValue)) return;
    enableSpinner();
    downloadSharedPool(sharedCode).then((result) => {
      console.log('--' + result);
      if (result !== '') {
        const pool = JSON.parse(result);
        const title = pool.listTitle;
        const qArray = pool.questions;
        console.log(title);
        setImportedTitle(title);
        setImportedPool(qArray);
      } else {
        setDefaultState();
        setErrors([...errors, 'A questionnaire is not found or has been removed by the owner']);
      }
      disableSpinner();
    });
  };

  function isCodeValid(input) {
    if (!input || input.trim().length === 0) {
      setErrors([...errors, 'Empty or invalid code.']);
      return false;
    }
    if (parseInt(input) === undefined || isNaN(parseInt(input))) {
      setErrors([...errors, 'Invalid code: ' + input]);
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
  const handleCancel = () => {
    setDefaultState();
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
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
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
        {importedPool.length > 0 && (
          <>
            <h3 className="text-center mt-2">
              <b>{importedTitle}</b>
            </h3>
            <ButtonToolbar className="justify-content-between" style={{ width: '100%' }}>
              {/* Cancel button */}
              <Button variant="danger" className="mt-3 mb-1" onClick={handleCancel}>
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
      {errors.map((er) => (
        <MyToast show={true} text={er} onClose={() => setErrors(errors.filter((err) => err !== er))} />
      ))}
    </Container>
  );
}
