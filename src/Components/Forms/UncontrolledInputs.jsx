import { useState } from "react";

function UncontrolledInputs() {
  const frameworks = ["react", "angular", "vue", "svelte"];
  const [shipping, setShipping] = useState(false);
  const [framework, setFramework] = useState("react");

  const handleShipping = (e) => {
    setShipping(e.target.checked);
  };

  const handleFramework = (e) => {
    setFramework(e.target.value);
  };

  return (
    <div>
      <form action="" className="form">
        <h4>Uncontrolled Inputs</h4>

        <section className="form-row" style={{ textAlign: "left" }}>
          <label htmlFor="shipping">Free Shipping</label>
          <input
            type="checkbox"
            name="shipping"
            id="shipping"
            checked={shipping}
            onChange={(e) => handleShipping(e)}
          />
        </section>

        <section className="form-row" style={{ textAlign: "left" }}>
          <label htmlFor="shipping">FrameWork</label>
          <select
            name="framework"
            id="framework"
            onChange={(e) => handleFramework(e)}
          >
            {frameworks.map((framework, index) => {
              return (
                <option key={index} value={framework}>
                  {framework}
                </option>
              );
            })}
          </select>
        </section>

        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </form>

      <section className="form">
        <h4 style={{ color: "blue", textDecoration: "underline" }}>
          User Inputs Display
        </h4>
        <section>
          <h4>Free Shipping: {shipping ? "True" : "False"} </h4>
          <h4>Frameword: {framework}</h4>
        </section>
      </section>
    </div>
  );
}

export default UncontrolledInputs;
