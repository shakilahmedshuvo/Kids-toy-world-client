
const Banner = () => {
    return (
        <div className="carousel w-full h-full max-w-6xl mx-auto">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://img.freepik.com/premium-photo/toy-car-small-modern-automobile-generative-ai_629315-5662.jpg?size=626&ext=jpg&ga=GA1.1.1459715245.1680248818&semt=ais" className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='text-6xl font-bold'>
                            Extraordinary Learning Toys
                        </h2>
                        <p>
                            Every child's childhood includes toys inextricably. Toys are learning tools that assist kids in understanding a scale model of social interactions in the real world. Children will enjoy playing with...
                        </p>
                        <div>
                            <button className="btn bg-white text-black font-extrabold mr-5">
                                Buy Toys
                            </button>
                            <button className="btn bg-red-700">
                                Learn More & See More
                            </button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn glass mr-5">❮</a>
                    <a href="#slide2" className="btn glass">❯</a>
                </div>
            </div>
            {/* first img close */}
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://img.freepik.com/free-photo/small-car-with-pine-cone_1252-391.jpg?w=826&t=st=1684418023~exp=1684418623~hmac=d8734a56b84f068ffeff9cca2865d85aa37e9e3f76751df7f111b2535701b15b" className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='text-6xl font-bold'>
                            The Unlimited Toy Store
                        </h2>
                        <p>
                            Every child's childhood includes toys inextricably. Toys are learning tools that assist kids in understanding a scale model of social interactions in the real world. Children will enjoy playing with...
                        </p>
                        <div>
                            <button className="btn bg-white text-black font-extrabold mr-5">
                                Buy Toys
                            </button>
                            <button className="btn bg-red-700">
                                Learn More & See More
                            </button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn glass mr-5">❮</a>
                    <a href="#slide3" className="btn glass">❯</a>
                </div>
            </div>
            {/* second img close */}
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://img.freepik.com/free-photo/travel-elements-composition-with-letters_23-2147981842.jpg?w=826&t=st=1684417720~exp=1684418320~hmac=3565ec8e73f6ce1e36ba7f1f0832925122f11ec7850138a1af69761c5ac7a3d2" className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='text-6xl font-bold'>
                            A World To Explore
                        </h2>
                        <p>
                            Every child's childhood includes toys inextricably. Toys are learning tools that assist kids in understanding a scale model of social interactions in the real world. Children will enjoy playing with...
                        </p>
                        <div>
                            <button className="btn bg-white text-black font-extrabold mr-5">
                                Buy Toys
                            </button>
                            <button className="btn bg-red-700">
                                Learn More & See More
                            </button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn glass mr-5">❮</a>
                    <a href="#slide4" className="btn glass">❯</a>
                </div>
            </div>
            {/* third img close */}
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://img.freepik.com/premium-photo/red-car-toy-car-insurance-warranty-rental-financial-new-repair-concept_42256-6660.jpg?w=826" className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='text-6xl font-bold'>
                            Affordable And Good Toys
                        </h2>
                        <p>
                            Every child's childhood includes toys inextricably. Toys are learning tools that assist kids in understanding a scale model of social interactions in the real world. Children will enjoy playing with...
                        </p>
                        <div>
                            <button className="btn bg-white text-black font-extrabold mr-5">
                                Buy Toys
                            </button>
                            <button className="btn bg-red-700">
                                Learn More & See More
                            </button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn glass">❮</a>
                    <a href="#slide1" className="btn glass">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;