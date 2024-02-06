import useToogle from "./useToggle";

function CustomHook() {
  const { show, toggle } = useToogle(true);
  return (
    <div>
      <h4>Toggle Custom Hook</h4>
      <button className="btn" onClick={toggle}>
        Toggle
      </button>
      {show && <h4>Some Stuff</h4>}
    </div>
  );
}

export default CustomHook;
