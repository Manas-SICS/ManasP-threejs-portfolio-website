import React, { useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center justify-center py-5 fixed top-0 z-20 bg-secondary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl ">
        <Link
          to="/"
          className=" flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />

          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Portfolio &nbsp;
            <span className="sm:block hidden font-medium">
              |&nbsp;Manas Prabhutendolkar
            </span>
          </p>
        </Link>
        <ul className="list-none hidden lg:flex flex-row gap-10">
          {navLinks.map((Link) => (
            <li
              key={Link.id}
              className="hover:text-white hover:underline hover:underline-offset-4 hover:decoration-orange hover:decoration-2 text-[18px] font-light cursor-pointer"
            >
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}
        </ul>

        <div className="lg:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[20px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-4 outline outline-orange outline-[0.1px] black-gradient absolute top-10 right-0 mx-4 my-5
             min-w-[140px] z-10 rounded`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((Link) => (
                <a href={`#${Link.id}`}>
                  <li
                    key={Link.id}
                    className="font-light text-light-grey cursor-pointer w-[150px] border-b  border-orange/[0.4] text-center text-[16px]"
                    onClick={() => {
                      setToggle(!toggle);
                    }}
                  >
                    {Link.title}
                  </li>
                </a>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
