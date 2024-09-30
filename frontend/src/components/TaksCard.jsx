import { Link } from "react-router-dom";
import { UseTaks } from "../context/TaksContext";
import { motion } from "framer-motion";  // Importar framer-motion
import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
dayjs.extend(utc)

export default function TaksCard({ taks }) {
    // const { deleteTask } = useTasks();

    const { deleteTaks } = UseTaks()

    return (
        <div className="bg-slate-500 p-3">
            <header className="flex justify-between">
                <motion.h1
                    className="text-2xl font-bold"
                    layoutId={`taks-title-${taks._id}`} // Mantener el layoutId
                    initial={{ opacity: 1, x: 0 }}     // Comienza en su posición original
                    // Permanece por 2 segundos antes de moverse
                    transition={{
                        duration: 2,  // La animación completa dura 2 segundos
                        times: [0, 0.2],  // El 80% del tiempo, se mantiene en su posición
                    }}
                >
                    {taks.title}
                </motion.h1>
                <div className="flex gap-x-2 items-center">
                    <button className="bg-red-600 p-2 rounded-xl" onClick={() => deleteTaks(taks._id)}>Delete</button>
                    <Link className="bg-sky-500 p-2 rounded-xl" to={`/taks/${taks._id}`}>Edit</Link>
                </div>
            </header>
            <p className="text-slate-300">{taks.description}</p>
            {/* format date */}
            <p>{dayjs(taks.date).utc().format("DD/MM/YYYY")}</p>
            {/* <p>
                {taks.date &&
                    new Date(taks.date).toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}
            </p> */}
        </div>
    );
}