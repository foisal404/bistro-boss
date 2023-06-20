import { Link, NavLink, Outlet } from "react-router-dom";
import { ImMenu } from "react-icons/im";
import { GiNotebook } from "react-icons/gi";
import {
  FaUsers,
  FaShoppingCart,
  FaWallet,
  FaCalendarAlt,
  FaHome,
} from "react-icons/fa";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";
const Dashboard = () => {
  const [cart] = useCart();
  // TODO: isadmin role check
  const [isAdmin]=useAdmin();
  console.log(isAdmin);
  return (
    <div>
      <div className="drawer drawer-content  drawer-mobile ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full  text-base-content bg-[#D1A054]">
            {/* Sidebar content here */}

            {isAdmin?.admin ? (
              <>
                <li>
                  <NavLink>
                    <FaHome /> Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink>
                    <FaCalendarAlt /> ADD Items
                  </NavLink>
                </li>
                <li>
                  <NavLink>
                    <FaWallet />
                    Manage Items
                  </NavLink>
                </li>
                <li>
                <NavLink>
                    <FaWallet />
                    Manage Bookmarks
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/dashboard/users'>
                    <FaUsers />
                    All Users
                  </NavLink>
                </li>
                
              </>
            ) : (
              <>
                <li>
                  <NavLink>
                    <FaHome /> User Home
                  </NavLink>
                </li>
                <li>
                  <NavLink>
                    <FaCalendarAlt /> Reservation
                  </NavLink>
                </li>
                <li>
                  <NavLink>
                    <FaWallet />
                    Payment History
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/mycart">
                    <FaShoppingCart />
                    My Cart
                    <Link to="/dashboard/mycart">
                      <button className="btn btn-xs mx-3">
                        <FaShoppingCart />
                        <div className="badge ">+{cart?.length || 0}</div>
                      </button>
                    </Link>
                  </NavLink>
                </li>
                <li>
                  <NavLink>
                    <FaUsers />
                    Add reviews
                  </NavLink>
                </li>
                <li>
                  <NavLink>
                    <FaUsers />
                    My Bookings
                  </NavLink>
                </li>
              </>
            )}
            <div className="divider"></div>
            <li>
              <Link to="/">
                <FaHome /> Home
              </Link>
            </li>
            <li>
              <Link to="/menu">
                <ImMenu />
                Menu
              </Link>
            </li>
            <li>
              <Link to="/order/salad">
                <GiNotebook />
                Order
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
