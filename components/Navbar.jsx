"use client";

import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { RiSunLine, RiMoonFill } from "react-icons/ri";
import { useTheme } from "next-themes";

const NavItems = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Projects",
    page: "projects",
  },
];

const Navbar = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const currentTheme = resolvedTheme === "system" ? "light" : resolvedTheme;

  // state for toggle navbar button
  const [navbar, setNavbar] = useState(false);

  return (
    <div>
      <header className="w-full mx-auto px-4 sm:px-20 fixed top-0 z-50 shadow bg-white dark:bg-stone-900 dark:border-b dark:border-stone-600">
        <div className="justify-between md:items-center md:flex">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <ScrollLink to="home">
                <div className="container cursor-pointer flex items-center space-x-2">
                  <h2 className="text-2xl font-bold">Vijay Kacha</h2>
                </div>
              </ScrollLink>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
                </button>
              </div>
            </div>
          </div>

          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                {NavItems.map((item, index) => {
                  return (
                    <ScrollLink
                      key={index}
                      to={item.page}
                      className={
                        "block cursor-pointer lg:inline-block text-neutral-900  hover:text-neutral-500 dark:text-neutral-100"
                      }
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      onClick={() => setNavbar(!navbar)}
                    >
                      {item.label}
                    </ScrollLink>
                  );
                })}
                <button
                  onClick={() =>
                    setTheme(currentTheme === "dark" ? "light" : "dark")
                  }
                  className="bg-slate-100 p-2 rounded-xl"
                >
                  { currentTheme && currentTheme === "dark" ? (
                    <RiSunLine size={25} className="text-slate-900" />
                  ) : (
                    <RiMoonFill size={25} className="text-slate-900" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
