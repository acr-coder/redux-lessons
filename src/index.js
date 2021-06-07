import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'

// //console.log(store)
// store.subscribe(()=>console.log("Store değişti ",store.getState()))
// //console.log(store.getState())

// store.dispatch({type:"EKLE", payload:5})
// store.dispatch({type:"EKLE", payload:10})

// //console.log(store.getState())

// store.dispatch({type:"CIKART", payload:4})
// //console.log(store.getState())

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


