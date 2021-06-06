import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';

let initialState = {
  elma : 0,  
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case "EKLE":
      return { elma : state.elma + action.payload };
    case "CIKART":
      return { elma : state.elma - action.payload };
    default:
      return state
  }
}

const store = createStore(reducer)

//console.log(store)
store.subscribe(()=>console.log("Store değişti ",store.getState()))
//console.log(store.getState())

store.dispatch({type:"EKLE", payload:5})
store.dispatch({type:"EKLE", payload:10})

//console.log(store.getState())

store.dispatch({type:"CIKART", payload:4})
//console.log(store.getState())

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
