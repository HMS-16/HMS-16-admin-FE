import React from "react";
import { Outlet } from "react-router-dom";
import Layout from "../pages/Layout";

const PrivateRoute = () => {
  return (
    <>
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
};

export default PrivateRoute;
