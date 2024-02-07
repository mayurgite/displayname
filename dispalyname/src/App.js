import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
export default function App({ fullName }) {
  return (
    <div>
      <h2>Full Name</h2>
      <p>{fullName}</p>
    </div>
  );
}

function NameForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!firstName || !lastName) {
      setError("Please fill in both first and last names.");
      return;
    }
    const fullName = `${firstName} ${lastName}`;
    setFullName(fullName);
    setError("");
  };
  const FullNameDisplay = ({ fullName }) => {
    return <p>{fullName}</p>;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit">Submit</button>
      {fullName && <FullNameDisplay fullName={fullName} />}
    </form>
  );
}
 ReactDOM.render(<NameForm />, document.getElementById("root"));
