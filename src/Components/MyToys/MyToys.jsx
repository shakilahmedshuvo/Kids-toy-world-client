import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import SingleMyToys from "./SingleMyToys";
import useTitle from "../Hooks/useTitle";

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setToys] = useState([]);
    useTitle('My Toys');

    const url = `https://kids-toy-world-server.vercel.app/allToys?email=${user?.email}`;

    // load the data
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    }, [url]);

    // delete function
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`https://kids-toy-world-server.vercel.app/toyDelete/${id}`, {
                        method: 'DELETE',
                    })
                        .then(res => res.json())
                        .then(data => {
                            // console.log(data);
                            if (data.deletedCount > 0) {
                                Swal.fire(
                                    'Deleted!',
                                    'Your file has been deleted.',
                                    'success'
                                )
                                const remaining = myToys.filter(toy => toy._id !== id);
                                setToys(remaining);
                            }
                        })
                }
            })
    }

    return (
        <div className="max-w-6xl mx-auto font-bold">
            <h2
                className="font-bold text-5xl text-center m-5 pb-4 text-sky-500">
                My Toys
            </h2>
            <p
                className="text-center font-bold text-2xl text-slate-500 pb-5">
                Update Your Toy's
            </p>
            <p
                className="text-center font-bold text-1xl text-slate-500 pb-5">
                {user?.email}
            </p>
            <table
                className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th
                            className="text-center">
                            Delete The Toy
                        </th>
                        <th
                            className="text-center">
                            PICTURES
                        </th>
                        <th>
                            TOY NAME
                        </th>
                        <th
                            className="text-center">
                            SUB CATEGORY
                        </th>
                        <th
                            className="text-center">
                            QUANTITY
                        </th>
                        <th
                            className="text-center">
                            PRICE
                        </th>
                        <th
                            className="text-center">
                            Update The Toy
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {/* map section start */}
                    {
                        myToys.map(singleToys => <SingleMyToys
                            key={singleToys._id}
                            singleToys={singleToys}
                            handleDelete={handleDelete}
                        ></SingleMyToys>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyToys;