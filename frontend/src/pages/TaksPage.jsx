import { useEffect } from "react"
import { useAuth } from "../context/AuthContext"
import { UseTaks } from "../context/TaksContext"
import TaksCard from "../components/TaksCard"

function TaksPage() {

    const { taks, getTaks } = UseTaks()



    useEffect(() => {
        getTaks()
    }, [])
    if (taks.length === 0) return (<h1>No hay taks</h1>)


    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
            {taks.map(dato => (

                <TaksCard taks={dato} key={dato._id} />

            ))
            }
        </div>
    )
}

export default TaksPage