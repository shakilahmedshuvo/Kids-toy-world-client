
const AllToysMap = ({ data }) => {

    const { _id, name, sellerName, quantity, category, price } = data;

    return (
        <tr>
            <th>
                {name}
            </th>
            <td>
                {sellerName}
            </td>
            <td>
                {category}
            </td>
            <td className="text-center">
                {price}$
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

export default AllToysMap;