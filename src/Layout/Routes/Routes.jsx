import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import OurMainMenu from "../Menus/OurMainMenu";
import OurShop from "../OurShop/OurShop";

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
            }
        ]
    },
]);

