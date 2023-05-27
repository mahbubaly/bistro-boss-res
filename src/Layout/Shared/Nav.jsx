import { Link } from "react-router-dom";

const Nav = () => {
    const navbar = <>

        <div className="flex lg:flex-row flex-col  gap-4">
            <Link className="hover:underline"  to='/'> Home</Link>
            <Link className="hover:underline" to='/'>Dashboard</Link>
            <Link className="hover:underline" to='/'> Contact Up</Link>
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
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3  shadow  rounded-box w-52 bg-black p-5 ">
                            {navbar}

                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">BISTRO BOSS <br /> RESTAURANT </a>
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