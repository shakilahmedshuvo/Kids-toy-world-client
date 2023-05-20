
const OneTabs = ({ one }) => {
    const { id, name, photo, price, ratings } = one;

    return (
        <div className="flex gap-6">
            <div className="w-[50%]">
                <img
                    className="rounded-xl"
                    src={photo} alt="" />
            </div>
            <div>
                <h2 className="text-3xl text-sky-500">
                    {name}
                </h2>
                <div className="my-2">
                    <p className="my-5">
                        Price: {price}
                    </p>
                    <p>
                        Ratings: {ratings}
                    </p>
                </div>
                <div className="mt-8">
                    <button className="btn bg-sky-500 border-0">
                        View More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OneTabs;