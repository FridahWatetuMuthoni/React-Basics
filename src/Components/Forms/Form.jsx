function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(e.currentTarget);
    const formData = new FormData(e.currentTarget);
    const username = formData.get("username");
    console.log(username);
    //tranfrming the formData to an object
    const form_values = [...formData.entries()];
    const form_object = Object.fromEntries(formData);
    console.log(form_values);
    console.log(form_object);

    //clearing the values form the form
    e.currentTarget.reset();
  };
  return (
    <div>
      <form action="" className="form" onSubmit={handleSubmit}>
        <h4>Using FormData API</h4>
        <section className="form-row">
          <label className="form-label" htmlFor="username">
            Username:
          </label>
          <input
            type="text"
            className="form-input"
            name="username"
            id="username"
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
            id="email"
            required
          />
        </section>

        <section className="form-row">
          <label className="form-label" htmlFor="password">
            Password:
          </label>
          <input
            type="password"
            className="form-input"
            name="password"
            id="password"
            required
          />
        </section>

        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
