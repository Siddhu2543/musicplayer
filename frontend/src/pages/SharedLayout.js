import { Link, Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Playerbar from "../components/Playerbar";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        overflow: "scroll initial",
        backgroundImage: "linear-gradient(#5C5C5C, #121212 50%)",
        color: "white",
      }}
    >
      <Sidebar />
      <Outlet />
      <Playerbar />
    </div>
  );
};
export default Home;
