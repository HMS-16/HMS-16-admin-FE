import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import Layout from "../pages/Layout";
import Auth from "../utils/Auth";

const PrivateRoute = () => {
  if (!Auth.isAuthorized()) {
    return <Navigate to="/login" replace />;
  }
  return (
    <>
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
};

export default PrivateRoute;
