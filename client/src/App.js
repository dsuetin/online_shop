import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouther from './components/AppRouther';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <AppRouther />
    </Router>
  );
}

export default App;
