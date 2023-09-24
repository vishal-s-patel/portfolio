// import * as React from "react";
"use client";
import logo from "../../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  const navItems = [
    {
      itemName: "About",
    },
    {
      itemName: "Experience",
    },
    {
      itemName: "Work",
    },
    {
      itemName: "Contact",
    },
  ];
  return (
    <header className="flex justify-between items-center fixed top-0 px-6 py-2.5 md:px-12 md:py-0 w-full bg-navy-blue h-24 backdrop-blur-md">
      <nav className="flex justify-between items-center relative w-full text-lightest-slate font-bodyFont">
        <div>
          <Image src={logo} alt="logo" width={42} height={42} />
        </div>
        <div className="hidden md:flex items-center">
          <ol className="flex items-center justify-between p-0 m-0 list-none">
            {navItems.map((el, index) => {
              return (
                <motion.li
                  className={`mx-1 my-0 text-xs p-2.5`}
                  key={el.itemName + index}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.1, delay: 0.0 + index / 10 }}
                >
                  <span className="text-green mr-1">0{index + 1}.</span>
                  <Link
                    href={`#${el.itemName}`}
                    className="transition-all hover:text-green"
                  >
                    {el.itemName}
                  </Link>
                </motion.li>
              );
            })}
          </ol>
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.1, delay: 0.5 }}
          >
            <Link
              href="#resume"
              target="_blank"
              className="text-green bg-transparent border border-solid border-[#64ffda] rounded py-3 px-4 font-bodyFont text-xs ml-3.5 hover:shadow-[3px_3px_0_0_#64ffda] resume-button"
            >
              Resume
            </Link>
          </motion.div>
        </div>
        <div className="relative md:hidden">
          <span className="absolute h-0.5 w-8 mb-1 -top-2 right-0 bg-green"></span>
          <span className="absolute h-0.5 w-7 right-0 bg-green"></span>
          <span className="absolute h-0.5 w-6 mt-1 top-1 right-0 bg-green"></span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
