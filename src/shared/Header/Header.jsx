import { Link } from "react-router-dom";

const Header = () => {
  const navItems = (
    <>
      <Link to="/" className="mx-3">Home</Link>
      <Link to="/" className="mx-3">Contact us</Link>
      <Link to="/" className="mx-3">DashBoard</Link>
      <Link to="/" className="mx-3">Our Menu</Link>
      
    </>
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
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Get started</a>
        </div>
      </nav>
    </>
  );
};

export default Header;
