import { useForm } from "react-hook-form"
import { UseTaks } from "../context/TaksContext"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react"
function TaksFormaPage() {

    const { register, handleSubmit, setValue } = useForm()

    const { createTaks, getByTaks, updateTaks } = UseTaks()


    const navigate = useNavigate()
    const params = useParams()
    console.log("paramentro", params)

    useEffect(() => {
        async function loadtaks() {
            if (params.id) {
                const datos = await getByTaks(params.id)
                console.log("datos", datos)
                Object.entries(datos).forEach(([key, value]) => {
                    setValue(key, value);
                });
            }
        }
        loadtaks()
    }, [])

    const onSubmit = handleSubmit((data) => {
        if (params.id) {
            updateTaks(data)
        } else {

            console.log("datos a enviar", data)
            createTaks(data)
        }
        navigate("/taks")
    })
    return (
        <div className=" my-7 flex items-center justify-center">


            <form onSubmit={onSubmit}>


                <input type="text" placeholder="title" autoFocus {...register("title")} className=" mb-3 block w-full rounded-md border border-gray-300 px-3.5 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-none  focus:ring-2 focus:ring-blue-200  focus:border-blue-500 sm:text-sm sm:leading-6"
                />
                <textarea rows="3" placeholder="description"{...register("description")} className="block w-full rounded-md border border-gray-300 px-3.5 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-none  focus:ring-2 focus:ring-blue-200  focus:border-blue-500 sm:text-sm sm:leading-6"
                ></textarea>
                <button type="submit" className=" md:flex w-full justify-center py-2 px-4 mt-10 border border-transparent text-md font-medium rounded-md text-white bg-slate-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                    Log in
                </button>
            </form>

        </div>
    )
}

export default TaksFormaPage