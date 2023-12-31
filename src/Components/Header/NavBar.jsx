import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

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
                <Link
                    to="/blog">
                    Blog
                </Link>
            </li>
            <li>
                <Link
                    to="/allToys">
                    All Toys
                </Link>
            </li>
            {
                user ?
                    <>
                        <li>
                            <Link
                                to="/myToys">
                                My Toys
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/addToy">
                                Add A Toy
                            </Link>
                        </li>
                        {/* tooltip show and the profile picture */}
                        <div
                            className="tooltip tooltip-warning tooltip-bottom" data-tip={user.displayName}>
                            <img
                                className="w-10 h-10 rounded-full"
                                src=
                                {
                                    user?.photoURL
                                }
                                alt="" />
                        </div>
                    </>
                    :
                    <></>
            }
        </>
    return (
        <div className="bg-sky-500 font-bold">
            <div className="navbar mx-auto  max-w-7xl text-white">
                <div className="navbar-start">
                    <img
                        className="w-[12%] rounded-xl mr-3"
                        src="https://img.freepik.com/free-vector/kids-zone-fun-play-banner-design_1017-33753.jpg?w=826&t=st=1684432416~exp=1684433016~hmac=a1b3560be2db226556845656f23fe53a4d397dac4f010a8deb4f96e28f304643"
                        alt="" />
                    <a
                        className="btn btn-ghost normal-case text-xl font-bold">
                        Kids Toy Client
                    </a>
                    <div className="dropdown">
                        <label
                            tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52">
                            {navBarItems}
                        </ul>
                    </div>
                    <Link
                        to="/"
                        className="btn btn-ghost normal-case text-xl">
                        <img src="" alt="" />
                    </Link>
                </div>
                <div
                    className="navbar-center hidden lg:flex" data-aos="zoom-in">
                    <ul
                        className="menu menu-horizontal px-1">
                        {navBarItems}
                    </ul>
                </div>
                <div
                    className="navbar-end font-bold">
                    {
                        user ?
                            <>
                                <button
                                    onClick={userLogOut}
                                    data-aos="zoom-out"
                                    className="btn btn-info font-bold bg-sky-500 text-white">
                                    Logout
                                </button>
                            </>
                            :
                            <>
                                <Link
                                    to="/login">
                                    <button
                                        className="btn btn-info font-bold bg-sky-500 text-white">
                                        Login
                                    </button>
                                </Link>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;