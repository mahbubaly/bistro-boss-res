import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import OurMainMenu from "../Menus/OurMainMenu";
import OurShop from "../OurShop/OurShop";
import LogIn from "../Login/LogIn";
import SignIn from "../Login/SignIn/SignIn";
import ContactUs from "../ContactUs/ContactUs";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [

            {
                path: '/',
                element: <Home />
            },
            {
                path: '/menu',
                element: <OurMainMenu />
            },
            {
                path: '/ourShop',
                element: <OurShop />
            },
            {
                path: '/login',
                element: <LogIn />
            },
            {
                path: '/signIn',
                element: <SignIn />
            },
            {
                path: '/contactUs',
                element: <ContactUs />
            }
        ]
    },
]);

