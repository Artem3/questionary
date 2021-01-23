import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import ConfirmDialog from "../components/ConfirmDialog";

export default function NewQestionnaire() {
  const defaultInputFields = [
    { question: "", expectedAnswer: "" },
  ];
  //enable/disable Remove button at single input field
  const [singleField, setSingleField] = useState(true);
  //array with all entred questions
  const [inputFields, setInputFields] = useState(defaultInputFields);
  const [listName, setListName] = useState(`List Name #${localStorage.length}`);
  const [replacementNeedsConfirm, setReplacementNeedsConfirm] = useState(false);
  const [confirmDialogPrompt, setConfirmDialogPrompt] = useState('');
  const handleInputNameChange = (event) => {
    setListName(event.target.value);
  };

  const handleAddFields = (index) => {
    inputFields.splice(index + 1, 0, { question: "", expectedAnswer: "" });
    const values = [...inputFields];
    setInputFields(values);
    inputFields.length > 1 && setSingleField(false);
  };

  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
    if (inputFields.length === 2) {
      setSingleField(true);
    }
  };

  const addNewOrReplace = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  }

  const handleReplacementConfirm = () => {
    addNewOrReplace(listName, inputFields);
    setListName(`List Name #${localStorage.length}`);
    setInputFields(defaultInputFields);
    setReplacementNeedsConfirm(false);
  }

  const handleReplacementCancel = () => {
    setReplacementNeedsConfirm(false);
  }

  const isQuestionAndAnswerFilled = (row) => row.question !== "" && row.expectedAnswer !== "";
  //TODO: regarding the row below - needs to add red borders around invalid inputs
  const isInvalidForm = () => !listName || (inputFields.length === 1 && !isQuestionAndAnswerFilled(inputFields[0]));

  const handleSubmit = (e) => {
    e.preventDefault();
    //filter out all empty inputs
    let cleanQuestions = inputFields.filter(isQuestionAndAnswerFilled);
    setInputFields(cleanQuestions);

    //prepare and save to the local storage
    const listExist = localStorage.getItem(listName);

    if (listExist) {
      setConfirmDialogPrompt(`Name '${listName}' already exists. Do you want to replace existing ?`);
      setReplacementNeedsConfirm(true);
      return;
    }

    addNewOrReplace(listName, inputFields);
    setListName(`List Name #${localStorage.length}`);
    setInputFields(defaultInputFields);
    //if null then add a key
    //if string then parse back to array object, push new key-value and stringify back.
    //then localStorage.setItem
  };

  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    if (event.target.name === "question") {
      values[index].question = event.target.value;
    } else {
      values[index].expectedAnswer = event.target.value;
    }
    setInputFields(values);
  };

  return (
    <Container style={{ minHeight: "100vh", color: "white" }}>
      <h4 className="text-center py-3">Create a qestionnaire here</h4>
      {/* List name */}
      <Col className="text-center">
        <input
          style={{
            backgroundColor: "lightGrey",
            borderRadius: ".3rem",
            width: "50%",
            margin: "30px",
            textAlign: "center",
            fontWeight: "bold",
          }}
          id="listName"
          value={listName}
          onChange={(event) => handleInputNameChange(event)}
        />
      </Col>
      <form onSubmit={handleSubmit}>
        {inputFields.map((inputField, index) => (
          <div className="form-row" key={index}>
            {/* Line  number */}
            <div className="fc">{index + 1}</div>

            {/* Questionn */}
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
              <Button
                variant="link"
                disabled={singleField}
                onClick={() => handleRemoveFields(index)}
              >
                Remove
              </Button>
              <Button variant="link" onClick={() => handleAddFields(index)}>
                Add
              </Button>
            </div>
          </div>
        ))}
        <div>
          <Button variant="info" type="submit" onSubmit={handleSubmit} disabled={isInvalidForm()}>
            Save list
          </Button>
        </div>
      </form>
      <ConfirmDialog 
        show={replacementNeedsConfirm}
        prompt={confirmDialogPrompt}
        onOk={handleReplacementConfirm}
        onCancel={handleReplacementCancel} 
      />
    </Container>
  );
}
