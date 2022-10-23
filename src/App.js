import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import Repair from './pages/Repair.jsx';
import Analytics from './pages/Analytics.jsx';
import Comment from './pages/Comment.jsx';
import Servicing from './pages/Servicing.jsx';
import Vehicles from './pages/Vehicles';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/repair" element={<Repair />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/servicing" element={<Servicing />} />
          <Route path="/vehicles" element={<Vehicles />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;