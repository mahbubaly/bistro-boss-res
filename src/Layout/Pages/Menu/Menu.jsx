import { useEffect, useState } from "react";
import SharedTitle from "../../../Components/SharedTitle";
import MenuItems from "../MenuItems/MenuItems";


const Menu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch("https://bistro-server-mahbubaly.vercel.app/menu")
            .then((res) => res.json())
            .then((data) => {
                const sliceData = data.slice(0, 6);
                setMenu(sliceData);

            });
    }, []);


    const handlerView = () => {
        // useEffect(() => {
        //     fetch("Menu.json")
        //         .then((res) => res.json())
        //         .then((data) => {

        //             console.log(data);

        //         });
        // }, []);

    }


    return (
        <>
            <div className="container mx-auto">
                <div className="my-8">
                    <SharedTitle
                        title={"Check it out"}
                        subTitle={"FROM OUR MENU"}


                    />


                    <div className="grid md:grid-cols-2 grid-cols-1 gap-9">

                        {
                            menu.map(MenuItem => <MenuItems
                                key={MenuItem._id}
                                MenuItem={MenuItem}
                            />)
                        }
                    </div>

                    <div className="mx-auto flex justify-center mt-7">
                        <button onClick={handlerView} className="btn btn-outline ">View All Menu</button>
                    </div>







                </div>

                <div className="">
                    <h1 className="text-center lg:text-4xl text-white p-20 lg:p-[96px] bg-black">Call Us: +88 0192345678910</h1>
                </div>
            </div>

        </>
    );
};

export default Menu;