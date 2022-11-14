import { Link, NavLink, Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="home">
      <div className="main">
        <ul className="nav nav-tabs">
          <NavLink
            to={"/collection/playlists"}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-item"
            }
          >
            Playlists
          </NavLink>

          <NavLink
            to={"/collection/artists"}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-item"
            }
          >
            Artists
          </NavLink>

          <NavLink
            to={"/collection/tracks"}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-item"
            }
          >
            Tracks
          </NavLink>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};
export default Home;
