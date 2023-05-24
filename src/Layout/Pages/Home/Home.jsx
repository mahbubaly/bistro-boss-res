
import Category from "../Catagory/Category";
import Features from "../Featured/Features";
import Menu from "../Menu/Menu";
import OurMenu from "../OurMenu/OurMenu";
import Testimonials from "../Testimonials/Testimonials";
import Banner from "./Banner/Banner";

const Home = () => {
    return (
        <>

            <Banner />
            <Category />
            <Menu />
            <Features />
            <OurMenu />
            <Testimonials />

        </>
    );
};

export default Home;