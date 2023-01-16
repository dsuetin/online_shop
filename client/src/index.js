// const express = require('express')
import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import UserStore from "./store/UserStore";
import reportWebVitals from './reportWebVitals';
export const Context = createContext(null)

// const app = express()
// const path = require('path')
// дело было в этой хуйне
ReactDOM.render(
    <App />,
    document.getElementById('root')
);

// ReactDOM.render(
//     <Context.Provider value={{
//         user: new UserStore()
//     }}>
//         <App />
//     </Context.Provider>,
//
// )
//
//
//
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//      <App />
//    </React.StrictMode>
// );

// app.use(express.static(__dirname)); //here is important thing - no static directory, because all static :)
//
// app.get("/*", function(req, res) {
//     res.sendFile(path.join(__dirname, "index.html"));
// });
//

reportWebVitals();
