import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="bg-emerald-700 text-white">
            <div className="navbar pt-5 max-w-6xl mx-auto">
                <div className="navbar-start">
                    <a className="btn btn-ghost normal-case text-xl font-bold">
                        Kids Toy Client
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-bold text-white">
                        <li>
                            <Link to='/'>
                                Home
                            </Link>
                        </li>
                        <li tabIndex={0}>
                            <a>
                                About
                            </a>
                        </li>
                        <li>
                            <Link to="/blog">
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link to="/login">
                                Login
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">
                        Get started
                    </a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;