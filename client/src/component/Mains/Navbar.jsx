import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

import { useClerk, useUser, UserButton } from '@clerk/clerk-react';
import { allData, assets } from '../../assets/assets.js';

import { useSelector } from 'react-redux';



const Navbar = () => {

    const currency = useSelector((state) => state.currency)
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Hotels', path: '/rooms' },
        { name: 'Flights', path: '/flights' },
        { name: 'Restaurants', path: '/restarents' },
        { name: 'Destinations', path: '/destinations' },
    ];

    const [isScrolled, setIsScrolled] = useState(false);
    const { openSignIn } = useClerk()
    const { user } = useUser()
    const location = useLocation()

    useEffect(() => {
        if (location.pathname !== '/') {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
        setIsScrolled(prev => location.pathname !== '/' ? true : prev)
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);



    return (
        <nav className={`fixed top-0 left-0  w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${(location.pathname === "/restarents" || location.pathname === "/rooms") && "bg-gray-300"}  ${isScrolled ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4" : "py-4 md:py-6"}`}>
            <Link to='/'>
                <img src={assets.logo} alt="logo" className={`h-9 `} />
            </Link>
            <div className="hidden md:flex items-center gap-4 lg:gap-8">
                {navLinks.map((link, i) => (
                    <Link
                        key={i}
                        to={link.path}
                        className={`group flex flex-col gap-0.5 ${isScrolled ? "text-gray-700" : "text-white"}`} >
                        {link.name}
                        <div className={`${isScrolled ? "bg-gray-700" : "bg-white"} h-0.5 w-0 group-hover:w-full transition-all duration-300`} />
                    </Link>
                ))}
            </div>
            {currency && currency !== "" &&
                <div>Selected currency:{currency}</div>
            }
            <div className="hidden md:flex items-center gap-4">
                {user ?
                    (<UserButton />) :
                    (<button onClick={openSignIn} className="bg-black text-white px-8 py-2.5 rounded-full ml-4 transition-all duration-500">  Login </button>)
                }
            </div>
        </nav>
    );
}

export default Navbar;




































