import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './features/auth/Login';
import Layout from './components/Layout';
import Dashboard from './features/dashboard/Dashboard';
import Patients from './features/patients/Patients';
import Analytics from './features/analytics/Analytics';
import ProtectedRoute from './components/ProtectedRoute';
import './styles/global.scss';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        <Route element={<ProtectedRoute />}>
          <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/patients" element={<Patients />} />
            <Route path="/analytics" element={<Analytics />} />
          </Route>
        </Route>
        
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
