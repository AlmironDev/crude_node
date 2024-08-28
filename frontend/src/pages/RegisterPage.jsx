import { useForm } from "react-hook-form"

import { useAuth } from "../context/AuthContext"
import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"

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


            <div className="min-h-full   flex flex-col justify-center sm:py-12">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-200 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-12 sm:rounded-3xl">
                    </div>
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-200 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                    </div>
                    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                        <div className="max-w-md mx-auto">
                            <div>
                                <h1 className="text-2xl font-semibold text-black">Login Form with Floating Labels</h1>
                            </div>
                            <form onSubmit={onSubmit}>

                                <div className="divide-y divide-gray-200">
                                    <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">

                                        <div className="relative">
                                            <input autoComplete="off" id="name" name="name" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address"
                                                {...register("username", { required: true })}
                                            />
                                            <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"

                                            >User Name</label>
                                        </div>

                                        <div className="relative">
                                            <input autoComplete="off" id="email" name="email" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address"
                                                {...register("email", { required: true })}
                                            />
                                            <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"

                                            >Email Address</label>
                                        </div>
                                        {errors.email && <p className="text-red-600">email is required</p>}

                                        <div className="relative">
                                            <input autoComplete="off" id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password"
                                                {...register("password", { required: true })}

                                            />
                                            <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"


                                            >Password</label>
                                        </div>
                                        {errors.password && <p className="text-red-600">password is required</p>}

                                        {
                                            RegisterErrors?.map((error, i) => (
                                                <div key={i} className="text-red-600 ">{error}</div>
                                            ))
                                        }
                                        <div className="relative">
                                            <button type="submit" className="bg-blue-500 text-white rounded-md px-2 py-1">Submit</button>
                                        </div>
                                        <Link to="/login" className="font-medium text-zinc-600 focus:outline-none no-underline transition ease-in-out duration-150 text-sm leading-5 block ml-3 md:ml-0 mt-2">
                                            si ya estas registrado logeate   ?
                                        </Link>


                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default RegisterPage