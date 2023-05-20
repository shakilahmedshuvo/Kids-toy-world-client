import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { toast } from "react-hot-toast";


const ViewToy = () => {
    const { user } = useContext(AuthContext);
    const data = useLoaderData();
    console.log(data);
    const { picture, name, sellerName, category, price, rating, quantity, description } = data;

    const handleOrder = () => {
        toast.success('Order Confirm Thank You')
    }
    return (
        <div className="max-w-6xl mx-auto font-bold mb-10">
            <h2 className="font-bold text-4xl text-center m-3 pb-4 text-sky-500">
                My Toys More Information
            </h2>
            <p className="text-center font-bold text-1xl text-slate-500 pb-3">
                Toys is Beautiful Thing For Your Kids
            </p>
            {/* data section */}
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure>
                    <img
                        src={picture} alt="Album" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-extrabold text-sky-500">
                        Toy Name: {name}
                    </h2>
                    <p className=" text-slate-500">
                        Short Description: {description}
                    </p>
                    <p className=" text-slate-500">
                        Category: {category}
                    </p>
                    <p className=" text-slate-500">
                        Seller Name: {sellerName}
                    </p>
                    <p className=" text-slate-500">
                        Quantity: {quantity}
                    </p>
                    <p className=" text-slate-500">
                        Rating: {rating}
                    </p>
                    <p className=" text-slate-500">
                        Price: {price}$
                    </p>
                    <div className="card-actions justify-end">
                        <button
                            onClick={handleOrder}
                            className="btn btn-block bg-sky-500 border-0 font-bold">
                            Place The Order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewToy;