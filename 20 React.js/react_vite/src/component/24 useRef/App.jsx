import { useRef, useState } from "react";
import Example from "./Example";
const Home = () => {
  let [count, setCount] = useState(0);
  let a = useRef(10);
  const addCounter = () => {
    setCount(count + 1);
    a.current += 1;
    console.log(a);
  };
  return (
    <>
      <h3>Home component Called..</h3>
      <h4>Use Ref Hooks example</h4>
      <h4>Count is -- {count}</h4>
      <h4>A is -- {a.current}</h4>
      <button onClick={addCounter}>Add Counter</button>
      <hr />
      <Example></Example>
    </>
  );
};
export default Home;
