import CustomerToys from "../CustomerToys/CustomerToys";
import Gallery from "../Gallery/Gallery";
import ToyTabs from "../ToyTabs/ToyTabs";

const Home = () => {
    return (
        <div>
            <CustomerToys></CustomerToys>
            <Gallery></Gallery>
            <ToyTabs></ToyTabs>
        </div>
    );
};

export default Home;