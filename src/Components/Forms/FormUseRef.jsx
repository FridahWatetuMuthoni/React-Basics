import { useState, useRef, useEffect } from "react";

/* 
useRef advantages:
1. Does not trigger a re-render
2. preserves the value between renders
3. target DOM nodes/elements
*/

function FormUseRef() {
  const [value, setValue] = useState(0);
  const refContainer = useRef(null);
  const isMounted = useRef(false);

  console.log(refContainer);

  useEffect(() => {
    refContainer.current.focus();
  });

  useEffect(() => {
    console.log(refContainer);
    if (isMounted.current) {
      console.log("mounted");
    } else {
      console.log(" not mounted");
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = refContainer.current.value;
    console.log(name);
  };
  return (
    <div>
      <form action="" className="form" onSubmit={handleSubmit}>
        <section className="form-row">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            className="form-input"
            type="text"
            ref={refContainer}
            name="name"
            id="name"
          />
        </section>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      <h1>Value: {value}</h1>
      <button className="btn btn-inline" onClick={() => setValue(value + 1)}>
        Increase
      </button>
    </div>
  );
}

export default FormUseRef;
