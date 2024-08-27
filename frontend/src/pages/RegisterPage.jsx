import { useForm } from "react-hook-form"

import { useAuth } from "../context/AuthContext"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function RegisterPage() {

    const { register, handleSubmit, formState: {
        errors
    } } = useForm()
    const { signup, user, isAunthenticated, errors: RegisterErrors } = useAuth()
    const navigate = useNavigate()
    useEffect(() => {
        if (isAunthenticated) navigate("/taks")
    }, [isAunthenticated])
    console.log("user", user)
    console.log("RegisterErrors", RegisterErrors)
    const onSubmit =
        handleSubmit(async (values) => {
            signup(values)
        })
    return (
        <>
            <div className=" bg-zinc-900 max-w-md  p-10 rounded-md">
                {
                    RegisterErrors?.map((error, i) => (
                        <div key={i} className="text-red-600 ">{error}</div>
                    ))
                }

                <form onSubmit={onSubmit} className="gap-y-2" >
                    <input type="text"
                        {...register("username", { required: true })}
                        className="block w-full rounded-md border border-gray-300 px-3.5 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-none  focus:ring-2 focus:ring-blue-200  focus:border-blue-500 sm:text-sm sm:leading-6" placeholder="John Denilson" />

                    {errors.username && <p className="text-red-600">Username is required</p>}
                    <input
                        type="email"
                        {...register("email", { required: true })}

                        className="block w-full rounded-md border border-gray-300 px-3.5 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 sm:text-sm sm:leading-6"
                        placeholder="john.doe@company.com"
                        required
                    />
                    {errors.email && <p className="text-red-600">email is required</p>}
                    <input
                        type="password"
                        {...register("password", { required: true })}

                        className="block w-full rounded-md border border-gray-300 px-3.5 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-none  focus:ring-2 focus:ring-blue-200  focus:border-blue-500 sm:text-sm sm:leading-6"
                        placeholder="•••••••••"
                        required
                    />
                    {errors.password && <p className="text-red-600">password is required</p>}
                    <button type="submit" className="hidden md:flex w-full justify-center py-2 px-4 mt-10 border border-transparent text-md font-medium rounded-md text-white bg-slate-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                        Log in
                    </button>
                </form >


            </div >


            {/* <form className="w-80 mx-auto" action="/login/check" method="POST">
                <div className="relative flex grow w-full md:w-auto mt-8 md:mt-24 md:justify-center md:gap-x-4">

                    <section className="flex-1 md:flex-none mx-4 md:mx-0 md:p-8 md:bg-white md:rounded-lg">
                        <header className="text-black mx-2 md:m-0">
                            <h1 className="text-2xl md:text-3xl font-bold">Register</h1>
                        </header>

                        <div className="w-full mt-4">
                            <div className="mt-2 py-3 px-2.5 md:p-0 bg-white rounded-md w-full">
                                <label htmlFor="password" className="text-md font-medium leading-6 text-gray-700">
                                    Nombre
                                </label>
                                <input
                                    type="text"
                                    className="block w-full rounded-md border border-gray-300 px-3.5 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-none  focus:ring-2 focus:ring-blue-200  focus:border-blue-500 sm:text-sm sm:leading-6"
                                    placeholder="John Denilson"
                                    required
                                />

                            </div>
                            <div className="py-3 px-2.5 md:p-0 bg-white rounded-md w-full">
                                <label htmlFor="email" className="text-md font-medium leading-6 text-gray-700">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    className="block w-full rounded-md border border-gray-300 px-3.5 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 sm:text-sm sm:leading-6"
                                    placeholder="john.doe@company.com"
                                    required
                                />
                            </div>

                            <div className="mt-2 py-3 px-2.5 md:p-0 bg-white rounded-md w-full">
                                <label htmlFor="password" className="text-md font-medium leading-6 text-gray-700">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="block w-full rounded-md border border-gray-300 px-3.5 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-none  focus:ring-2 focus:ring-blue-200  focus:border-blue-500 sm:text-sm sm:leading-6"
                                    placeholder="•••••••••"
                                    required
                                />
                                <p className="text-gray-400 text-sm leading-6 mt-1">
                                    Password minimum is 6 characters
                                </p>
                            </div>




                            <button type="submit" className="hidden md:flex w-full justify-center py-2 px-4 mt-10 border border-transparent text-md font-medium rounded-md text-white bg-slate-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                                Log in
                            </button>
                        </div>
                    </section>

                </div>
            </form> */}

        </>

    )
}

export default RegisterPage