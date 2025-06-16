import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home.jsx'
import { AuthProvider } from './Context/AuthContext.jsx'
import Login from './Components/Login.jsx'
import { Navbar } from './Components/NavBar.jsx'
import RequireAuth from './Components/RequireAuth.jsx'
import './index.css'

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/login' element={<Login />} />
        <Route
          path='/'
          element={
            <RequireAuth>
              <Home />
             </RequireAuth>
          }
        />
        
      </Routes>
    </AuthProvider>
  )
}

export default App
