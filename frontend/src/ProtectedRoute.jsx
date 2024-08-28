import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "./context/AuthContext"


function ProtectedRoute() {

    const { isAunthenticated, loading } = useAuth()
    console.log("verificacion ", loading, isAunthenticated)

    if (!isAunthenticated && !loading) return <Navigate to="/login" replace />

    return <Outlet />

}

export default ProtectedRoute