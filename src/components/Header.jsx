


import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import Logo from "../img/logo.svg";
import { BsBag } from "react-icons/bs";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [showMsg, setShowMsg] = useState(false);

  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  useEffect(() => {
    if (itemAmount > 0) {
      setShowMsg(true);
      const timer = setTimeout(() => setShowMsg(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [itemAmount]);

  // useEffect(() => {
  //   const handleScroll = () => setIsActive(window.scrollY > 60);
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);


useEffect(() => {
  const handleScroll = () => setIsActive(window.scrollY > 60);
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll); // CLEANUP here!
}, []);





  return (
    <>
      <header
        className={`${
          isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
        } fixed w-full z-10 lg:px-8 font-black transition-all`}
      >
        <div className="container mx-auto flex items-center justify-between h-full">
          <Link to={"/"}>
            <div className="w-[40px] flex items-center gap-x-2">
              <img src={Logo} alt="" />
              <h1 className="text-2xl text-black font-semibold">FakeStore</h1>
            </div>
          </Link>
          {/* cart */}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer flex relative"
          > 
            <BsBag className="text-2xl text-black font-semibold mr-3" />
           
            <div className="bg-blue-500 absolute -right-2 -bottom-2 text-[12px] mr-2 w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
              {itemAmount}
            </div>
          </div>
        </div>
      </header>
      {/* Tailwind animated notification */}
      {showMsg && (
        <div className="fixed top-20 right-6 z-[999] text-white font-semibold rounded-lg shadow-lg px-7 py-3 bg-green-500 animate-slide-down">
          Item added to cart!
        </div>
      )}
      {/* Tailwind CSS for the animation */}
      <style>
        {`
          .animate-slide-down {
            animation: slide-down 0.3s cubic-bezier(.7,.5,.3,1.5);
            animation-delay: 0s;
          }
          @keyframes slide-down {
            0% { opacity:0; transform:translateY(-20px);}
            100% { opacity:1; transform:translateY(0);}
          }
        `}
      </style>
    </>
  );
};

export default Header;




