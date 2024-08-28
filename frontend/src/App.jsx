import { Routes, Route, BrowserRouter } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import { AuthProvider } from "./context/AuthContext"
import TaksPage from './pages/TaksPage'
import ProfilePage from './pages/ProfilePage'
import ProtectedRoute from './ProtectedRoute'

export default function App() {
  return (

    <AuthProvider>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<h1 >index</h1>} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />

          {/* Rutas protegidas */}
          <Route element={< ProtectedRoute />}>

            <Route path='/taks' element={<TaksPage />} />
            <Route path='/add-taks' element={<h1 >add-taks</h1>} />
            <Route path='/taks/:id' element={<h1> taks/:id  </h1>} />
            <Route path='/profile' element={<ProfilePage />} />
          </Route>
        </Routes>


      </BrowserRouter>
    </AuthProvider>
  )
}