import { useState } from "react";

function MultipleInputs() {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const [users, setUsers] = useState([]);

  let { firstname, lastname, email, password } = user;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstname || !lastname || !email || !password) return;
    setUsers((prev) => [...prev, user]);
    setUser({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    });
  };

  const handleChange = (e) => {
    setUser((prev) => {
      return {
        ...prev,
        [e.target.name]: [e.target.value],
      };
    });
  };

  return (
    <>
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
            onChange={(e) => handleChange(e)}
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
            onChange={(e) => handleChange(e)}
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
            onChange={(e) => handleChange(e)}
            id="email"
            required
          />
        </section>

        <section className="form-row">
          <label className="form-label" htmlFor="email">
            Password:
          </label>
          <input
            type="password"
            className="form-input"
            name="password"
            onChange={(e) => handleChange(e)}
            id="password"
            value={password}
            required
          />
        </section>

        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </form>
      <section className="form">
        <h2>Users</h2>
        {users.length ? (
          <section>
            {users.map((user, index) => {
              return (
                <section key={index} className="card">
                  <h5>FirstName: {user.firstname}</h5>
                  <h5>LastName: {user.lastname}</h5>
                  <h5>Email: {user.email}</h5>
                </section>
              );
            })}
          </section>
        ) : (
          <h5>No users are available</h5>
        )}
      </section>
    </>
  );
}

export default MultipleInputs;
