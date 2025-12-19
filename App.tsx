import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { Clients } from './pages/Clients';
import { Products } from './pages/Products';
import { Quotes } from './pages/Quotes';
import { QuoteBuilder } from './pages/QuoteBuilder';
import { UsersPage } from './pages/Users';
import { StorageService } from './services/storageService';

// Auth Guard Wrapper
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const user = StorageService.getSession();
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return <Layout>{children}</Layout>;
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        <Route path="/" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        
        <Route path="/clients" element={
          <ProtectedRoute>
            <Clients />
          </ProtectedRoute>
        } />

        <Route path="/products" element={
          <ProtectedRoute>
            <Products />
          </ProtectedRoute>
        } />

        <Route path="/quotes" element={
          <ProtectedRoute>
            <Quotes />
          </ProtectedRoute>
        } />

        <Route path="/new-quote" element={
          <ProtectedRoute>
            <QuoteBuilder />
          </ProtectedRoute>
        } />

        <Route path="/users" element={
          <ProtectedRoute>
            <UsersPage />
          </ProtectedRoute>
        } />

      </Routes>
    </Router>
  );
};

export default App;