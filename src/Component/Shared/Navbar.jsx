import { Link } from "react-router-dom";

const Navbar = () => {

    const navOptions = <>
    <li><Link to="/">HOME</Link></li>
    <li><Link to="/">CONTACT US</Link></li>
    <li><Link to="/order/salad">DASHBOARD</Link></li>
    <li><Link to="/menu">OUR MENU</Link></li>
    <li><Link to="/secret">OUR SHOP</Link></li>
   
</>

    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-30  max-w-screen-xl w-11/12  mx-auto bg-black text-white ">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                {navOptions}
                </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
            </div>
            
            <div className="navbar-end">
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {navOptions}
                </ul>
            </div>
                <button className="btn">Get Starded</button>
            </div>
            </div>
        </>
    );
};

export default Navbar;