import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMiniHome } from "react-icons/hi2";
import { FaDiagramProject } from "react-icons/fa6";
import { HiUserAdd } from "react-icons/hi";
import { FaGithub } from 'react-icons/fa';
import { HiOutlineMenu } from "react-icons/hi";

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
                    <HiOutlineMenu size={30} />
                </button>
            </div>
            <nav className={`flex flex-col items-start gap-8 p-4 fixed top-16 right-0 bg-[#1A1B22] max-w-max w-auto h-auto transition-all duration-300 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} lg:translate-x-0 lg:flex-row lg:static lg:w-auto lg:h-auto lg:bg-transparent z-50`}>
                <div className="flex flex-col items-start gap-4">
                    {navItems.map((item, index) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <div
                                key={index}
                                className={`flex flex-row items-center transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-50 hover:opacity-100"
                                    }`}
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
            <div className="flex items-center">
                <button className="bg-[#0F1015] text-white px-4 py-2 rounded-md shadow-lg hover:bg-gray-700 flex items-center gap-2 transition-all duration-300">
                    <FaGithub /> Login
                </button>
            </div>
        </div>
    );
};

export default NavLayout;
