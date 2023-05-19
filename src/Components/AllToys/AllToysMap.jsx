
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
                    {price}
                </td>
                <td className="text-center">
                    {quantity}
                </td>
                <td>
                    <button>View More</button>
                </td>
            </tr>
    );
};

export default AllToysMap;