import { createContext, useContext, useState } from "react";
import { postTaksRequest, taksRequest, deleteTaksRequest, getTaksRequest, putTaksRequest } from "../api/taks";
export const TaksContext = createContext()
export const UseTaks = () => {
    const context = useContext(TaksContext)
    if (!context) {
        throw new Error("Use taks must be used withim a Taks Provider")
    }
    return context
}
export function TaksProvider({ children }) {


    const [taks, setTaks] = useState([])


    const getTaks = async () => {
        try {
            const res = await taksRequest()
            setTaks(res.data)
        } catch (error) {
            console.log("error", error)
        }
    }
    const createTaks = async (taks) => {
        const res = await postTaksRequest(taks)
        console.log("Creare nuevo taks", res)
    }
    const getByTaks = async (id) => {
        const res = await getTaksRequest(id)
        console.log("info de  taks", res)
        return res.data
    }
    const updateTaks = async (id, taks) => {
        console.log("datros llegado", id, taks)
        const res = await putTaksRequest(id, taks)
        console.log("update taks", res)
    }

    const deleteTaks = async (id) => {

        try {

            const res = await deleteTaksRequest(id)
            if (res.status === 204) setTaks(taks.filter(taks => taks._id != id))

        } catch (error) {

            console.log("error eliminar taks", error)
        }
    }
    return (
        <TaksContext.Provider value={{ taks, createTaks, getTaks, deleteTaks, updateTaks, getByTaks }}>
            {children}
        </TaksContext.Provider>
    )
}