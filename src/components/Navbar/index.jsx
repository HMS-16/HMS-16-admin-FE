import React from "react";
import style from "./navbar.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const Navbar = ({ section1Ref, section2Ref, section3Ref }) => {
  const [activeLink, setActiveLink] = useState(null);
  useEffect(() => {
    // Add event listener for scroll event
    window.addEventListener("scroll", handleScroll);

    // Remove event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleScroll() {
    // Get the current scroll position
    const scrollY = window.scrollY;
    console.log(scrollY);

    // Check the scroll position against the position of each section
    if (scrollY >= section1Ref.current.offsetTop - 80 && scrollY < section2Ref.current.offsetTop - 50) {
      setActiveLink(1);
    } else if (
      scrollY >= section2Ref.current.offsetTop - 200 &&
      scrollY < section3Ref.current.offsetTop - 50
    ) {
      setActiveLink(2);
    } else if (scrollY >= section3Ref.current.offsetTop - 100) {
      setActiveLink(3);
    } else {
      setActiveLink(null);
    }
  }
  return (
    <>
      <header className={style.header}>
        <nav className={style.navbar}>
          <div className={style.logo}></div>
          <ul>
            <li>
              <a className={activeLink === 1 ? style.activeNavLink : ""} href="#section1">
                Home
              </a>
            </li>
            <li>
              <a className={activeLink === 2 ? style.activeNavLink : ""} href="#section2">
                About Us
              </a>
            </li>
            <li>
              <a className={activeLink === 3 ? style.activeNavLink : ""} href="#section3">
                Services
              </a>
            </li>
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
