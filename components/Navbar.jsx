'use client'

import Link from 'next/link';
import { useState } from 'react';
import TopNavbar from './Topnavbar';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <div className='w-full'>
      <nav className="fixed w-[550px] sm:w-full bg-black border-b border-gray-800 shadow-2xl top-0 z-10 ">
        <div className="md:justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link href="/" legacyBehavior>
              <h2 className='text-2xl text-cyan-600 font-bold cursor-pointer'>
                Devfolio
              </h2>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <img src="/assests/close.svg" width={30} height={30} alt="logo" />
                ) : (
                  <img
                    src="/assests/hamburger-menu.svg"
                    width={30}
                    height={30}
                    alt="logo"
                    className="focus:border-none active:border-none"
                  />
                )}
              </button>
            </div>
          </div>
          <div className={`flex justify-self-end pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'p-12 md:p-0 block' : 'hidden'}`}>
            <ul className="h-screen md:h-auto items-center justify-center md:flex gap-5">
              <li className="text-sm  text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                <Link href="#home" onClick={() => setNavbar(!navbar)}>
                  Home
                </Link>
              </li>
              <li className="text-sm  text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                <Link href="#about" onClick={() => setNavbar(!navbar)}>
                  About
                </Link>
              </li>
              <li className="text-sm  text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                <Link href="#skills" onClick={() => setNavbar(!navbar)}>
                  Skills
                </Link>
              </li>
              <li className="text-sm  text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                <Link href="#work" onClick={() => setNavbar(!navbar)}>
                  Work
                </Link>
              </li>
              <li className="text-sm  text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                <Link href="#project" onClick={() => setNavbar(!navbar)}>
                  Projects
                </Link>
              </li>
              <li className="text-sm  text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                <Link href="#contact2" onClick={() => setNavbar(!navbar)}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <TopNavbar />
    </div>
  );
};

export default Navbar;

