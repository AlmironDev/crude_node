import { useEffect } from "react"
import { useAuth } from "../context/AuthContext"
import { UseTaks } from "../context/TaksContext"
import TaksCard from "../components/TaksCard"

function TaksPage() {

    const { taks, getTaks } = UseTaks()

    // const [taks, setTaks] = useState([]);
    // const getTaks = async () => {
    //     try {
    //         const res = await taksRequest()
    //         console.log("res", res)
    //         setTaks(res.data)
    //     } catch (error) {
    //         console.log("error", error)
    //     }
    // }

    useEffect(() => {
        getTaks()
    }, [])
    if (taks.length === 0) return (<h1>No hay taks</h1>)


    return (
        <div className="grid grid-cols-4 gap-2">
            {taks.map(dato => (

                <TaksCard taks={dato} key={dato._id} />

            ))
            }
        </div>
    )
}

export default TaksPage