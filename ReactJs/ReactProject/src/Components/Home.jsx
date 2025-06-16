import { useNavigate } from 'react-router-dom'
import { useAuth } from '../Context/AuthContext'

export default function Home() {
  const navigate = useNavigate()
  const auth = useAuth()
  const handleLogout = () => {
    auth.logout()
    navigate('/login')
  }
  return (
    <div>
      Welcome {auth.user}.<button onClick={handleLogout}>Logout</button>
    </div>
  )
}