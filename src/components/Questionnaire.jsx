import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { useHistory } from 'react-router-dom';

import ConfirmDialog from 'components/ConfirmDialog';

export default function Questionnaire(props) {
  const defaultInputFields = [{ question: '', expectedAnswer: '' }];
  //array with all entered questions
  const [inputFields, setInputFields] = useState(defaultInputFields);
  const [listName, setListName] = useState(`List Name - ${localStorage.length}`);
  const [replacementNeedsConfirm, setReplacementNeedsConfirm] = useState(false);
  const [confirmDialogPrompt, setConfirmDialogPrompt] = useState('');

  let history = useHistory();

  // --------------------------
  const addNewOrReplace = (key, value) => {
    const clean = value.filter(isQuestionAndAnswerFilled);
    if (clean.length === 0) {
      setInputFields(defaultInputFields);
      setReplacementNeedsConfirm(false);
      return;
    }
    const poolToSave = { questions: clean };
    localStorage.setItem(key, JSON.stringify(poolToSave));
    props.setSize(localStorage.length - 1);
  };

  const isQuestionAndAnswerFilled = (row) => row.question !== '' && row.expectedAnswer !== '';
  //TODO: regarding the row below - needs to add red borders around invalid inputs

  const isInvalidForm = () => !listName || (inputFields.length === 1 && !isQuestionAndAnswerFilled(inputFields[0]));

  const isRemoveDisabled = () => inputFields.length === 1;

  const handleInputNameChange = (event) => {
    setListName(event.target.value);
  };

  const handleAddFields = (index) => {
    const updatedInputFields = [...inputFields];
    updatedInputFields.splice(index + 1, 0, ...defaultInputFields);
    setInputFields(updatedInputFields);
  };

  const handleRemoveFields = (index) => {
    const updatedInputFields = [...inputFields];
    updatedInputFields.splice(index, 1);
    setInputFields(updatedInputFields);
  };

  const handleReplacementConfirm = () => {
    addNewOrReplace(listName, inputFields);
    history.push('/lists');
  };

  const handleReplacementCancel = () => {
    setReplacementNeedsConfirm(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //filter out all empty inputs
    let cleanQuestions = inputFields.filter(isQuestionAndAnswerFilled);
    setInputFields(cleanQuestions);

    //prepare and save to the local storage
    const listExist = localStorage.getItem(listName);
    if (listExist) {
      setConfirmDialogPrompt(`Name '${listName}' already exists. Do you want to replace existing ?`);

      if (replacementNeedsConfirm) {
        addNewOrReplace(listName, inputFields);
        history.push('/lists');
      }
      setReplacementNeedsConfirm(true);
      return;
    }

    addNewOrReplace(listName, inputFields);
    history.push('/lists');
  };

  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    if (event.target.name === 'question') {
      values[index].question = event.target.value;
    } else {
      values[index].expectedAnswer = event.target.value;
    }
    setInputFields(values);
  };
  // --------------------------
  return (
    <Container style={{ minHeight: '100vh', color: 'white' }}>
      <h4 className="text-center py-3">Create new questionnaire here</h4>
      {/* List name */}
      <Col className="text-center">
        <input
          style={{
            backgroundColor: 'lightGrey',
            borderRadius: '.3rem',
            width: '50%',
            margin: '30px',
            textAlign: 'center',
            fontWeight: 'bold',
          }}
          id="listName"
          value={listName}
          onChange={(event) => handleInputNameChange(event)}
        />
      </Col>
      <form onSubmit={handleSubmit}>
        {/* Render table with questions and answers rows */}
        {inputFields.map((inputField, index) => (
          <div className="form-row" key={index}>
            {/* Line number */}
            <div className="fc">{index + 1}</div>

            {/* Question */}
            <div className="form-group col-sm-7">
              <input
                type="text"
                className="form-control"
                placeholder="Question"
                id="question"
                name="question"
                value={inputField.question}
                onChange={(event) => handleInputChange(index, event)}
              />
            </div>

            {/* Answer */}
            <div className="form-group col-sm-2">
              <input
                type="text"
                className="form-control"
                placeholder="Answer"
                id="answer"
                name="answer"
                value={inputField.expectedAnswer}
                onChange={(event) => handleInputChange(index, event)}
              />
            </div>

            {/* Add / Remove buttons */}
            <div className="form-group col-sm-2">
              <Button variant="link" disabled={isRemoveDisabled()} onClick={() => handleRemoveFields(index)}>
                Remove
              </Button>
              <Button variant="link" onClick={() => handleAddFields(index)}>
                Add
              </Button>
            </div>
          </div>
        ))}
        <ButtonToolbar className="justify-content-around mt-3">
          {/* ---Cancel Button--- */}
          <Button variant="warning" onClick={() => history.push('/lists')}>
            Cancel
          </Button>
          {/* ---Save list button--- */}
          <Button variant="info" type="submit" onSubmit={handleSubmit} disabled={isInvalidForm()}>
            Save list
          </Button>
        </ButtonToolbar>
      </form>
      <ConfirmDialog
        show={replacementNeedsConfirm}
        prompt={confirmDialogPrompt}
        title="&#x270E; Rename"
        hideOkBtn={false}
        okBtnText={'Yes, override'}
        onOk={handleReplacementConfirm}
        onCancel={handleReplacementCancel}
      />
    </Container>
  );
}
