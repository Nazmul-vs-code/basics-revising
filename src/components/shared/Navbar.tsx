'use client'
import Link from "next/link";
import { FaHome, FaTasks, FaThemeco, FaThLarge, FaUser } from "react-icons/fa";
import MyNavLink from "./MyNavLink";

export const NavLinks = [
    {
        id: 1,
        name: "Home",
        href: "/",
        icon: FaHome,
    },
    {
        id: 2,
        name: "Tasks",
        href: "/tasks",
        icon: FaTasks,
    },
    {
        id: 3,
        name: "Categories",
        href: "/categories",
        icon: FaThLarge,
    },
    {
        id: 4,
        name: "Profile",
        href: "/profile",
        icon: FaUser,
    },
    {
        id: 5,
        name: "Theme",
        href: "/theme",
        icon: FaThemeco,
    },
];


const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">

                            {
                            NavLinks.map((nav, i) => {
                                const NavIcon = nav?.icon

                                return <div key={i}>
                                    <li  > <MyNavLink href={nav.href} text={nav?.name} NavIcon={NavIcon}>
                                    
                                        
                                    </MyNavLink> </li>
                                </div >
                            }
                            )
                        }
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            NavLinks.map((nav, i) => {
                                const NavIcon = nav?.icon

                                return <div key={i}>
                                    <li  > <MyNavLink href={nav.href} text={nav?.name} NavIcon={NavIcon}>
                                        
                                        
                                    </MyNavLink> </li>
                                </div >
                            }
                            )
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;