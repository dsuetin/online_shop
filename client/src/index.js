// const express = require('express')
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// const app = express()
// const path = require('path')

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <App />
   </React.StrictMode>
);

// app.use(express.static(__dirname)); //here is important thing - no static directory, because all static :)
//
// app.get("/*", function(req, res) {
//     res.sendFile(path.join(__dirname, "index.html"));
// });
//

reportWebVitals();
