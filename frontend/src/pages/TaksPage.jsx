import { useAuth } from "../context/AuthContext"

function TaksPage() {

    const { user } = useAuth()
    console.log("user", user)
    return (
        <div>TaksPage</div>
    )
}

export default TaksPage