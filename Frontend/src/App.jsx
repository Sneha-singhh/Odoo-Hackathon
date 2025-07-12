import { useState } from 'react'
import './App.css'
import Login from './pages/Login'
import Logout from './pages/Logout'
import Dashboard from './pages/Dashboard'
import Signup from './pages/Signup'
import ProtectedRoute from './components/ProtectedRoutes'
import {Routes,Route, Navigate} from "react-router-dom"
import LandingPage from './pages/landingPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/dashboard' element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      } />
      <Route path='/logout' element={<Logout />} />
    </Routes>
    </>
  )
}

export default App
