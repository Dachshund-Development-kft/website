import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMiniHome } from "react-icons/hi2";
import { HiUserAdd } from "react-icons/hi";
import { FaGithub } from 'react-icons/fa';
import { HiOutlineMenu } from "react-icons/hi";
import { IoStatsChart } from "react-icons/io5";
import getUser from '../api/getUser';

const NavLayout: React.FC = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const menuButtonRef = useRef<HTMLButtonElement>(null);
    const [user, setUser] = useState<any>(null);

    const navItems = [
        { path: "/", icon: <HiMiniHome />, label: "Főoldal" },
        { path: "/statistic", icon: <IoStatsChart />, label: "Statisztika" },
        { path: "/team", icon: <HiUserAdd />, label: "Csapat" },
    ];

    useEffect(() => {
        const checkUser = async () => {
            const success = await getUser();

            if (success) {
                setUser(true);
            }
        };

        checkUser();

        function handleClickOutside(event: MouseEvent) {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                menuButtonRef.current &&
                !menuButtonRef.current.contains(event.target as Node)
            ) {
                setIsMenuOpen(false);
            }
        }

        function handleScroll() {
            setIsMenuOpen(false);
        }

        if (isMenuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
            window.addEventListener("scroll", handleScroll);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
            window.removeEventListener("scroll", handleScroll);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isMenuOpen]);

    return (
        <div className="flex flex-row p-2 items-center bg-[#1A1B22] bg-opacity-30 relative">
            <div className="flex items-center">
                <Link to="/" className="text-white">
                    <img width={50} src="./Logo.svg" alt="Logo" title="Logo" />
                </Link>
            </div>
            <div className="lg:hidden ml-auto">
                <button
                    ref={menuButtonRef}
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="text-white mr-4 mt-1"
                >
                    <HiOutlineMenu size={30} />
                </button>
            </div>
            <nav
                ref={menuRef}
                className={`lg:hidden flex flex-col items-start gap-3 p-4 fixed top-16 right-0 bg-[#1A1B22] max-w-max w-auto h-auto transition-all duration-300 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    } z-50`}
            >
                <div className="flex flex-col items-start gap-2">
                    {navItems.map((item, index) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <div key={index} className={`flex flex-row items-center transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-50 hover:opacity-100"}`}>
                                <Link to={item.path} className="text-white flex items-center">
                                    {item.icon}
                                </Link>
                                <Link
                                    to={item.path}
                                    className={`text-white ml-1 relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:bg-white after:w-0 after:transition-all after:duration-300 ${isActive ? "after:w-full" : "hover:after:w-full after:opacity-100"
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            </div>
                        );
                    })}
                </div>
                <button className="bg-[#0F1015] text-white px-4 py-2 rounded-md shadow-lg hover:bg-gray-700 flex items-center gap-2 transition-all duration-300 w-full mt-2">
                    <FaGithub /> Login
                </button>
            </nav>

            <nav className="hidden lg:flex flex-row justify-center w-full">
                <div className="flex flex-row items-center gap-8">
                    {navItems.map((item, index) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <div key={index} className={`flex flex-row items-center transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-50 hover:opacity-100"}`}>
                                <Link to={item.path} className="text-white flex items-center">
                                    {item.icon}
                                </Link>
                                <Link
                                    to={item.path}
                                    className={`text-white ml-1 relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:bg-white after:w-0 after:transition-all after:duration-300 ${isActive ? "after:w-full" : "hover:after:w-full after:opacity-100"
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
                {user ? (

                    <a className="bg-[#0F1015] text-white px-4 py-2 rounded-md shadow-lg hover:bg-gray-700 flex items-center gap-2 transition-all duration-300" href='/dashboard'>
                        Dashboard
                    </a>
                ) : (
                    <a className="bg-[#0F1015] text-white px-4 py-2 rounded-md shadow-lg hover:bg-gray-700 flex items-center gap-2 transition-all duration-300" href='/login'>
                        Bejelentkezés
                    </a>
                )}
            </div>
        </div>
    );
};

export default NavLayout;