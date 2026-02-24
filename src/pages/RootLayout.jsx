import Nav from "../components/Nav";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <>
      <div id="sidebar">
        <h1>Hello RootLayout</h1>
        <Nav />
      </div>
      <Outlet />
    </>
  );
};

export default RootLayout;
