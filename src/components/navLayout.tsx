import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMiniHome } from "react-icons/hi2";
import { FaDiagramProject } from "react-icons/fa6";
import { HiUserAdd } from "react-icons/hi";

const NavLayout: React.FC = () => {
    const location = useLocation();

    const navItems = [
        { path: "/", icon: <HiMiniHome />, label: "Főoldal" },
        { path: "/projects", icon: <FaDiagramProject />, label: "Projektek" },
        { path: "/team", icon: <HiUserAdd />, label: "Csapat" },
    ];

    return (
        <div className="flex flex-row bg-[#1A1B22] p-2 items-center">
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
                                className={`flex flex-row items-center ${
                                    isActive ? "opacity-100" : "opacity-50"
                                }`}
                            >
                                <Link to={item.path} className="text-white flex items-center">
                                    {item.icon}
                                </Link>
                                <Link
                                    to={item.path}
                                    className={`text-white ml-1 ${
                                        isActive ? "border-b-2 border-white" : ""
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
                <button className="bg-[#0F1015] text-white px-4 py-2 rounded-md shadow-lg hover:bg-gray-800">
                    Bejelentkezés
                </button>
            </div>
        </div>
    );
};

export default NavLayout;