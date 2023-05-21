import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';
import useTitle from "../Hooks/useTitle";

const AddToy = () => {
    const { user } = useContext(AuthContext);
    useTitle('AddToy')

    // handleBookServices function
    const handleBookService = event => {
        // stop the form reload
        event.preventDefault();

        // get the value form the filed
        const form = event.target;
        const name = form.name.value;
        const sellerName = form.sellerName.value;
        const email = user?.email;
        const category = form.category.value;
        const quantity = form.quantity.value;
        const picture = form.picture.value;
        const rating = form.rating.value;
        const price = form.price.value;
        const description = form.description.value;

        const allData = {
            picture,
            name,
            sellerName,
            email,
            category,
            price,
            rating,
            quantity,
            description
        };

        // console.log(allInfo);

        // data post to the backend server( mongodb )
        fetch('https://kids-toy-world-server.vercel.app/addToy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(allData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast.success('Your Toy Added Successfully')
                    form.reset();
                }
            })
    }
    return (
        <div className="max-w-5xl mx-auto font-bold mb-10" data-aos="zoom-out">
            <h2 className="text-4xl font-bold text-center text-sky-500 my-5">
                Add To Your Toy
            </h2>
            <p className="text-center font-bold text-slate-500">
                {user?.displayName}
            </p>
            <p className="text-center m-5 font-bold text-slate-500">
                Add a Unique Toy
            </p>
            <hr className="border-b max-w-2xl mx-auto m-5 border-solid border-4" />
            {/* form section start */}
            <form onSubmit={handleBookService}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span
                                className="label-text">
                                *Toy Name
                            </span>
                        </label>
                        <input type="text" name="name" className="input input-bordered" />
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span
                                className="label-text">
                                *Toy Photo
                            </span>
                        </label>
                        <input type="text" name="picture" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span
                                className="label-text">
                                *Sub Category Choose One Item: Racing Car/Truck/Mini Fire Truck
                            </span>
                        </label>
                        <input type="text" name="category" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span
                                className="label-text">
                                *Seller Name
                            </span>
                        </label>
                        <input type="name" name="sellerName" className="input input-bordered" />
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span
                                className="label-text">
                                *Seller Email
                            </span>
                        </label>
                        <input type="text" defaultValue={user?.email} className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span
                                className="label-text">
                                *Price$
                            </span>
                        </label>
                        <input type="text" name="price" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span
                                className="label-text">
                                *Available Quantity
                            </span>
                        </label>
                        <input type="text" name="quantity" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span
                                className="label-text">
                                *Ratings
                            </span>
                        </label>
                        <input type="text" name="rating" className="input input-bordered" />
                    </div>

                </div>

                <div className="form-control">
                    <label className="label">
                        <span
                            className="label-text">
                            *Details Description
                        </span>
                    </label>
                    <input type="text" name="description" className="input input-bordered" />
                </div>

                <div className="form-control mt-6">
                    <input className="btn border-0 bg-sky-500 btn-block" type="submit" value="Order Confirm" />
                </div>
            </form>
        </div>
    );
};

export default AddToy;