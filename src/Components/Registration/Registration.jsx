import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { toast } from "react-hot-toast";


const Registration = () => {
    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState('')

    const handleRegister = (event) => {
        // stop reloading
        event.preventDefault();
        // get the info 
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photo = form.photo.value;
        // console.log(email, password, name, photo);

        if (password.length < 6) {
            setError('Enter a Strong Password or Enter More Than 8 Character Password')
            toast.error('The password is less than 6 characters')
        }
        else {
            toast.success('Successfully Register')
            setError('')
        }

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                // console.log(loggedUser);
            })
            .catch(error => {
                console.log(error);
            })
        // reset the from 
        form.reset();
    }


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
                                <h1 className="text-center text-3xl p-5 text-sky-500">
                                    Kids Toy World
                                </h1>
                                <small className="font-bold text-center text-slate-600">
                                    DISCOVER SOMETHING MORE EVERY DAY
                                </small>
                                <hr className="border-b border-solid border-4" />
                                {/* Registration form start */}
                                <form onSubmit={handleRegister}>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">
                                                Your Name
                                            </span>
                                        </label>
                                        <input name="name" type="text" placeholder="Name" className="input input-bordered" required />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">
                                                Your Email
                                            </span>
                                        </label>
                                        <input name="email" type="email" placeholder="Email" className="input input-bordered" required />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">
                                                Your Password
                                            </span>
                                        </label>
                                        <input name="password" type="password" placeholder="Password" className="input input-bordered" required />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">
                                                Your Photo URL
                                            </span>
                                        </label>
                                        <input name="photo" type="text" placeholder="Photo URL" className="input input-bordered" required />

                                        <label className="label">
                                            <small className="text-neutral-700">
                                                Already Have an Account?
                                                <br />
                                                Please<Link className="font-extrabold text-sky-500" to='/login'> Login</Link>
                                            </small>
                                        </label>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn bg-sky-700" type="submit">
                                            Registration
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Registration;