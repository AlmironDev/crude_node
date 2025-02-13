import { Link } from "react-router-dom";

import { useAuth } from "../context/AuthContext";
// import { ButtonLink } from "./ui/ButtonLink";

export function Navbar() {
    const { isAunthenticated, logout, user } = useAuth();
    console.log("isAuthenticated", isAunthenticated)

    return (
        <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg">
            <h1 className="text-2xl font-bold">
                <Link to={isAunthenticated ? "/taks" : "/"}>Task Manager</Link>
            </h1>
            <ul className="flex gap-x-2">
                {isAunthenticated ? (
                    <>
                        <li className="mr-10">
                            Welcome {user.username}
                        </li>
                        <li>
                            <Link to="/add-taks">Add Task</Link>
                        </li>
                        <li>
                            <Link to="/" onClick={() => logout()}>
                                Logout
                            </Link>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
}