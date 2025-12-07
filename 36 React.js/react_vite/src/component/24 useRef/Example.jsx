import React, { useEffect, useRef } from "react";

const Example = () => {
  let inp = useRef(null);
  let inp1 = useRef(null);
  const saveData = (e) => {
    e.preventDefault();
    inp1.current.focus();
  };
  useEffect(() => {
    inp.current.focus();
  }, []);
  return (
    <div>
      <form method="post" name="frm" onSubmit={saveData}>
        <label htmlFor="">Username:</label>
        <input type="text" name="username" id="username" ref={inp} />
        <br />
        <br />

        <label htmlFor="">Email:</label>
        <input type="email" ref={inp1} name="email" id="email" />
        <br />
        <br />
        <input type="submit" value="Save" />
      </form>
    </div>
  );
};

export default Example;
