import { Link, Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import SidebarNew from "../components/SidebarNew";
import Playerbar from "../components/Playerbar";
import { createContext, useEffect, useState } from "react";
import TopBar from "../components/Topbar";
import Stack from "../api/History";

const StackProvider = createContext();

const Home = ({ user }) => {
  const [[stack_back, stack_for], setStack] = useState([
    new Stack(),
    new Stack(),
  ]);

  useEffect(() => {
    const links = document.querySelectorAll("a.link");
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        stack_back.push(window.location.pathname);
        console.log(stack_back.print());
      });
    });
  }, [user]);
  return (
    <StackProvider.Provider value={[stack_back, stack_for, user]}>
      <div
        style={{
          display: "flex",
          height: "100vh",
          overflow: "scroll initial",
          backgroundImage: "linear-gradient(#5C5C5C, #121212 50%)",
          color: "white",
        }}
      >
        <TopBar StackProvider={StackProvider} />
        <SidebarNew StackProvider={StackProvider} />
        <Outlet />
        {user ? (
          <Playerbar lastQueue={user.lastQueue} />
        ) : (
          <Playerbar lastQueue={""} />
        )}
      </div>
    </StackProvider.Provider>
  );
};
export default Home;
