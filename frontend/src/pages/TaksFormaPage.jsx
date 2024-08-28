import { useForm } from "react-hook-form"
import { UseTaks } from "../context/TaksContext"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react"
import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
dayjs.extend(utc)

function TaksFormaPage() {

    const { register, handleSubmit, setValue, formState: { errors } } = useForm()

    const { createTaks, getByTaks, updateTaks } = UseTaks()


    const navigate = useNavigate()
    const params = useParams()
    console.log("paramentro", params)

    useEffect(() => {
        async function loadtaks() {
            if (params.id) {
                const datos = await getByTaks(params.id)
                console.log("datos", datos)
                setValue("title", datos.title);
                setValue("description", datos.description);
                setValue(
                    "date", dayjs(datos.date).utc().format("YYYY-MM-DD")
                );
                setValue("completed", datos.completed);
            }
        }
        loadtaks()
    }, [])

    const onSubmit = handleSubmit((data) => {
        if (params.id) {
            updateTaks(params.id, {
                ...data,
                date: dayjs.utc(data.date).format()
            })
        } else {
            console.log("datos enviados", data)

            createTaks({
                ...data,
                date: data.date ? dayjs.utc(data.date).format() : dayjs.utc().format()
            })
        }
        navigate("/taks")
    })
    return (
        <div className=" my-7 flex items-center justify-center">


            <form onSubmit={onSubmit}>
                <label htmlFor="title">Title</label>
                <input type="text" placeholder="title" autoFocus {...register("title")} className=" mb-3 block w-full rounded-md border border-gray-300 px-3.5 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-none  focus:ring-2 focus:ring-blue-200  focus:border-blue-500 sm:text-sm sm:leading-6"
                />
                {errors.title && (
                    <p className="text-red-500 text-xs italic">Please enter a title.</p>
                )}

                <label htmlFor="description">Description</label>
                <textarea rows="3" placeholder="description"{...register("description")} className="block w-full rounded-md border border-gray-300 px-3.5 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-none  focus:ring-2 focus:ring-blue-200  focus:border-blue-500 sm:text-sm sm:leading-6"
                ></textarea>

                <label htmlFor="date">Date</label>
                <input type="date" name="date" {...register("date")} className=" mb-3 block w-full rounded-md border border-gray-300 px-3.5 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-none  focus:ring-2 focus:ring-blue-200  focus:border-blue-500 sm:text-sm sm:leading-6" />
                <button type="submit" className=" md:flex w-full justify-center py-2 px-4 mt-10 border border-transparent text-md font-medium rounded-md text-white bg-slate-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                    Log in
                </button>
            </form>

        </div>
    )
}

export default TaksFormaPage