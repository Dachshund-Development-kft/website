import React from 'react';
import NavLayout from '../components/navLayout';
import Blobs from '../components/blobs';
import FooterLayout from '../components/footerLayout';

const MainPage: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen text-white">
            <NavLayout />
            <main className="flex-grow items-center">
                <div className="flex flex-col items-center justify-center h-screen">
                <div className="flex flex-col md:flex-row items-center mb-10 ml-0 md:ml-40 space-y-6 md:space-y-0 sm:mt-40">
    <div className="relative w-full md:w-auto flex justify-center md:justify-start">
        <img
            src="/backgroundImage.svg"
            alt="Background Image"
            className="absolute inset-0 w-full h-full object-cover opacity-50" />
        <img
            src="/mainPageLogo.svg"
            alt="Dachshund Logo"
            className="relative w-40 h-40 z-10" />
    </div>
    <div className="w-full md:w-auto flex flex-col text-center md:text-left pl-0 md:pl-2">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#5E78FF] to-[#384899] text-transparent bg-clip-text">
            <span>Dachshund</span><br />
            <span className="text-white">Development</span>
        </h1>
        <p className="text-sm text-gray-300 italic mt-2">
            Sigma app, sigma dolgok...
        </p>
    </div>
</div>


                    <div className="bg-[#291E7C] rounded-2xl shadow-xl p-8 max-w-md text-center" style={{ backgroundColor: 'rgba(41, 30, 124, 0.12)' }}>
                        <h2 className="text-4xl font-bold bg-gradient-to-r from-[#5E78FF] to-[#384899] text-transparent bg-clip-text">Rólunk</h2>
                        <p className="text-sm text-gray-300 mb-4">
                            A Dachshund Development elkötelezett az innovatív és hatékony informatikai
                            megoldások iránt. Célunk, hogy segítsük ügyfeleinket a digitális térben való fejlődésben
                            modern technológiákkal és szakértelemmel.
                        </p>
                        <ul className="text-sm text-gray-400 text-left list-disc pl-6">
                            <li>
                                <span className="text-white font-semibold">Webfejlesztés:</span> Felhasználóbarát weboldalak és alkalmazások.
                            </li>
                            <li>
                                <span className="text-white font-semibold">Egyedi szoftverfejlesztés:</span> Testreszabott megoldások.
                            </li>
                            <li>
                                <span className="text-white font-semibold">IT-infrastruktúra menedzsment:</span> Stabil rendszerek tervezése és üzemeltetése.
                            </li>
                        </ul>
                        <p className="text-sm text-gray-300 mt-4">
                            Hiszünk abban, hogy az informatika az innováció és a fejlődés kulcsa. Fedezzük fel együtt a digitális lehetőségeket!
                        </p>
                    </div>
                </div>
            </main>
            <FooterLayout />
            <Blobs />
        </div>
    );
};

export default MainPage;
