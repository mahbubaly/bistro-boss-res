import { Outlet, useLocation } from "react-router-dom";
import Nav from "../Shared/Nav";
import Footer from "../Shared/Footer";


const Main = () => {
    const location = useLocation();
    console.log(location);

    const noHeaderFooter = location.pathname.includes("login") || location.pathname.includes("signIn");
    
    
    return (
        <>
            {
                noHeaderFooter || <Nav />
            }
            <Outlet />
            {
                noHeaderFooter || <Footer />
            }
        </>
    );
};

export default Main;