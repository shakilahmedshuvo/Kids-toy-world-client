import { FaStar, FaStarHalfAlt, FaMinus, FaPlus } from "react-icons/fa";

const CustomerToys = () => {
    return (
        <div className="max-w-5xl mx-auto">
            <hr className="border-b border-solid border-2 mt-20" />
            <h2 className="text-center font-bold text-5xl mt-16 mb-5">
                Customer's Favorites
            </h2>
            {/* <p className="text-1xl font-bold bg-warning text-white py-2 px-6 text-center rounded-full w-[25%] mx-auto grid lg:grid-cols-3 sm:grid-rows-1">
                Recommended
            </p> */}
            <div className="grid lg:grid-cols-3">
                <div>

                </div>
                <p className="text-1xl font-bold bg-warning text-white py-2 px-6 text-center rounded-full">
                    Recommended
                </p>
                <div>

                </div>
            </div>
            {/* main div start and use the aos package */}
            <div className="grid lg:grid-cols-2 mt-10 sm:">
                <div data-aos="fade-right">
                    <img src="https://img.freepik.com/free-photo/vintage-miniature-car-fake-landscape_155003-1097.jpg?w=740&t=st=1684433870~exp=1684434470~hmac=eb56748cdca34bf292340beab67377992d9e608f4f2f28ca746f9fa45b584d68" alt="" />
                </div>
                <div className="lg:ms-10">
                    <h2 className="text-3xl font-bold">
                        Racing Car
                    </h2>
                    {/* ratings section */}
                    <p className="flex mt-3 text-xl text-warning">
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStarHalfAlt></FaStarHalfAlt>
                    </p>
                    <p className="font-bold mt-2 text-slate-500">
                        Every child's childhood includes toys inextricably. Toys are learning tools that assist kids in understanding a scale model of social interactions in the real world. Children will enjoy playing with...
                    </p>
                    {/* product info section */}
                    <div className="grid grid-cols-3 mt-3">
                        <div className="font-bold">
                            <p className="mb-6">
                                Price:
                            </p>
                            <p className="mb-6">
                                Size:
                            </p>
                            <p className="mb-6">
                                Color:
                            </p>
                            <p className="mb-6">
                                Material:
                            </p>
                            <p className="mb-6">
                                Availability:
                            </p>
                            <p className="mb-6">
                                Quantity:
                            </p>
                        </div>

                        <div className="font-bold">
                            <p className="mb-6">
                                $9.99 <span className="line-through ms-2 text-slate-400">$19.99</span>
                            </p>
                            <div className="flex mb-6">
                                <p className="flex">
                                    15 cm
                                </p>
                                <p className="ms-3">
                                    20 cm
                                </p>
                            </div>
                            <div className="mb-6 flex">
                                <p className="text-blue-600">
                                    Blue
                                </p>
                                <p className="ms-6 text-red-600">
                                    Red
                                </p>
                            </div>
                            <div className="mb-6 flex">
                                <p>
                                    Plastic
                                </p>
                                <p className="ms-3">
                                    Metal
                                </p>
                            </div>
                            <p className="mb-6 text-green-500">
                                In stock!
                            </p>
                            <div className="mb-6 flex items-center">
                                <p className="mr-6">
                                    <FaMinus></FaMinus>
                                </p>
                                <p className="mr-6 text-xl">
                                    1
                                </p>
                                <p className="flex items-center">
                                    <FaPlus></FaPlus>
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* btn */}
                    <div className="grid grid-cols-2 gap-10 mt-2">
                        <button className="btn rounded-full text-black font-bold bg-warning border-0 px-7">
                            Add to Cart
                        </button>
                        <button className="btn rounded-full text-black font-bold bg-warning border-0 px-7">
                            Buy it Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerToys;