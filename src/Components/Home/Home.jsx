import Banner from "../Banner/Banner";
import CustomerToys from "../CustomerToys/CustomerToys";
import Gallery from "../Gallery/Gallery";
import useTitle from "../Hooks/useTitle";
import ToyTabs from "../ToyTabs/ToyTabs";

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <CustomerToys></CustomerToys>
            <Gallery></Gallery>
            <ToyTabs></ToyTabs>
        </div>
    );
};

export default Home;