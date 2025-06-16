import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import { Route} from 'react-router-dom'
import SignUp from './Components/SignUpPage.jsx'
import UserLogin from './Components/LoginPage.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
     <Route path= '/' element={<UserLogin/>} />
      <Route path= '/signup' element={<SignUp/>}/>
      <Route path= '/login' element={<UserLogin/>}/>
    </>
   
     
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
