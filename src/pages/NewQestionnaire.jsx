import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import ConfirmDialog from "../components/ConfirmDialog";

export default function NewQestionnaire() {
  const defaultListName = "List Name";
  //enable/disable Remove button at single input field
  const [singleField, setSingleField] = useState(true);
  //array with all entred questions
  const [inputFields, setInputFields] = useState([
    { question: "", expectedAnswer: "" },
  ]);
  const [listName, setListName] = useState(defaultListName);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    //filter out all empty inputs
    let cleanQuestions = inputFields.filter(
      (i) => !(!(i.question !== "") && !(i.expectedAnswer !== ""))
    );
    setInputFields(cleanQuestions);

    //prepare and save to the local storage
    const nameToSave = !listName ? defaultListName : listName;
    const listExist = localStorage.getItem(nameToSave);
    var replace = true;
    <ConfirmDialog />;

    if (listExist !== null) {
      // `Name '${nameToSave}' already exists. Do you want to replace existing ?`
    }

    if (replace) {
      const listAsString = JSON.stringify(inputFields);
      localStorage.setItem(nameToSave, listAsString);
    }

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
      <h4 class="text-center py-3">Create a qestionnaire here</h4>
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
          defaultValue={defaultListName}
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
          <Button variant="info" type="submit" onSubmit={handleSubmit}>
            Save list
          </Button>
        </div>
      </form>
    </Container>
  );
}
