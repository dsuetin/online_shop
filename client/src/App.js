import React from 'react'
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouther";
import NavBar from "./components/NavBar";
function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <AppRouter />
    </BrowserRouter>

    // <div>
    //     WORKIN lll
    // </div>
  );
};

export default App;
