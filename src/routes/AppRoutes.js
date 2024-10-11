// src/routes/AppRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../Authentification/Login';  // Import the Login component

const AppRoutes = () => {
  return (
    <Routes>
      {/* Root ("/") route */}
      <Route path="/" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
