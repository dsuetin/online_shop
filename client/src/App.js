import logo from './logo.svg';
import './App.css';
import React from 'react'
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouther";
function App() {
  return (
    <BrowserRouter>
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.js</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}
        <AppRouter />
      {/*WORKIN lll*/}
    </BrowserRouter>
  );
}

export default App;
