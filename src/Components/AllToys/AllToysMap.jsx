import { Link } from "react-router-dom";

const AllToysMap = ({ data }) => {

    const { _id, name, sellerName, quantity, category, price } = data;

    return (
        <tr>
            <th data-aos="zoom-in">
                {name}
            </th>
            <td
                data-aos="zoom-in"
            >
                {sellerName}
            </td>
            <td
                data-aos="zoom-in"
            >
                {category}
            </td>
            <td
                data-aos="zoom-in"
                className="text-center">
                {price}$
            </td>
            <td
                data-aos="zoom-in"
                className="text-center">
                {quantity}
            </td>
            <td
                data-aos="zoom-in"
                className="text-center">
                <Link
                    to={`/viewToys/${_id}`}
                    className="btn bg-sky-500 border-0 font-bold">
                    View More
                </Link>
            </td>
        </tr>
    );
};

export default AllToysMap;