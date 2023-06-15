import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import toast, { Toaster } from 'react-hot-toast';

const Main = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
            <Toaster />
        </div>
    );
};

export default Main;