import { createContext, useContext, useEffect, useState } from "react";
import { registerRequest, loginRequest, verifyTokenRequest } from "../api/auth"
import Cookies from "js-cookie"
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
    const [loading, setloading] = useState(true)


    const signup = async (user) => {
        try {
            const res = await registerRequest(user)
            setisAunthenticated(true)
            setUser(res.data)

            console.log("respuesta res", res)
        } catch (error) {
            console.log(error.response.data)
            setErrors(error.response.data)
        }
    }
    const signin = async (user) => {
        try {
            const res = await loginRequest(user)

            setUser(res.data)
            setisAunthenticated(true)
        } catch (error) {

            if (Array.isArray(error.response.data)) {
                return setErrors(error.response.data)
            }
            setErrors([error.response.data.message])
        }
    }

    const logout = () => {
        Cookies.remove("token")
        setUser(null)
        setisAunthenticated(false)
        setloading(false)

    }
    useEffect(() => {
        if (errors.length > 0) {
            const timer = setTimeout(() => {
                setErrors([])
            }, 5000)
            return () => clearTimeout(timer)
        }
    }, [errors])

    useEffect(() => {
        const CheckLogin = async () => {
            const cookies = Cookies.get()
            if (!cookies.token) {
                setUser(null)
                setisAunthenticated(false)
                setloading(false)
            }

            try {
                const res = await verifyTokenRequest(cookies.token)

                if (!res.data) return setisAunthenticated(false)
                setisAunthenticated(true)
                setUser(res.data)

            } catch (error) {
                setUser(null)
                setisAunthenticated(false)
                console.log("Errror", error)
            }

        }; CheckLogin();
    }, [])




    return (
        <AuthContext.Provider value={{ signup, signin, logout, user, isAunthenticated, errors, loading }}>
            {children}
        </AuthContext.Provider>
    )
}