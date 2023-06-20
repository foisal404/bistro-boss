import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import {  FaShoppingCart } from 'react-icons/fa';
import useCart from "../../hooks/useCart";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user.displayName);
  const [cart]=useCart();
  // console.log(cart);
  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("sign out ");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
  const navItems = (
    <div className="flex items-center">
      <Link to="/" className="mx-3">
        Home
      </Link>
      <Link to="/menu" className="mx-3">
        Menu
      </Link>
      <Link to="/order/salad" className="mx-3">
        Order Food
      </Link>
      <Link to='/dashboard/mycart'><button className="btn mx-3">
        <FaShoppingCart/>
        <div className="badge ">+{cart?.length || 0}</div>
      </button></Link>

      {user ? (
        <>
          <label
            className="btn btn-ghost btn-circle avatar tooltip  tooltip-bottom"
            data-tip={user?.displayName}
          >
            <div className="w-10 rounded-full">
              <img src={user?.photoURL} />
            </div>
          </label>
          <button onClick={handleLogout} className="btn btn-active btn-ghost">
            logout
          </button>
        </>
      ) : (
        <>
          <Link to="/login" className="mx-3">
            Login
          </Link>
        </>
      )}
    </div>
  );
  return (
    <>
      <nav className="navbar fixed z-10 bg-[#111827] text-neutral-content opacity-90">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Bistro BOSS</a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        {/* <div className="navbar-end">
          <a className="btn">Get started</a>
        </div> */}
      </nav>
    </>
  );
};

export default Header;
