import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

const Layout = ({ children }) => {
  if (children) {
    return <>{/* <Sidebar>{children}</Sidebar> */}</>;
  }
  return (
    <>
      {/* <Sidebar>
        <Outlet />
      </Sidebar> */}
    </>
  );
};

export default Layout;
