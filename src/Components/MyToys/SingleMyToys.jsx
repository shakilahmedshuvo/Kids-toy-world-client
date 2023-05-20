import { RiDeleteBin6Line } from "react-icons/ri";

const SingleMyToys = ({ singleToys, handleDelete }) => {
    const { _id, name, sellerName, quantity, category, price, picture } = singleToys;
    console.log(singleToys);
    return (
        <tr>
            <th>
                <RiDeleteBin6Line
                    className="text-2xl text-red-500 mx-auto"
                    onClick={() => handleDelete(_id)}
                ></RiDeleteBin6Line>
            </th>
            <td className="w-[20%] h-[20%]">
                <img
                    src={picture}
                    alt="" />
            </td>
            <td>
                {name}
            </td>
            <td className="text-center">
                {category}

            </td>
            <td className="text-center">
                {quantity}
            </td>
            <td className="text-center">
                {price}$
            </td>
            <td className="text-center">
                <button className="btn bg-sky-500 border-0 font-bold mx-auto">
                    View More
                </button>
            </td>
        </tr>
    );
};

export default SingleMyToys;