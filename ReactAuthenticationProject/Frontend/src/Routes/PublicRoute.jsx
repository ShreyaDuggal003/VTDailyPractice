import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

function PublicRoute({ children }) {
  const { auth } = useAuth();
  return auth ? <Navigate to="/users" /> : children;
}

export default PublicRoute