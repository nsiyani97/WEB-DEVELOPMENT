import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addFunc, minusFunc } from './CounterAction'

const CounterComponent = () => {
    const count = useSelector((i)=>i.count)
    const dispatch = useDispatch()
  return (
    <div>
      <h4>Counter Example</h4>
      <h3>Count is  -- {count}</h3>
      <button onClick={()=>dispatch(addFunc())}>Add Counter</button>
      <button onClick={()=>dispatch(minusFunc())}>Minus Counter</button>
    </div>
  )
}

export default CounterComponent