import React from 'react'
import { useAuth } from '../Context/AuthContext'
import { Navigate } from 'react-router-dom'
import { Children } from 'react'

function RequireAuth() {
    const auth = useAuth()

    if (!auth.user)
    {
        return <Navigate to='/login' />
    }
    return 
}

export default RequireAuth
