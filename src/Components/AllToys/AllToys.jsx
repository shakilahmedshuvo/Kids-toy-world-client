import { useLoaderData } from "react-router-dom";
import AllToysMap from "./AllToysMap";

const AllToys = () => {
    const data = useLoaderData();
    console.log(data);

    return (
        <div className="overflow-x-auto max-w-6xl mx-auto mb-14">
            <h2 className="font-bold text-5xl text-center m-5 pb-4 text-sky-500">
                Our All Toys
            </h2>
            <p className="text-center font-bold text-2xl text-slate-500 pb-5">
                Total Toys: {data.length}
            </p>
            <p className="text-center font-bold text-1xl text-slate-500 pb-5">
                Our Toys is Awesome. . .
            </p>
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            Toys Name
                        </th>
                        <th>
                            Toys Seller Name
                        </th>
                        <th>
                            Sub Category
                        </th>
                        <th className="text-center">
                            Product Price
                        </th>
                        <th className="text-center">
                            Available Quantities
                        </th>
                        <th className="text-center">
                            More Info
                        </th>
                    </tr>
                </thead>
                <tbody className="font-bold">
                    {/* table body map section start */}
                    {
                        data.map(data => <AllToysMap
                            key={data?._id}
                            data={data}
                        ></AllToysMap>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllToys;