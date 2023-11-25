import { MdOutlineMenu } from "react-icons/md";
import { NavLink } from "react-router-dom";
import useRole from "../../Hooks/useRole";

const Sidebar = () => { 
  const [isAdmin]= useRole()
  
  const userRole = isAdmin?.role

  return (
    <div className="drawer lg:drawer-open ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden mt-2"
        >
          <MdOutlineMenu />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 space-y-1 w-80 min-h-full text-lg bg-base-200 text-base-content">
          {userRole === "admin" ? (
            <>
              {/* admin router */}
              <li>
                <NavLink to="/dashboard/manageuser">Manage User</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/managecontest">Manage Contest</NavLink>
              </li>
            </>
          ) : userRole === "user" ? (
            <>
              {/* --------------------user router------------------------------------------ */}
              <li>
                <NavLink to="/dashboard/registeredcontest">
                  Registered Contest
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/winningcontest">
                  Winning Contest
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myprofile">My Profile</NavLink>
              </li>
            </>
          ) : (
            <>
              {/* --------------------creator router------------------------------------------ */}
              <li>
                <NavLink to="/dashboard/addcontest">Add Contest</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/createdcontest">Created Contest</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
