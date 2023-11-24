import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const handleLogout = () => {
    logOut()
    .then(()=>{
      //
    })
  }
  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "border-b-2 border-green-600" : ""
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "border-b-2 border-green-600" : ""
        }
      >
        About
      </NavLink>
    </>
  );

  return (
    <div className="bg-black text-white">
      <div className="navbar container mx-auto px-3">
        <div className="navbar-start hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-base font-semibold gap-3">
            {links}
          </ul>
        </div>
        <div className="navbar-center flex-1">
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
              className="menu bg-black px-5 py-8 text-white menu-sm text-base font-medium gap-3 dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <a className="text-xl font-semibold">daisyUI</a>
        </div>
        <div className="gap-5 navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full border-2 border-white">
                  <img alt="" src={user?.photoURL} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] bg-black text-white p-2 shadow menu menu-sm dropdown-content w-56"
              >
                <li>
                  <p className="border-2 border-white px-2 py-1 rounded-none">
                    <span className="uppercase">{user?.displayName}</span>
                  </p>
                </li>
                <li className="my-3">
                  <p className="hover:bg-blue-950 px-2 py-2 rounded-none">
                    Dashboard
                  </p>
                </li>
                <button onClick={handleLogout} className="bg-blue-600 hover:bg-blue-700 text-white py-2 w-full font-medium">
                  Logout
                </button>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              <button className="bg-[#7B29D5] py-1.5 px-4 rounded-sm font-medium">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
