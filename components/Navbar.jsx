import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
    const [isScroll, setIsScroll] = useState(false);
    const sideMenuRef = useRef();

    // Handle scroll behavior
    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle keyboard escape key to close menu
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') closeMenu();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    // Open and close mobile menu
    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)';
    };

    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)';
    };

    return (
        <>
            {/* Decorative Header Background */}
            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-75%] dark:hidden'>
                <Image src={assets.header_bg_color} alt='Header background' className='w-full' priority={true} />
            </div>

            {/* Main Navbar */}
            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50  ${isScroll ? "bg-whit bg-opacity-50 backdrop-blur-md shadow-sm dark:bg-darkTheme dark:shadow-white/20" : ""}`}>
                
                {/* Logo */}
                <a href="#top">
                    <Image
                        src={isDarkMode ? assets.logo_dark : assets.logo}
                        alt='Logo'
                        className={`w-44 cursor-pointer mr-14 transition-transform duration-300 ${isScroll ? "scale-90" : "scale-100"}`}
                    />
                </a>

                {/* Desktop Nav Links */}
                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"}`}>
                    <li><a className='font-Ovo' href="/#top">Home</a></li>
                    <li><a className='font-Ovo' href="/#about">About Me</a></li>
                    <li><a className='font-Ovo' href="/#services">Services</a></li>
                    <li><a className='font-Ovo' href="/#work">My Work</a></li>
                    <li><a className='font-Ovo' href="/#contact">Contact me</a></li>
                </ul>

                {/* Right Controls */}
                <div className='flex gap-4 items-center'>
                    {/* Dark mode toggle */}
                    <button onClick={() => setIsDarkMode(prev => !prev)} aria-label="Toggle Dark Mode">
                        <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt='Theme toggle' className='w-6' />
                    </button>

                    {/* Desktop Contact Button */}
                    <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50'>
                        Contact
                        <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} className='w-3' alt='Arrow icon' />
                    </a>

                    {/* Mobile Menu Toggle */}
                    <button onClick={openMenu} className='block md:hidden ml-3' aria-label="Open Menu">
                        <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt='Menu icon' className='w-6' />
                    </button>
                </div>

                {/* Mobile Side Menu */}
                <ul
                    ref={sideMenuRef}
                    className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition-transform duration-500 dark:bg-darkHover dark:text-white'
                >
                    <div className='absolute right-6 top-6' onClick={closeMenu}>
                        <Image src={isDarkMode ? assets.close_white : assets.close_black} alt='Close menu' className='w-5 cursor-pointer' />
                    </div>
                    <li><a className='font-Ovo' onClick={closeMenu} href="/#top">Home</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href="/#about">About Me</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href="/#services">Services</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href="/#work">My Work</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href="/#contact">Contact me</a></li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
