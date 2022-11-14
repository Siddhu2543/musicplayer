import { CDBIcon, CDBSidebarMenuItem } from "cdbreact";
import Dropdown from "react-bootstrap/Dropdown";
import { NavLink } from "react-router-dom";

const AccountDropdown = ({ user }) => {
  if (!user)
    return (
      <button
        className="btn btn-secondary btn-sm"
        type="button"
        id="dropdownMenuButton2"
      >
        <CDBIcon icon="user-circle" size="xl" /> Sign In
      </button>
    );
  return (
    <>
      <div className="dropdown" id="dropdown-basic">
        <button
          className="btn btn-secondary btn-sm dropdown-toggle"
          type="button"
          id="dropdownMenuButton2"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <CDBIcon icon="user-circle" size="xl" /> {user.userName}
        </button>
        <ul
          className="dropdown-menu dropdown-menu-dark"
          aria-labelledby="dropdownMenuButton2"
          id="dropdown-menu"
        >
          <NavLink
            end
            to="/user"
            className={({ isActive }) => (isActive ? "link active" : "link")}
          >
            <CDBSidebarMenuItem icon="user">Account</CDBSidebarMenuItem>
          </NavLink>
          <NavLink
            end
            to="/preferences"
            className={({ isActive }) => (isActive ? "link active" : "link")}
          >
            <CDBSidebarMenuItem icon="cog">Settings</CDBSidebarMenuItem>
          </NavLink>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <NavLink
            end
            to="/signout"
            className={({ isActive }) => (isActive ? "link active" : "link")}
          >
            <CDBSidebarMenuItem icon="sign-out-alt">Log Out</CDBSidebarMenuItem>
          </NavLink>
        </ul>
      </div>
    </>
  );
};

export default AccountDropdown;
