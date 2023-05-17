import { Link } from "react-router-dom";

const Login = () => {
    return (
        <>
            <div className="mt-10">
                <h2 className="text-4xl font-bold text-center">
                    Login
                </h2>
                <p className="text-2xl font-bold text-center mt-2">
                    Please Login!
                </p>
            </div>
            <div className="font-bold">
                <div className="hero max-w-6xl mx-auto">
                    <div className="hero-content">
                        <div className="text-center lg:text-left">
                            <img src="https://img.freepik.com/free-vector/global-data-security-personal-data-security-cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection_1150-37373.jpg?w=740&t=st=1684351301~exp=1684351901~hmac=1360b442aeae7ada66feaaf7e313f926b3b3d6af866b6248fa40fe11ee76a7ce" alt="" />
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">
                                            Email
                                        </span>
                                    </label>
                                    <input type="text" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">
                                            Password
                                        </span>
                                    </label>
                                    <input type="password" placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <small className="text-neutral-700">
                                            Don't Have an Account? New to Kids Toy World?
                                            <br />
                                            Please<Link className="font-extrabold text-sky-500" to='/registration'> Registration</Link>
                                        </small>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">
                                        Login
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;