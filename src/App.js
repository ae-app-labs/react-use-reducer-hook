import { useReducer } from 'react';
import './App.css';

// An initial state
const initialState = {
  name : 'John Doe',
  age: 42
}

// Reducer to mutate the state
function reducer(state, action) {
  switch(action.type) {
    case "NAME":
      return { ...state, name: action.payload }
    case "AGE" :
      return { ...state, age: action.payload }
    default:
      return state
  }
}

export default function App() {
  /*
  With useReducer, inside the reducer function, the changes of state are handled, and now it focuses on user behavior woth dispatch. The "state" of usereducer is an object, with each property being an individual state. 
  */
  const [state, dispatch] = useReducer(reducer, initialState)

  return(<div className='App'>
      <br /> <br/>
      Name: {state.name} <br/>
      <input value={state.name} onChange={ (e) => {
        dispatch( { type: "NAME", payload: e.target.value })
      }}
      />

      <br />
      Name: {state.age} <br />
      <input value={state.age} onChange={ (e) => {
        dispatch( {type: "AGE", payload:e.target.value })
      }}
      />
  </div>)

}