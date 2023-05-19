import { RiDeleteBin6Line } from "react-icons/ri";

const SingleMyToys = ({ singleToys,handleDelete }) => {
    const { _id, name, sellerName, quantity, category, price, picture} = singleToys;
    console.log(singleToys);
    return (
        <tr>
            <th>
                <RiDeleteBin6Line onClick={() => handleDelete(_id)}></RiDeleteBin6Line>
            </th>
            <td>
                {sellerName}
            </td>
            <td>
                {category}
            </td>
            <td className="text-center">
                <img src={picture} alt="" />
            </td>
            <td className="text-center">
                {quantity}
            </td>
            <td className="text-center">
                <button className="btn bg-sky-500 border-0 font-bold">
                    View More
                </button>
            </td>
        </tr>
    );
};

export default SingleMyToys;