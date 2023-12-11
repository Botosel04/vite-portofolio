import { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineMail,
} from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { BsPerson } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";

export const Sidenav = () => {
  let mode = "light";
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const setDarkMode = () => {
    mode = "dark";
    document.querySelector("body").setAttribute("data-theme", "dark");
  };
  const setLightMode = () => {
    mode = "light";
    document.querySelector("body").setAttribute("data-theme", "light");
  };

  const toggleTheme = () => {
    if (mode == "light") setDarkMode();
    else setLightMode();
  };
  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] md:hidden cursor-pointer"
      />
      {nav ? (
        <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
          <a
            onClick={handleNav}
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100  shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </a>
          <a
            onClick={handleNav}
            href="#work"
            className="mt-5  w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100  shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <GrProjects size={20} />
            <span className="pl-4">Work</span>
          </a>
          <a
            onClick={handleNav}
            href="#projects"
            className="mt-5 w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100  shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineProject size={20} />
            <span className="pl-4">Projects</span>
          </a>
          <a
            onClick={handleNav}
            href="#main"
            className="mt-5 w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100  shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <BsPerson size={20} />
            <span className="pl-4">Resume</span>
          </a>
          <a
            onClick={handleNav}
            href="#contact"
            className="mt-5 w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100  shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineMail size={20} />
            <span className="pl-4">Contact</span>
          </a>
        </div>
      ) : (
        ""
      )}
      <div className="ml-2 md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col">
          <a
            href="#main"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 "
          >
            <AiOutlineHome size={20} />
          </a>
          <a
            href="#work"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 "
          >
            <GrProjects size={20} />
          </a>
          <a
            href="#projects"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 "
          >
            <AiOutlineProject size={20} />
          </a>
          <a
            href="#main"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 "
          >
            <BsPerson size={20} />
          </a>
          <a
            href="#contacts"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 "
          >
            <AiOutlineMail size={20} />
          </a>
          <button
            href="#contacts"
            className="fixed bottom-4 rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-3 cursor-pointer hover:scale-110 ease-in duration-200 "
            onClick={toggleTheme}
          >
            <FaMoon size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};
