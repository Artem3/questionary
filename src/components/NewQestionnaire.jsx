import React, { useState } from "react";
import Container from "react-bootstrap/Container";

export default function NewQestionnaire() {
  const [inputFields, setInputFields] = useState([
    { firstName: "", lastName: "" },
  ]);

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({ firstName: "", lastName: "" });
    setInputFields(values);
  };

  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("inputFields", inputFields);
  };

  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    if (event.target.name === "firstName") {
      values[index].firstName = event.target.value;
    } else {
      values[index].lastName = event.target.value;
    }

    setInputFields(values);
  };

  return (
    <Container style={{ minHeight: "100vh", color: "white" }}>
      <h3>Create a qestionnaire here</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          {inputFields.map((inputField, index) => (
            <React.Fragment key={`${inputField}~${index}`}>
              {/* Questionn input */}
              <div className="form-group col-sm-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Question"
                  id="firstName"
                  name="firstName"
                  value={inputField.firstName}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </div>
              {/* Answer input */}
              <div className="form-group col-sm-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Answer"
                  id="lastName"
                  name="lastName"
                  value={inputField.lastName}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </div>
              <div className="form-group col-sm-2">
                <button
                  className="btn btn-link"
                  type="button"
                  onClick={() => handleRemoveFields(index)}
                >
                  Remove
                </button>
                <button
                  className="btn btn-link"
                  type="button"
                  onClick={() => handleAddFields()}
                >
                  Add
                </button>
              </div>
            </React.Fragment>
          ))}
        </div>
        <div className="submit-button">
          <button
            className="btn btn-primary mr-2"
            type="submit"
            onSubmit={handleSubmit}
          >
            Save list
          </button>
        </div>
        <pre>{JSON.stringify(inputFields, null, 2)}</pre>
      </form>
    </Container>
  );
}
