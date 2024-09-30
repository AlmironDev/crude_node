import React from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { UseTaks } from "../context/TaksContext";

export default function TaskDetailsPage() {
    const { taksId } = useParams();
    const { taks } = UseTaks();
    const task = taks.find((t) => t._id === taksId);

    if (!task) return <div>No Task Found</div>;

    return (
        <motion.div className="task-details">
            <motion.h1
                className="text-3xl font-bold"
                layoutId={`taks-title-${task._id}`}  // layoutId para mantener la transición del título
                initial={{ x: -100, opacity: 0 }}   // Aparece desde la izquierda
                animate={{ x: 0, opacity: 1 }}      // Se anima a su posición final (0)
                exit={{ x: 100, opacity: 0 }}       // Se mueve a la derecha y desaparece
                transition={{
                    duration: 0.5,  // Duración de la animación de entrada
                    exit: { duration: 2 },  // Duración más lenta al salir
                }}
            >
                {task.title}
            </motion.h1>
            <p>{task.description}</p>
            <p>{task.date}</p>
        </motion.div>
    );
}
