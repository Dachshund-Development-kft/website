import React from 'react';
import NavLayout from '../components/navLayout';
import FooterLayout from '../components/footerLayout';
import { FaUser, FaLock } from 'react-icons/fa';

const LoginPage: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen text-white bg-cover bg-repeat-y" style={{ backgroundImage: "url(/blobs.svg)" }}>
            <NavLayout />
            <main className="flex flex-grow items-center justify-center py-16">
                <form className="bg-black bg-opacity-30 rounded-2xl shadow-xl p-6 w-full max-w-sm text-center">
                    <h2 className="text-3xl font-bold bg-white bg-clip-text">
                        Bejelentkezés
                    </h2>
                    <div className="flex flex-col gap-4 mt-10">
                        <div className="flex items-center bg-black text-white rounded-lg p-3 focus-within:ring-2 focus-within:ring-blue-500 transform duration-300">
                            <FaUser className="text-gray-500 mr-2" />
                            <input type="text" placeholder="Felhasználónév" className="bg-transparent flex-1 outline-none focus:ring-0" />
                        </div>
                        <div className="flex items-center bg-black text-white rounded-lg p-3 focus-within:ring-2 focus-within:ring-blue-500 transform duration-300">
                            <FaLock className="text-gray-500 mr-2" />
                            <input type="password" placeholder="Jelszó" className="bg-transparent flex-1 outline-none focus:ring-0" />
                        </div>
                        <button type="submit" className="bg-[#0F1015] text-white px-5 py-3 rounded-lg shadow-lg flex items-center justify-center gap-2 hover:opacity-90 transition-all duration-300 w-full mt-4">
                            Bejelentkezés
                        </button>
                    </div>
                </form>
            </main>
            <FooterLayout />
        </div>
    );
};

export default LoginPage;