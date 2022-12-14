import React from "react";
import style from "./navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <header className={style.header}>
        <nav className={style.navbar}>
          <div className={style.logo}></div>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <Link className={style.loginBtn} to={"/login"}>
              Login
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default Navbar;
