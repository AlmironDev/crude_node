import { Routes, Route, BrowserRouter } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import { AuthProvider } from "./context/AuthContext"
import TaksPage from './pages/TaksPage'
import ProfilePage from './pages/ProfilePage'
import ProtectedRoute from './ProtectedRoute'
import TaksFormaPage from './pages/TaksFormaPage'
import { TaksProvider } from './context/TaksContext'
import { Navbar } from './components/Navbar'
import TaskDetailsPage from './pages/TaksDetailPage'

export default function App() {
  return (
    <AuthProvider>
      <TaksProvider>
        <BrowserRouter >
          <main className='container mx-auto px-10'>

            <Navbar />
            <Routes>
              {/* Rutas públicas */}
              <Route path='/' element={<h1>Index</h1>} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/register' element={<RegisterPage />} />

              {/* Rutas protegidas */}
              <Route element={<ProtectedRoute />}>
                <Route path='/taks' element={<TaksPage />} />
                <Route path='/add-taks' element={<TaksFormaPage />} />
                {/* <Route path='/taks/:id' element={<TaksFormaPage />} /> */}

                <Route path="/taks/:taksId" element={<TaskDetailsPage />} />
                <Route path='/profile' element={<ProfilePage />} />
              </Route>
            </Routes>
          </main>
        </BrowserRouter>
      </TaksProvider>
    </AuthProvider>
  )
}
