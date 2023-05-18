import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { FcSearch } from "react-icons/fc";

const NavBar = () => {

    const { user, userLogOut } = useContext(AuthContext);

    // handle log out function
    const logoutHandle = () => {
        userLogOut()
            .then(result => {

            })
            .catch(error => {
                console.log(error);
            })
    }

    const navBarItems =
        <>
            <li>
                <Link
                    to="/">
                    Home
                </Link>
            </li>
            <li>
                <Link to="/blog">
                    All Toys
                </Link>
            </li>
            <li>
                <Link to="/blog">
                    Blog
                </Link>
            </li>
            {
                user ?
                    <>
                        <li>
                            <Link to="/blog">
                                My Toys
                            </Link>
                        </li>
                        <li>
                            <Link to="/blog">
                                Add A Toy
                            </Link>
                        </li>
                        <img
                            className="w-10 h-10 rounded"
                            src=
                            {
                                user?.photoURL
                            }
                            alt="" />
                    </>
                    :
                    <></>
            }
        </>
    return (
        <div className="bg-sky-500 font-bold">
            <div className="navbar mx-auto  max-w-6xl text-white">
                <div className="navbar-start">
                    <a className="btn btn-ghost normal-case text-xl font-bold">
                        Kids Toy Client
                    </a>
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52">
                            {navBarItems}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case text-xl">
                        <img src="" alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navBarItems}
                    </ul>
                </div>
                <div className="navbar-end font-bold">  
                    {
                        user ?
                            <>
                                <button
                                    onClick={userLogOut}
                                    className="btn btn-info font-bold bg-sky-500 text-white">
                                    Logout
                                </button>
                            </>
                            :
                            <>
                                <button
                                    className="btn btn-info font-bold bg-sky-500 text-white">
                                    <Link
                                        to="/login">
                                        Login
                                    </Link>
                                </button>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;