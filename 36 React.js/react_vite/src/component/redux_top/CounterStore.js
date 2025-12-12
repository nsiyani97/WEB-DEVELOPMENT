import { createStore } from 'redux'
import CounterReducer from './CounterReducer'

const CounterStore =  createStore(CounterReducer)

export default CounterStore