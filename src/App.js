import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';  // Import Router
import AppRoutes from './routes/AppRoutes';                 // Import AppRoutes

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
