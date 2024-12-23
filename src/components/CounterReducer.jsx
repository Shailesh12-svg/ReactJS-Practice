import React, { useReducer } from 'react'
//INTIAL STATE
const intialstate={
    count:0
}

 //Reducer function

 function reducer(state,action){
    switch(action.type){
        case'increment':
            return {count:state.count+1}
        case'decrement':
            return{count:state.count-1}
        default:
            throw new Error()
    }
}

const CounterReducer = () => {

    const [state,dispatch]=useReducer(reducer,intialstate)
  return (
    <div>
        <h1>Counter using useReducer</h1>
        <p>Count:{state.count}</p>
        <button onClick={()=>dispatch({type:'increment'})} >+</button>
        <button onClick={()=>dispatch({type:'decrement'})}>-</button>
    </div>
  )
}

export default CounterReducer