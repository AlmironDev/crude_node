import { createContext, useContext, useState } from "react";
import { registerRequest } from "../api/auth"
export const AuthContext = createContext()

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context)
        throw new Error("useAuth must be used within an authoprovider")

    return context
}
// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isAunthenticated, setisAunthenticated] = useState(null)
    const [errors, setErrors] = useState([])

    const signup = async (user) => {
        try {
            const res = await registerRequest(user)
            console.log(res.data)
            setUser(res.data)
            setisAunthenticated(true)
        } catch (error) {
            console.log(error.response.data)
            setErrors(error.response.data)


        }

    }

    return (
        <AuthContext.Provider value={{ signup, user, isAunthenticated, errors }}>
            {children}
        </AuthContext.Provider>
    )
}