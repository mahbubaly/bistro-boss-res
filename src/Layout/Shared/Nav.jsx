import { Link } from "react-router-dom";

const Nav = () => {
    const navbar = <>

        <div className="flex gap-4">
            <Link to='/'> Home</Link>
            <Link to='/'>Dashboard</Link>
            <Link to='/'> Contact Up</Link>
            <Link to='/menu'> Our Menu</Link>
            <Link to='/'> Our Shop</Link>
        </div>




    </>
    return (
        <>
            <div className="navbar z-10 fixed bg-opacity-25 bg-black text-white max-w-screen-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
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