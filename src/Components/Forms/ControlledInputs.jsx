import { useState } from "react";

function ControlledInputs() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstname || !lastname || !email) return;
    console.log(firstname, lastname, email);
  };

  return (
    <form action="" className="form" onSubmit={handleSubmit}>
      <h4>Controlled Inputs</h4>

      <section className="form-row">
        <label className="form-label" htmlFor="firstname">
          First Name:
        </label>
        <input
          type="text"
          className="form-input"
          name="firstname"
          id="firstname"
          value={firstname}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </section>

      <section className="form-row">
        <label className="form-label" htmlFor="lastname">
          Last Name:
        </label>
        <input
          type="text"
          className="form-input"
          name="lastname"
          id="lastname"
          value={lastname}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </section>

      <section className="form-row">
        <label className="form-label" htmlFor="email">
          Email:
        </label>
        <input
          type="email"
          className="form-input"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          required
        />
      </section>

      <button type="submit" className="btn btn-block">
        Submit
      </button>
    </form>
  );
}

export default ControlledInputs;
