import { Link } from "react-router-dom";
import { UseTaks } from "../context/TaksContext";

export default function TaksCard({ taks }) {
    // const { deleteTask } = useTasks();

    const { deleteTaks } = UseTaks()

    return (
        <div>
            <header className="flex justify-between">
                <h1 className="text-2xl font-bold">{taks.title}</h1>
                <div className="flex gap-x-2 items-center">
                    <button onClick={() => deleteTaks(taks._id)}>Delete</button>
                    <Link to={`/taks/${taks._id}`}>Edit</Link>
                </div>
            </header>
            <p className="text-slate-300">{taks.description}</p>
            {/* format date */}
            <p>
                {taks.date &&
                    new Date(taks.date).toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}
            </p>
        </div>
    );
}