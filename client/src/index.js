import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserStore from './store/UserStore';
import DeviceStore from './store/DeviceStore';

// require('dotenv').config({ path: require('find-config')('.env') });

export const Context = createContext(null);
console.log('REACT_APP_API_URL', process.env.REACT_APP_API_URL);
console.log('REACT_APP_AUTH_API_URL', process.env.REACT_APP_AUTH_API_URL);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    user: new UserStore(),
    device: new DeviceStore(),
  }}
  >
    <App />
    {/* , */}
  </Context.Provider>,
);

reportWebVitals(console.log);
export default root;
