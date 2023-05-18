import { Link } from "react-router-dom";


const Registration = () => {
    return (
        <>
            <div className="mt-10">
                <h2 className="text-4xl font-bold text-center text-sky-800">
                    Registration
                </h2>
                <p className="text-2xl font-bold text-center mt-2">
                    Please Registration!
                </p>
            </div>
            <div className="font-bold mb-10">
                <div className="hero max-w-6xl mx-auto">
                    <div className="hero-content">
                        <div className="text-center lg:text-left">
                            <img src="https://img.freepik.com/premium-vector/illustration-create-account-flat-design_9206-2974.jpg?w=740" alt="" />
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">
                                            Your Name
                                        </span>
                                    </label>
                                    <input type="text" placeholder="Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">
                                            Your Email
                                        </span>
                                    </label>
                                    <input type="email" placeholder="Email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">
                                            Your Email
                                        </span>
                                    </label>
                                    <input type="email" placeholder="Email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">
                                            Your Photo URL
                                        </span>
                                    </label>
                                    <input type="text" placeholder="Photo URL" className="input input-bordered" />
                                    <label className="label">
                                        <small className="text-neutral-700">
                                            Already Have an Account?
                                            <br />
                                            Please<Link className="font-extrabold text-sky-500" to='/login'> Login</Link>
                                        </small>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-sky-700">
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

export default Registration;