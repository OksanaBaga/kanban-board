import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <header>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </header>
      <main>
        <BrowserRouter>
          <Routes>
            <Route index path="/" element={<div />} />
            <Route path="/task/:taskId/edit" element={<div />} />
            <Route path="/task/create" element={<div />} />
            <Route path="*" element={<div />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
