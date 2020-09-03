import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions/index';

const styles = {
  fontSize: '70px'
}

function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1 style={styles}>Counter: {counter}</h1>
      {isLogged ? <h3>Encrypted Info</h3> : ''} 
      <div className="btn">
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      </div> 
    </div>
  );
}

export default App;
