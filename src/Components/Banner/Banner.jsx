
const Banner = () => {
    return (
        <div>
            <h2 className="text-5xl font-extrabold text-center p-5 text-sky-500">
                KIDS TOY WORLD
            </h2>
            <hr className="border-b border-gray-500 border-1 max-w-7xl mx-auto" />
            <p className="text-center font-bold p-2">
                Safe Toys For Children, High Durable Toys, Recyclable Materials, Safe and Non-Toxic Toys
            </p>
            <p className="text-center font-bold p-2">
                It's never been easier to invest in your kid's toys
            </p>
            <div className="flex justify-center my-2">
                <button className="btn mx-auto border-0 px-8 bg-sky-500 font-bold text-center">
                    Learn More
                </button>
            </div>
            <div className="carousel w-full h-full max-w-7xl mx-auto mt-10">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074078.jpg?w=996&t=st=1684670897~exp=1684671497~hmac=79d0b359101d7d7dba8cd1c92c0ccf1eb5af19ea42bdb4a2ef5836fd20720cad" className="w-full rounded-xl" />
                    <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 pl-12 w-1/2'>
                            <h2 className='text-6xl font-bold '>
                                Extraordinary Learning Toys
                            </h2>
                            <p>
                                Every child's childhood includes toys inextricably. Toys are learning tools that assist kids in understanding a scale model of social interactions in the real world. Children will enjoy playing with...
                            </p>
                            <div>
                                <button className="btn border-0 bg-sky-400">View More</button>
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
                    <img src="https://img.freepik.com/premium-photo/top-view-wooden-transportation-toys-blue-background-car-toys-background_423236-196.jpg?w=826" className="w-full rounded-xl" />
                    <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 pl-12 w-1/2'>
                            <h2 className='text-6xl font-bold '>
                                The Unlimited Toy Store
                            </h2>
                            <p>
                                Every child's childhood includes toys inextricably. Toys are learning tools that assist kids in understanding a scale model of social interactions in the real world. Children will enjoy playing with...
                            </p>
                            <div>
                                <button className="btn bg-sky-400">View More</button>
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
                    <img src="https://img.freepik.com/premium-photo/multi-colored-candle-cars-yellow-surface-with-space-text_143127-420.jpg?w=826" className="w-full rounded-xl" />
                    <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 pl-12 w-1/2'>
                            <h2 className='text-6xl font-bold '>
                                A World To Explore
                            </h2>
                            <p>
                                Every child's childhood includes toys inextricably. Toys are learning tools that assist kids in understanding a scale model of social interactions in the real world. Children will enjoy playing with...
                            </p>
                            <div>
                                <button className="btn bg-sky-400">View More</button>
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
                    <img src="https://img.freepik.com/free-photo/kindergarten-concept-with-wooden-cubes-kid-toys-wooden-background-flat-lay_176474-7734.jpg?w=740&t=st=1684671135~exp=1684671735~hmac=1c3b678aea36a04044c9dcffe750f0de410a0dcbc8d94ec3f043dbd37856cb40" className="w-full rounded-xl" />
                    <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 pl-12 w-1/2'>
                            <h2 className='text-6xl font-bold '>
                                Affordable And Good Toys
                            </h2>
                            <p>
                                Every child's childhood includes toys inextricably. Toys are learning tools that assist kids in understanding a scale model of social interactions in the real world. Children will enjoy playing with...
                            </p>
                            <div>
                                <button className="btn bg-sky-400">View More</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn glass">❮</a>
                        <a href="#slide1" className="btn glass">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;