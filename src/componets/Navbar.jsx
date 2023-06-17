import React, { useState } from "react";
import Button from "./Button";
import {RxHamburgerMenu} from "react-icons/rx";


function Navbar() {
  const [isOpen ,setOpen] = useState(false);
  const handleClick = ()=>{
    setOpen(!isOpen)
  }
  return (
    
    <nav className="flex  justify-between w-full  md:w-[80%]  px-4 py-3 my-2  bg-transparent text-white mx-auto  font-serif capitalize ">
      <h2 className="logo text-3xl shadow-sm font-mono font-semibold">Deliveright</h2>
      <button 
       onClick={handleClick}
      className="md:hidden text-[24px] font-bold block px-2  py-1 ">
      <RxHamburgerMenu className="hamburger" />
      </button>
      <ul
     className={!isOpen?"hidden":"flex-col flex  md:hidden gap-6 absolute z-50 bg-[#525fe1] w-full top-20 transition-all  duration-150 scroll-smooth  py-4 text-center text-xl shadow-md left-0"}>
        <li>home</li>
        <li>about us</li>
        <li>services</li>
        <li>contact</li>
        <li>blog</li>
        <li><Button Children={"sign in"}/></li>
      </ul>
       
      <ul 
      className="md:flex hidden gap-6 text-xl py-3 ">
        <li>home</li>
        <li>about us</li>
        <li>services</li>
        <li>contact</li>
        <li>blog</li>
        <li><Button Children={"sign in"}/></li>
      </ul>
       
       
       
    </nav>
  );
}

export default Navbar;
