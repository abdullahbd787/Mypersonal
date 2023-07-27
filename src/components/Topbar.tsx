"use client";
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import logopic from "./images/download-removebg-preview.png";

const Topbar = () => {
  const [visible, setVisible] = useState(false);
  const handleToggle = () => {
    setVisible(!visible);
  };
  return (
    <>
      <div className=" bg-blue-600	 text-white">
        <div className="container flex h-20 justify-between mx-auto px-4 w-screen sm:w-[600px] md:w-[728px] lg:w-[990px] xl:w-[1260px] 2xl:w-[1470px]">
          <div className="logo flex items-center">
            <Image className="w-24" src={logopic} alt="" />
            <Link href="/home">
              <h2 className="md:text-[28px] text-[24px] font-serif font-semibold ">
                Abdullah
              </h2>
            </Link>
          </div>

          <ul className="hidden md:flex items-center gap-8">
            <Link href="/home">
              <li className="hover:text-[#83ff00d1] transition-[1s]">Home</li>
            </Link>
            <Link href="/about">
              <li className="hover:text-[#83ff00d1] transition-[1s]">About</li>
            </Link>
            <Link href="/service">
              <li className="hover:text-[#83ff00d1] transition-[1s]">
                Service
              </li>
            </Link>
            <Link href="/blog">
              <li className="hover:text-[#83ff00d1] transition-[1s]">Blog</li>
            </Link>
            <Link href="/contact">
              <li className="hover:text-[#83ff00d1] transition-[1s]">
                Contact
              </li>
            </Link>
          </ul>

          <div onClick={handleToggle} className="md:hidden flex items-center">
            <a href="#">
              {" "}
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </div>
      {visible && (
        <ul className="bg-pink-600 md:hidden flex flex-col items-center justify-center gap-8">
          <Link href="/home">
            <li className="hover:text-[#83ff00d1] transition-[1s]">Home</li>
          </Link>
          <Link href="/about">
            <li className="hover:text-[#83ff00d1] transition-[1s]">About</li>
          </Link>
          <Link href="/service">
            <li className="hover:text-[#83ff00d1] transition-[1s]">Service</li>
          </Link>
          <Link href="/blog">
            <li className="hover:text-[#83ff00d1] transition-[1s]">Blog</li>
          </Link>
          <Link href="/contact">
            <li className="hover:text-[#83ff00d1] transition-[1s]">Contact</li>
          </Link>
        </ul>
      )}
    </>
  );
};
export default Topbar;
