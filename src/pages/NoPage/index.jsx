import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NoPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }, [navigate]);
  return (
    <div>
      <h1 style={{ marginTop: "25%", textAlign: "center" }}>404 Error</h1>
      <h2 style={{ textAlign: "center" }}>Page Not Found</h2>
    </div>
  );
};
export default NoPage;
