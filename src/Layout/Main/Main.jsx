import { Outlet } from "react-router-dom";
import Nav from "../Shared/Nav";
import Footer from "../Shared/Footer";

const Main = () => {
    return (
        <>
            <Nav />
            <Outlet />
            <Footer />
        </>
    );
};

export default Main;