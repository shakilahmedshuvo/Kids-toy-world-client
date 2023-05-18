import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import toast, { Toaster } from 'react-hot-toast';
import Banner from "../Components/Banner/Banner";

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster></Toaster>
        </div>
    );
};

export default Main;