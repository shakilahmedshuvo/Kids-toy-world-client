import Banner from "../Banner/Banner";
import ClientSays from "../ClientSays/ClientSays";
import CustomerToys from "../CustomerToys/CustomerToys";
import Gallery from "../Gallery/Gallery";
import useTitle from "../Hooks/useTitle";
import ToyTabs from "../ToyTabs/ToyTabs";

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner />
            <CustomerToys />
            <Gallery />
            <ClientSays />
            <ToyTabs />
        </div>
    );
};

export default Home;