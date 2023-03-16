import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LinkForm from '../features/LinkForm/LinkForm';
import './App.css';

function App() {
  return (
    <div className="main__container">
      <Routes>
        <Route index element={<LinkForm />} />
      </Routes>
    </div>
  );
}

export default App;
