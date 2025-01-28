import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMiniHome } from "react-icons/hi2";
import { FaDiagramProject } from "react-icons/fa6";
import { HiUserAdd } from "react-icons/hi";
import { FaGithub } from 'react-icons/fa';

const NavLayout: React.FC = () => {
    const location = useLocation();

    const navItems = [
        { path: "/", icon: <HiMiniHome />, label: "Home" },
        { path: "/projects", icon: <FaDiagramProject />, label: "Projects" },
        { path: "/team", icon: <HiUserAdd />, label: "Team" },
    ];

    return (
        <div className="flex flex-row p-2 items-center bg-[#1A1B22] bg-opacity-50">
            <div className="flex items-center">
                <Link to="/" className="text-white">
                    <img width={50} src="./Logo.svg" alt="Logo" title="Logo" />
                </Link>
            </div>

            <nav className="flex flex-row justify-center w-full">
                <div className="flex flex-row items-center gap-8">
                    {navItems.map((item, index) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <div
                                key={index}
                                className={`flex flex-row items-center transition-opacity duration-300 ${
                                    isActive ? "opacity-100" : "opacity-50 hover:opacity-100"
                                }`}
                            >
                                <Link to={item.path} className="text-white flex items-center">
                                    {item.icon}
                                </Link>
                                <Link
                                    to={item.path}
                                    className={`text-white ml-1 relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:bg-white after:w-0 after:transition-all after:duration-300 ${
                                        isActive
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