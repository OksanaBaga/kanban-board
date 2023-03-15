import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';

import './App.css';
import Layout from './components/Layout/Layout';
import BoardPage from './pages/BoardPage';
import { AppProvider } from './context/AppContext';
import CreateTaskPage from './pages/CreateTaskPage';
import EditTaskPage from './pages/EditTaskPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <>
      <header>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </header>
      <main>
        <CssBaseline />

        <BrowserRouter>
          <AppProvider>
            <Layout>
              <Routes>
                <Route index path="/" element={<BoardPage />} />
                <Route path="/task/:taskId/edit" element={<EditTaskPage />} />
                <Route path="/task/create" element={<CreateTaskPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Layout>
          </AppProvider>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
