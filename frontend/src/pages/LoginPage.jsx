import { useForm } from "react-hook-form"

import { useAuth } from "../context/AuthContext"
import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"

function LoginPage() {

    const { register, handleSubmit, formState: {
        errors
    } } = useForm()

    const { signin, user, isAunthenticated, errors: LoginErrors } = useAuth()
    const navigate = useNavigate()
    useEffect(() => {
        if (isAunthenticated) navigate("/taks")
    }, [isAunthenticated])
    console.log("user", user)
    console.log("LoginErrors", LoginErrors)
    const onSubmit = handleSubmit(async (values) => {
        signin(values)

        console.log("Datos enviador", values)
    })
    return (
        <>
            <div className="relative flex grow w-full md:w-auto mt-8 md:mt-24 md:justify-center md:gap-x-4">
                <section className="flex-1 ">
                    <header className="text-black mx-2 md:m-0">
                        <h1 className="text-2xl md:text-3xl font-bold text-center mb-2">Login</h1>

                    </header>

                    <div className=" bg-zinc-200 max-w-md p-1 px-5 mx-2 rounded-md">
                        {
                            LoginErrors?.map((error, i) => (
                                <div key={i} className="text-red-600 ">{error}</div>
                            ))
                        }

                        <form onSubmit={onSubmit} className="gap-y-2 " >

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
                            <button type="submit" className=" md:flex w-full justify-center py-2 px-4 mt-10 border border-transparent text-md font-medium rounded-md text-white bg-slate-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                                Log in
                            </button>
                        </form >

                        <Link to="/register" className="font-medium text-zinc-600 focus:outline-none no-underline transition ease-in-out duration-150 text-sm leading-5 block ml-3 md:ml-0 mt-2">
                            registrate  ?
                        </Link>
                    </div >



                    {/* <form action="/login/check" method="POST">

                        <div className="w-full mt-4">
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

                            <a href="#" className="font-medium text-zinc-600 focus:outline-none no-underline transition ease-in-out duration-150 text-sm leading-5 block ml-3 md:ml-0 mt-2">
                                Forgot password?
                            </a>

                            <button type="submit" className="hidden md:flex w-full justify-center py-2 px-4 mt-10 border border-transparent text-md font-medium rounded-md text-white bg-slate-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                                Log in
                            </button>
                        </div>
                    </form> */}

                </section>

                {/* <section className="text-center pt-10 md:pt-0 m-auto md:m-0 hidden md:block">
                    <img className="rounded-lg" style={{ height: '524px' }} src="https://www.tailwindapp.com/dashboard/v2/images/onboarding/sign-up-finisher-ghostwriter.png" alt="The new Tailwind" />
                </section> */}
            </div>
        </>
    )
}

export default LoginPage