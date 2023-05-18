import Banner from "../Banner/Banner";
import NavBar from "./NavBar";

const Header = () => {
    return (
        <div>
            <NavBar></NavBar>
            <h2 className="text-5xl font-extrabold text-center p-5 text-sky-500">
                kIDS TOY WORLD
            </h2>
            <hr className="border-b border-gray-500 border-1 max-w-5xl mx-auto" />
            <p className="text-center font-bold p-2">
                Safe Toys For Children, High Durable Toys, Recyclable Materials, Safe and Non-Toxic Toys
            </p>
            <p className="text-center font-bold p-2">
                It's never been easier to invest in your kid's toys
            </p>
            <div className="flex justify-center my-2">
                <button className="btn mx-auto border-0 px-8 bg-yellow-400 text-black font-bold text-center">
                    Learn More
                </button>
            </div>
            <Banner></Banner>
        </div>
    );
};

export default Header;