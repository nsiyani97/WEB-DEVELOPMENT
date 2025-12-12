import React from 'react'
import { add, minus } from './CounterAction'
const initialState = {
    count:0,
    datA:[]
}
const CounterReducer = (state=initialState,action)=>{
    switch(action.type){
        case add: return {
            ...state,
            count:state.count+1
        }
        case minus: return {
            ...state,
            count:state.count-1
        }
        default: return state
    }
}

export default CounterReducer