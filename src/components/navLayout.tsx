import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMiniHome } from "react-icons/hi2";
import { FaDiagramProject } from "react-icons/fa6";
import { HiUserAdd } from "react-icons/hi";
import { FaGithub } from 'react-icons/fa';
import { HiOutlineMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const NavLayout: React.FC = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { path: "/", icon: <HiMiniHome />, label: "Home" },
        { path: "/projects", icon: <FaDiagramProject />, label: "Projects" },
        { path: "/team", icon: <HiUserAdd />, label: "Team" },
    ];

    return (
        <div className="flex flex-row p-2 items-center bg-[#1A1B22] bg-opacity-50 relative">
            <div className="flex items-center">
                <Link to="/" className="text-white">
                    <img width={50} src="./Logo.svg" alt="Logo" title="Logo" />
                </Link>
            </div>
            <div className="lg:hidden ml-auto">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
                    {isMenuOpen ? <IoClose size={30} /> : <HiOutlineMenu size={30} />}
                </button>
            </div>

            {isMenuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-75 z-40" onClick={() => setIsMenuOpen(false)}></div>
            )}

            <nav
                className={`lg:hidden flex flex-col items-start gap-8 p-4 fixed top-0 right-0 bg-[#1A1B22] h-full w-64 z-50 transition-transform duration-300 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="flex flex-col items-start gap-4 mt-16">
                    {navItems.map((item, index) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <div
                                key={index}
                                className={`flex flex-row items-center transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-50 hover:opacity-100"}`}
                            >
                                <Link to={item.path} className="text-white flex items-center" onClick={() => setIsMenuOpen(false)}>
                                    {item.icon}
                                </Link>
                                <Link
                                    to={item.path}
                                    className={`text-white ml-1 relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:bg-white after:w-0 after:transition-all after:duration-300 ${isActive
                                            ? "after:w-full"
                                            : "hover:after:w-full after:opacity-100"
                                        }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            </div>
                        );
                    })}
                    <button className="bg-[#0F1015] text-white px-4 py-2 rounded-md shadow-lg hover:bg-gray-700 flex items-center gap-2 transition-all duration-300" onClick={() => setIsMenuOpen(false)}>
                        <FaGithub /> Login
                    </button>
                </div>
            </nav>

            <nav className="hidden lg:flex flex-row justify-center w-full">
                <div className="flex flex-row items-center gap-8">
                    {navItems.map((item, index) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <div
                                key={index}
                                className={`flex flex-row items-center transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-50 hover:opacity-100"}`}
                            >
                                <Link to={item.path} className="text-white flex items-center">
                                    {item.icon}
                                </Link>
                                <Link
                                    to={item.path}
                                    className={`text-white ml-1 relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:bg-white after:w-0 after:transition-all after:duration-300 ${isActive
                                            ? "after:w-full"
                                            : "hover:after:w-full after:opacity-100"
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </nav>
            <div className="hidden lg:flex items-center">
                <button className="bg-[#0F1015] text-white px-4 py-2 rounded-md shadow-lg hover:bg-gray-700 flex items-center gap-2 transition-all duration-300">
                    <FaGithub /> Login
                </button>
            </div>
        </div>
    );
};

export default NavLayout;