import { CDBSidebarMenuItem } from "cdbreact";
import { NavLink } from "react-router-dom";
import PlayButton from "./PlayButton";

const Sidebar = () => {
  return (
    <>
      <div
        className="offcanvas offcanvas-start show bg-black text-white"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
        data-bs-backdrop="false"
        data-bs-scroll="true"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            <PlayButton /> MyPlayer
          </h5>
        </div>
        <div className="offcanvas-body">
          <ul className="list-group">
            <NavLink
              end
              to="/"
              className={({ isActive }) => (isActive ? "link active" : "link")}
            >
              <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              end
              to="/search"
              className={({ isActive }) => (isActive ? "link active" : "link")}
            >
              <CDBSidebarMenuItem icon="search">Search</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              to="/collection/playlists"
              className={({ isActive }) => (isActive ? "link active" : "link")}
            >
              <CDBSidebarMenuItem icon="bookmark">
                Your Library
              </CDBSidebarMenuItem>
            </NavLink>
            <hr />
            <NavLink
              end
              to="/history"
              className={({ isActive }) => (isActive ? "link active" : "link")}
            >
              <CDBSidebarMenuItem icon="clock">History</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              end
              to="/collection/tracks"
              className={({ isActive }) => (isActive ? "link active" : "link")}
            >
              <CDBSidebarMenuItem icon="heart">Liked Songs</CDBSidebarMenuItem>
            </NavLink>
            <hr />
            <NavLink
              end
              to="/top-playlists"
              className={({ isActive }) => (isActive ? "link active" : "link")}
            >
              <CDBSidebarMenuItem icon="chart-line" iconType="solid">
                Top Playlists
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              end
              to="/top-tracks"
              className={({ isActive }) => (isActive ? "link active" : "link")}
            >
              <CDBSidebarMenuItem iconType="solid" icon="fire-alt">
                Most Liked Songs
              </CDBSidebarMenuItem>
            </NavLink>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
