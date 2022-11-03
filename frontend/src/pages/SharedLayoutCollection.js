import { Link, Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <>
      <h1>Playlists | Artists | Albums | Songs</h1>
      <div></div>
      <Outlet />
    </>
  );
};
export default Home;
