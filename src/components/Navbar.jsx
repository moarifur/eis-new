import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import {navLinks} from "../contents/index.js";


const Navbar = () => {

    const [active, setActive] = useState('')
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Scrolling feature
    useEffect(() => {
        const handleScroll = () => window.scrollY > 90 ? setScrolled(true) : setScrolled(false)
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`sm:px-16 px-6 w-full flex items-center py-3 fixed top-0 z-20 ${scrolled ? "bg-[#708d81]" : "bg-transparent"}`}>

            {/* Left side of the navbar: Logo & Stuff */}
            <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
                <Link to='/' className='flex item-center gap-2' onClick={() => {
                    setActive('')
                    window.scrollTo(0, 0)
                }}>
                </Link>
            </div>

            {/* Right side of the navbar: Menu */}
            <ul className='list-none hidden sm:flex flex-row gap-5'>
                {navLinks.map((nav) => (
                    <li
                        key={nav.id}
                        // className={`${active === nav.title ? "text-white rounded-[25px] bg-black" : "text-white"} p-2 hover:text-white hover:rounded-[25px] hover:bg-[#f5ebe0] text-[18px] font-medium cursor-pointer`}
                        className={`${active === nav.title ? "text-amber-300" : "text-white"} p-2 hover:text-amber-300  text-[20px] cursor-pointer`}
                        onClick={() => setActive(nav.title)}
                    >
                        <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;