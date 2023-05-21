import { FaStar, FaStarHalfAlt } from "react-icons/fa";
const ClientSays = () => {
    return (
        <div className="max-w-5xl mx-auto">
            <hr className="border-b border-solid border-4 my-20" />
            <h2 className="text-5xl font-bold text-center text-sky-500">
                Customer FeedBack
            </h2>
            <p className="font-bold text-2xl mt-2 text-slate-500 text-center p-6">
                Our Costumer Says
            </p>
            {/* grid section */}
            <div className="flex flex-col lg:grid-cols-4 w-full lg:flex-row gap-5">
                <div className="card w-full glass bg-sky-200 hover:bg-sky-300"
                    data-aos="zoom-out-down">
                    <figure>
                        <div className="avatar indicator mt-5">
                            <span className="indicator-item badge bg-rose-600 border-0">
                            </span>
                            <div className="h-20 w-full rounded-full">
                                <img
                                    src="https://img.freepik.com/premium-vector/people-saving-money_24908-51569.jpg?w=740"
                                    alt="" />
                            </div>
                        </div>
                    </figure>
                    <div className="card-body">
                        <div className="flex gap-2 mx-auto text-xl pb-2 text-yellow-600">
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStarHalfAlt></FaStarHalfAlt>
                        </div>
                        <h2 className="card-title mx-auto font-bold">
                            SHAKIL AHMED
                        </h2>
                        <small className="text-center font-bold text-slate-500">
                            Kids Toy World Toys Are
                            <br />
                            Awesome It is recommended,
                            <br />
                            They sell
                            good toys
                            <br />
                            I am happy
                        </small>
                    </div>
                </div>
                <div className="card w-full glass bg-sky-200 hover:bg-sky-300"
                    data-aos="zoom-out-down">
                    <figure>
                        <div className="avatar indicator mt-5">
                            <span className="indicator-item badge bg-rose-600 border-0">
                            </span>
                            <div className="h-20 w-full rounded-full">
                                <img
                                    src="https://img.freepik.com/premium-vector/parking-park-zone-design_24877-34205.jpg?w=740"
                                    alt="" />
                            </div>
                        </div>
                    </figure>
                    <div className="card-body">
                        <div className="flex gap-2 mx-auto text-xl pb-2 text-yellow-600">
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                        </div>
                        <h2 className="card-title mx-auto font-bold">
                            Likhon Adnan
                        </h2>
                        <small className="text-center font-bold text-slate-500">
                            Kids Toy World Toys Are
                            <br />
                            Awesome It is recommended,
                            <br />
                            They sell
                            good toys
                            <br />
                            I am happy
                        </small>
                    </div>
                </div>
                <div className="card w-full glass bg-sky-200 hover:bg-sky-300"
                    data-aos="zoom-out-down">
                    <figure>
                        <div className="avatar indicator mt-5">
                            <span className="indicator-item badge bg-rose-600 border-0">
                            </span>
                            <div className="h-20 w-full rounded-full">
                                <img
                                    src="https://img.freepik.com/premium-vector/call-center-support-service-icon-male-call-center-working-headphones_349999-926.jpg?w=740"
                                    alt="" />
                            </div>
                        </div>
                    </figure>
                    <div className="card-body">
                        <div className="flex gap-2 mx-auto text-xl pb-2 text-yellow-600">
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStarHalfAlt></FaStarHalfAlt>
                            <FaStarHalfAlt></FaStarHalfAlt>
                        </div>
                        <h2 className="card-title mx-auto font-bold">
                            Ahmed Shuvo
                        </h2>
                        <small className="text-center font-bold text-slate-500">
                            Kids Toy World Toys Are
                            <br />
                            Awesome It is recommended,
                            <br />
                            They sell
                            good toys
                            <br />
                            I am happy
                        </small>
                    </div>
                </div>
                <div className="card w-full glass bg-sky-200 hover:bg-sky-300"
                    data-aos="zoom-out-down">
                    <figure>
                        <div className="avatar indicator mt-5">
                            <span className="indicator-item badge bg-rose-600 border-0">
                            </span>
                            <div className="h-20 w-full rounded-full">
                                <img
                                    src="https://img.freepik.com/premium-vector/academic-education-design_24877-41013.jpg?w=740"
                                    alt="" />
                            </div>
                        </div>
                    </figure>
                    <div className="card-body">
                        <div className="flex gap-2 mx-auto text-xl pb-2 text-yellow-600">
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStarHalfAlt></FaStarHalfAlt>
                        </div>
                        <h2 className="card-title mx-auto font-bold">
                            Abdullah Al Imran
                        </h2>
                        <small className="text-center font-bold text-slate-500">
                            Kids Toy World Toys Are
                            <br />
                            Awesome It is recommended,
                            <br />
                            They sell
                            good toys
                            <br />
                            I am happy
                        </small>
                    </div>
                </div>
            </div>
            <div>
                <h2
                    data-aos="zoom-out-in"
                    className="text-3xl font-bold text-center text-sky-500 mt-20">
                    Thank You Our Customer's
                </h2>
            </div>
        </div>
    );
};

export default ClientSays;