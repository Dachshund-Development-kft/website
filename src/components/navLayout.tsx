import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HiMiniHome } from "react-icons/hi2";
import { HiUserAdd } from "react-icons/hi";
import { HiOutlineMenu } from "react-icons/hi";
import { IoStatsChart } from "react-icons/io5";
import getUser from '../api/getUser';

const NavLayout: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const menuButtonRef = useRef<HTMLButtonElement>(null);
    const userMenuRef = useRef<HTMLDivElement>(null);
    const [user, setUser] = useState<any>(null);

    const navItems = [
        { path: "/", icon: <HiMiniHome />, label: "Főoldal" },
        { path: "/statistic", icon: <IoStatsChart />, label: "Statisztika" },
        { path: "/team", icon: <HiUserAdd />, label: "Csapat" },
    ];

    useEffect(() => {
        const checkUser = async () => {
            const response = await getUser();

            if (response.success) {
                setUser(response.data);
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

            if (
                userMenuRef.current &&
                !userMenuRef.current.contains(event.target as Node)
            ) {
                setIsUserMenuOpen(false);
            }
        }

        function handleScroll() {
            setIsMenuOpen(false);
            setIsUserMenuOpen(false);
        }

        if (isMenuOpen || isUserMenuOpen) {
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
    }, [isMenuOpen, isUserMenuOpen]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setUser(null);
        navigate('/login');
    };

    return (
        <div className="flex flex-row p-2 items-center bg-[#1A1B22] bg-opacity-30 relative">
            <div className="flex items-center mr-24">
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
                className={`lg:hidden flex flex-col items-start gap-3 p-4 fixed top-16 right-0 rounded-lg bg-[#1A1B22] max-w-max w-auto h-auto transition-all duration-300 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
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
                {user ? (
                    <div>
                        <button
                    onClick={handleLogout}
                    className="bg-[#0F1015] text-white px-4 py-2 rounded-md shadow-lg hover:bg-gray-700 flex items-center gap-2 transition-all duration-300 w-full mt-2"
                >
                    Kijelentkezés
                </button>
                <Link to={"/dashboard"}>
                <button
                    className="bg-[#0F1015] text-white px-4 py-2 rounded-md shadow-lg hover:bg-gray-700 flex items-center gap-2 transition-all duration-300 w-full mt-2"
                >
                    Dashboard
                </button>
                </Link>
                    </div>
                    
                
                
                ) : (
                    <a
                        href="/login"
                        className="bg-[#0F1015] text-white px-4 py-2 rounded-md shadow-lg hover:bg-gray-700 flex items-center gap-2 transition-all duration-300 w-full mt-2"
                    >
                        Bejelentkezés
                    </a>
                )}
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
            <div className="hidden lg:flex items-center relative">
                {user ? (
                    <div ref={userMenuRef} className="relative w-full">
                        <button
                            onClick={() => setIsUserMenuOpen((prev) => !prev)}
                            className="bg-[#0F1015] text-white px-4 py-2 rounded-md shadow-lg hover:bg-gray-700 flex items-center gap-2 transition-all duration-300 w-40"
                        >
                            <div className="w-full">{user.user}</div>
                        </button>
                        {isUserMenuOpen && (
                            <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-[#0F1015] z-50">
                                <div className="py-1">
                                    <a
                                        href="/dashboard"
                                        className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                                    >
                                        Dashboard
                                    </a>
                                    <button
                                        onClick={handleLogout}
                                        className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-700"
                                    >
                                        Kijelentkezés
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
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