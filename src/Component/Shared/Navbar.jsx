import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../hooks/useCart";

const Navbar = () => {
    const {user,logOut}=useContext(AuthContext);
    const [cart] = useCart();
    
    const handleLogOut=()=>{
        logOut()
        .then(() => { })
        .catch(error => console.log(error));
    }

    const navOptions = <>
    <li><Link to="/">HOME</Link></li>
    <li><Link to="/contactUs">CONTACT US</Link></li>
    <li><Link to="bashboard">DASHBOARD</Link></li>
    <li><Link to="/menu">OUR MENU</Link></li>
    <li><Link to="/order/salad">OUR SHOP</Link></li>
    
    <li>
        <Link to="/dashboard/cart"> 
            <button className="btn">
            <FaShoppingCart className="mr-2"></FaShoppingCart>
            <div className="badge badge-secondary">+0</div>
            </button>
        </Link>
    </li>
    
    {
        user? <> 

         <button onClick={handleLogOut} className="btn btn-active btn-ghost">Ghost</button>
        </> : <>
         <li><Link to="/login">LOGIN</Link></li>
         </>
    }
   
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