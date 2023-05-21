import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import useTitle from "../Hooks/useTitle";

const Login = () => {
    const { userLogIn, auth } = useContext(AuthContext);
    // use location hook
    const navigate = useNavigate();
    const location = useLocation();
    useTitle('Login')
    const from = location.state?.from?.pathname || '/'

    const [error, setError] = useState('')

    const handleLogin = (event) => {
        // stop reloading
        event.preventDefault();
        // get the info form the field
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // user log in function
        userLogIn(email, password).then(result => {
            const logIn = result.user;
            navigate(from, { replace: true })
            // show the toast
            toast.success('Log in Successful')

        })
            .catch(error => {
                toast.error('Wrong Password')
                console.log(error);
            })
        // reset the from
        form.reset()
    }

    // google login
    const handleGoogleSignIn = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const google = result.user;
                // console.log(google);
                navigate(from, { replace: true })
                toast.success('Your Google Login Successful')
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <>
            <div className="mt-10" data-aos="zoom-out">
                <h2 className="text-4xl font-bold text-center text-sky-800">
                    Login
                </h2>
                <p className="text-2xl font-bold text-center mt-2">
                    Please Login!
                </p>
            </div>
            <div className="font-bold mb-10"  data-aos="zoom-out">
                <div className="hero max-w-7xl mx-auto">
                    <div className="hero-content">
                        <div className="text-center lg:text-left">
                            <img src="https://img.freepik.com/free-vector/global-data-security-personal-data-security-cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection_1150-37373.jpg?w=740&t=st=1684351301~exp=1684351901~hmac=1360b442aeae7ada66feaaf7e313f926b3b3d6af866b6248fa40fe11ee76a7ce" alt="" />
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <h1 className="text-center text-3xl p-5 text-sky-500">
                                    Kids Toy World
                                </h1>
                                <small className="font-bold text-center text-slate-600">
                                    DISCOVER SOMETHING MORE EVERY DAY
                                </small>
                                <hr className="border-b border-solid border-4" />
                                {/* login form start */}
                                <form onSubmit={handleLogin}>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">
                                                Your Email
                                            </span>
                                        </label>
                                        <input name="email" type="text" placeholder="Email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">
                                                Your Password
                                            </span>
                                        </label>
                                        <input name="password" type="password" placeholder="Password" className="input input-bordered" required />
                                        {/* sign in with google */}
                                        <div className="mt-3 mb-2">
                                            <h5 className="text-center">
                                                Login With Google
                                            </h5>
                                            <div
                                                onClick={handleGoogleSignIn}
                                                className='flex justify-center mx-auto w-[50%] pt-5'>
                                                <div className="w-full justify-center flex">
                                                    <FcGoogle
                                                        className="text-3xl"
                                                    ></FcGoogle>
                                                </div>
                                                <p
                                                    className='text-slate-500 font-bold w-full text-xl'>
                                                    Google
                                                </p>
                                            </div>
                                        </div>
                                        <label className="label mt-2">
                                            <small className="text-neutral-700">
                                                Don't Have an Account? New to Kids Toy World?
                                                <br />
                                                Please<Link className
                                                    ="font-extrabold text-sky-500" to='/registration'> Registration</Link>
                                            </small>
                                        </label>
                                    </div>
                                    <div className="form-control mt-6" type="submit">
                                        <button className="btn bg-sky-700" >
                                            Login
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Login;