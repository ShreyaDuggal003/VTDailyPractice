import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(

    <AuthProvider>
        <App />
    </AuthProvider>
);
