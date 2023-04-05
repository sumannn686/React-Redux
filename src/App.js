import React from 'react'
import './App.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {Inc, Dec} from "./states/reducer/index"
const App = () => {

  const currState =useSelector((state)=>state.number)
  const dispatch = useDispatch()
  return (

    
    <div className='App'>
      <h1>Exmaple of Redux</h1>
      <h2>{currState}</h2>
      <div>
        <button onClick={()=>dispatch(Inc())}>Increment</button>
         <button  onClick={()=>dispatch(Dec())}>Decrement</button>
      </div>
    </div>
  )
}

export default App