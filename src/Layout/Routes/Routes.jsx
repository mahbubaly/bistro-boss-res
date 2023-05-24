import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import OurMainMenu from "../Menus/OurMainMenu";

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
            }
        ]
    },
]);

