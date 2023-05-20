import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../Hooks/useTitle";


const UpdateToys = () => {
    const { user } = useContext(AuthContext);
    useTitle('Update Toys')

    const data = useLoaderData();
    // console.log(data);
    const { _id, price, quantity, description } = data;

    // handleUpdate function
    const handleUpdate = event => {
        // stop the form reload
        event.preventDefault();

        // get the value form the filed
        const form = event.target;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const description = form.description.value;

        const allDataUpdate = {
            price,
            quantity,
            description
        };
        // console.log(allDataUpdate);

        // data post to the backend server( mongodb )
        fetch(`https://kids-toy-world-server.vercel.app/updateToys/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(allDataUpdate)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Successfully Update',
                        icon: 'success',
                        confirmButtonText: 'Updated'
                    })
                    form.reset();
                }
            })
    }

    return (
        <div className="max-w-5xl mx-auto font-bold mb-10">
            <h2 className="font-bold text-5xl text-center m-5 pb-4 text-sky-500">
                Update Your Toys
            </h2>
            <p className="text-center font-bold text-2xl text-slate-500 pb-5">
                Customized Your Toys Here
            </p>
            <p className="text-center font-bold text-1xl text-slate-500 pb-5">
                {user?.email}
            </p>
            {/* form section start */}
            <form onSubmit={handleUpdate}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span
                                className="label-text">
                                *Update Price$
                            </span>
                        </label>
                        <input type="text" name="price" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span
                                className="label-text">
                                *Update Available Quantity
                            </span>
                        </label>
                        <input type="text" name="quantity" className="input input-bordered" />
                    </div>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span
                            className="label-text">
                            *Update Details Description
                        </span>
                    </label>
                    <input type="text" name="description" className="input input-bordered" />
                </div>

                <div className="form-control mt-6">
                    <input className="btn border-0 bg-sky-500 btn-block" type="submit" value="Update Your Toy" />
                </div>
            </form>
        </div>
    );
};

export default UpdateToys;