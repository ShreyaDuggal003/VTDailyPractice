
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

function ProtectedRoute ({ children })  {
  const { auth } = useAuth();
  return auth ? children : <Navigate to="/login" />;
};

export default ProtectedRoute

