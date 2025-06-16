import { NavLink } from 'react-router-dom'
import { useAuth } from '../Context/AuthContext'

export const Navbar = () => {
  const auth = useAuth()
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'none' : 'underline'
    }
  }

  return (
    <nav className='primary-nav'>
      <NavLink to='/' style={navLinkStyles}>
        Home
      </NavLink>
     
      {!auth.user && (
        <NavLink to='/login' style={navLinkStyles}>
          Login
        </NavLink>
      )}
    </nav>
  )
}