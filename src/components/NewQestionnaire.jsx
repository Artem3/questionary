import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

export default function NewQestionnaire() {
  const [inputFields, setInputFields] = useState([
    { firstName: "", lastName: "" },
  ]);

  const handleAddFields = (index) => {
    inputFields.splice(index + 1, 0, { firstName: "", lastName: "" });
    const values = [...inputFields];
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
      <h4 class="text-center py-2">Create a qestionnaire here</h4>
      <form onSubmit={handleSubmit}>
        {inputFields.map((inputField, index) => (
          <React.Fragment key={index}>
            <div className="form-row">
              {/* Line  number */}
              <div className="fc">{index + 1}</div>

              {/* Questionn input */}
              <div className="form-group col-sm-7">
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
              {/* Add / Remove buttons */}
              <div className="form-group col-sm-2">
                <Button
                  variant="link"
                  onClick={() => handleRemoveFields(index)}
                >
                  Remove
                </Button>
                <Button variant="link" onClick={() => handleAddFields(index)}>
                  Add
                </Button>
              </div>
            </div>
          </React.Fragment>
        ))}
        <div>
          <Button variant="info" type="submit" onSubmit={handleSubmit}>
            Save list
          </Button>
        </div>
        <pre>{JSON.stringify(inputFields, null, 2)}</pre>
      </form>
    </Container>
  );
}
