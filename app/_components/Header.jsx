'use client'

import React, { useContext, useEffect, useState } from 'react';
import '../_styles/Header.css';
import { UserButton, useUser } from '@clerk/nextjs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faShoppingCart, faBars, faTimes, faHome, faProjectDiagram, faInfo, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../_context/CartContext';
import Cart from './Cart';
import GlobalApi from '../_utils/GlobalApi';
import Link from 'next/link';
import logo from '..//../public/myshop-Logo.png'
import Image from 'next/image';
function Header() {
  const { user, isLoaded } = useUser();
  const [isLogin, setIsLogIn] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const { cart, setCart } = useContext(CartContext);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      if (window.location.href.includes('sign-in') || window.location.href.includes('sign-up')) {
        setIsLogIn(true);
      } else {
        setIsLogIn(false);
      }
      if (user) {
        getUserCartItems_();
      }
    }
  }, [user, isLoaded]);

  const getUserCartItems_ = () => {
    GlobalApi.getUserCartItems(user?.primaryEmailAddress.emailAddress).then((res) => {
      setCart(res.data);
    });
  };

 

  return (
    !isLogin && (
      <header className="bg-transparent ">
        <div className="mx-auto max-w-screen px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <a className="block text-teal-600" href="/">
                {/* Logo space */}
                <Image height={40} width={40} src={logo} />
              </a>
            </div>

            {/* Navbar for larger screens */}
            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center font-bold gap-6 text-sm">
                  <li>
                    <a className="nav-link text-white transition hover:text-purple-600" href="/"> Home </a>
                  </li>
                  <li>
                    <a className="nav-link text-white transition hover:text-purple-600" href="/explore"> Explore </a>
                  </li>
                 
                  <li>
                    <a className="nav-link text-white transition hover:text-purple-600" href="/about"> About</a>
                  </li>
                  <li>
                    <a className="nav-link text-white transition hover:text-purple-600" href="/contact"> Contact</a>
                  </li>
                  <li>
                    <a className="nav-link text-white transition hover:text-purple-600" href="/privacypolicy"> Privacy Policy</a>
                  </li>
                  <li>
                    <a className="nav-link text-white transition hover:text-purple-600" href="/disclaimer"> Disclaimer</a>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Cart, Orders, and User Button */}
            <div className="flex items-center gap-4">
            {!user ? (
              <div className="sm:flex sm:gap-4">
                {/* Sign in button with loading state */}
                {!isLoaded ? (
                  <div className="bg-slate-600 animate-pulse rounded-md px-5 py-2.5 text-sm font-medium text-white shadow h-9 w-20"></div>
                ) : (
                  <a className="rounded-md bg-button1 px-5 py-2.5 text-sm font-medium text-white shadow" href="/sign-in">
                    Sign in
                  </a>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-5">
                {/* Cart button with loading state */}
                {!isLoaded ? (
                  <div className="bg-slate-600 ml-2 animate-pulse rounded-md h-9 w-24"></div>
                ) : (
                  <h2 onClick={() => setOpenCart(!openCart)} className="flex items-center gap-2 cursor-pointer">
                    <FontAwesomeIcon icon={faShoppingCart} /> ({cart?.data?.length})
                  </h2>
                )}

                {/* Download button with loading state */}
                {!isLoaded ? (
                  <div className="bg-slate-600 ml-2 animate-pulse rounded-md h-9 w-12"></div>
                ) : (
                  <Link href={'/orders'}><FontAwesomeIcon icon={faDownload} /></Link>
                )}

                <UserButton />
                </div>
              )}
              {openCart && <Cart />}

              {/* Hamburger Menu for smaller screens */}
              <div className="block md:hidden">
                <button
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                  className="rounded bg-none p-2 text-gray-100 transition hover:text-gray-600/75"
                >
                  <FontAwesomeIcon icon={isSidebarOpen ? faTimes : faBars} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar for smaller screens */}
        <div
          className={`fixed z-30 top-0 right-0 h-full bg-black w-64 transform transition-transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
            } md:hidden`}
        >
          <nav className="flex flex-col p-4">
            <div className="py-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold">Menu</h2>
              <FontAwesomeIcon icon={faTimes} onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-white text-xl">

              </FontAwesomeIcon>
            </div>

            <ul className="flex flex-col gap-6 text-lg">
              <li className='bg-slate-900 p-2 rounded-md'>
                <a href="/" className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faHome} />
                  Home
                </a>
              </li>
              <li className='bg-slate-900 p-2 rounded-md'>
                <a href="/explore" className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faProjectDiagram} />
                  Explore
                </a>
              </li>
              <li className='bg-slate-900 p-2 rounded-md'>
                <a href="/about" className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faInfo} />
                  About Us
                </a>
              </li>
              <li className='bg-slate-900 p-2 rounded-md'>
                <a href="/contact" className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faEnvelope} />
                  Contact Us
                </a>
              </li>
              <li className='bg-slate-900 p-2 rounded-md'>
                <a href="/privacypolicy" className="flex items-center gap-3">
                 
                  Privacy Policy
                </a>
              </li>
              <li className='bg-slate-900 p-2 rounded-md'>
                <a href="/disclaimer" className="flex items-center gap-3">
                  
                  Disclaimer
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    )
  );
}

export default Header;
