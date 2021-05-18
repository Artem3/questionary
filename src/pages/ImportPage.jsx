import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { downloadSharedPool } from 'utils/shareHelper';
import QuestionnaireReadOnly from 'components/QuestionnaireReadOnly';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import MySpinner from 'components/MySpinner';
import ConfirmDialog from 'components/ConfirmDialog';

export default function ImportPage() {
  const [importedPool, setImportedPool] = useState([]);
  const [importedTitle, setImportedTitle] = useState('');
  const [spinner, setSpinner] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [showValidation, setShowValidation] = useState(false);
  const [erorrText, setErrorText] = useState('');
  const [showOk, setShowOk] = useState(false);
  const [finalName, setFinalName] = useState('');
  let history = useHistory();
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
    setImportedTitle('');
    setImportedPool([]);
    setSpinner(false);
    setInputValue('');
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
        setErrorText('A questionnaire is not found or has been removed by the owner');
        setShowValidation(true);
        setDefaultState();
      }
      disableSpinner();
    });
  };

  function isCodeValid(input) {
    if (!input || input.trim().length === 0 || parseInt(input) === undefined || isNaN(parseInt(input))) {
      setErrorText('Empty or invalid code.');
      setShowValidation(true);
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

  const handleSaveLocally = () => {
    const sufix = `(${inputValue})`;
    let fullName = importedTitle;

    while (true) {
      fullName = fullName + sufix;
      if (localStorage.getItem(fullName) == null) {
        localStorage.setItem(fullName, JSON.stringify({ questions: importedPool }));
        setFinalName(fullName);
        setShowOk(true);
        setDefaultState();
        break;
      }
    }
  };

  // ---------------------------------------------------
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
              <Button variant="info" className="mt-3 mb-1" onClick={handleSaveLocally}>
                Save locally
              </Button>
            </ButtonToolbar>

            {/* Imported table  */}
            <QuestionnaireReadOnly pool={importedPool} />
          </>
        )}
      </Card>

      {/* Validation dialog */}
      <ConfirmDialog
        show={showValidation}
        title="&#9940; Validation error"
        prompt={erorrText}
        hideOkBtn={true}
        onCancel={() => setShowValidation(false)}
      />
      {/* Confirm save or override dialog */}
      <ConfirmDialog
        show={showOk}
        title="&#9971; Success"
        prompt={'A questioneire saved with name  ' + finalName}
        hideOkBtn={false}
        okBtnText={'Ok'}
        onOk={() => history.push('/lists')}
        onCancel={() => history.push('/lists')}
      />
    </Container>
  );
}
