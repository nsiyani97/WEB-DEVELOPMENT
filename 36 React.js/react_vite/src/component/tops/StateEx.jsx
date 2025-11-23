import React, { useState } from 'react'
import abc from './mystyle.module.css';

function StateEx() {
    const [count, setCount] = useState(0);
    let sub = () => {
        setCount(count - 1)
    }
    const [color, setColor] = useState('red')
    let changecolor = () => {
        setColor('blue')
    }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count + 1)}>Add</button>
      <button onClick={sub}>Sub</button>

      <h1 style={{color: color}}>Hello World!</h1>
      <button onClick={changecolor}>Click Me!</button>
      <div className={abc.box}></div>
    </div>
  )
}

export default StateEx
