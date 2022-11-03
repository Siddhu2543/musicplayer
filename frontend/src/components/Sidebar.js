/* import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

const Sidebar = () => {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Home
      </NavLink>
      <NavLink
        to="/search"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Search
      </NavLink>
      <NavLink
        to="/collection/playlists"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Your Library
      </NavLink>
      <NavLink
        to="/collection/tracks"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Login
      </NavLink>
    </nav>
  );
};
export default Sidebar;
 */

import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <CDBSidebar textColor="#fff" backgroundColor="#000">
      <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
        <a
          href="/"
          className="text-decoration-none"
          style={{ color: "inherit" }}
        >
          MyPlayer
        </a>
      </CDBSidebarHeader>

      <CDBSidebarContent className="sidebar-content">
        <CDBSidebarMenu>
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
            end
            to="/collection"
            className={({ isActive }) => (isActive ? "link active" : "link")}
          >
            <CDBSidebarMenuItem icon="bookmark">
              Your Library
            </CDBSidebarMenuItem>
          </NavLink>
        </CDBSidebarMenu>
        <hr />
        <CDBSidebarMenu>
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
        </CDBSidebarMenu>
        <hr />
        <CDBSidebarMenu>
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
        </CDBSidebarMenu>
      </CDBSidebarContent>
    </CDBSidebar>
  );
};

export default Sidebar;
