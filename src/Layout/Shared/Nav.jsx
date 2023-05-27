import { Link } from "react-router-dom";

const Nav = () => {

    const navbar = <>

        <div className="flex lg:flex-row flex-col  gap-4">
            <Link className="hover:underline" to='/'> Home</Link>
            
            <Link className="hover:underline" to='/contactUs'> Contact Us</Link>
            <Link className="hover:underline" to='/menu'> Our Menu</Link>
            <Link className="hover:underline" to='/ourShop'> Order Food</Link>
            <Link className="hover:underline" to='/login'>Log in</Link>
            <Link className="hover:underline" to='/signIn'>Sign Up</Link>
        </div>




    </>
    return (
        <>
            <div className="navbar z-10 fixed bg-opacity-25 bg-black text-white max-w-screen-xl p-4">
                <div className="navbar-start">
                    <div className="dropdown lg:hidden block">


                        <label className="btn btn-circle swap swap-rotate ">

                            {/* <!-- this hidden checkbox controls the state --> */}
                            <input type="checkbox" />

                            {/* <!-- hamburger icon --> */}
                            <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>

                            {/* <!-- close icon --> */}
                            <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                            </svg>

                        </label>

                        <ul tabIndex={0} className="menu menu-compact  dropdown-content mt-3  shadow  rounded-box w-52 bg-black p-5 ">
                            {navbar}

                        </ul>
                    </div>
                    <Link to='/'><a className="btn btn-ghost normal-case text-xl">BISTRO BOSS <br /> RESTAURANT </a></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navbar}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn uppercase btn-outline text-yellow-600 hover:text-yellow-700">Book Now</a>
                </div>
            </div>

        </>
    );
};

export default Nav;