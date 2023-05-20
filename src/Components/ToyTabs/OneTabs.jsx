import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const OneTabs = ({ one }) => {
    const { id, name, photo, price, ratings } = one;
    const { user } = useContext(AuthContext);

    const handleView = () => {
        if (!user) {
            toast.success('You Have To Log In First To View Details')
        }
    }
    return (
        <div className="flex gap-6">
            <div className="w-[50%]">
                <img
                    className="rounded-xl"
                    src={photo} data-aos="zoom-out" alt="" />
            </div>
            <div>
                <h2 className="text-3xl text-sky-500">
                    {name}
                </h2>
                <div className="my-2">
                    <p>
                        Price: {price}
                    </p>
                    <p>
                        Ratings: {ratings}
                    </p>
                </div>
                <div className="mt-1">
                    {/* btn condition */}
                    {
                        user ?
                            <>
                                <button
                                    className="btn bg-sky-500 border-0">
                                    View More
                                </button>
                            </>
                            :
                            <>
                                <Link
                                    onClick={handleView}
                                    to="/login">
                                    <button className="btn bg-sky-500 border-0">
                                        View More
                                    </button>
                                </Link>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default OneTabs;