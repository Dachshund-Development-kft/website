import React from 'react';
import NavLayout from '../components/navLayout';
import FooterLayout from '../components/footerLayout';

const MainPage: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url(/blobs.svg)" }}>
            <NavLayout />
            <main className="items-center container mx-auto mb-auto">
                <div className="items-center justify-center flex flex-col">
                    <div className="lg:flex flex-none m-0 mt-16 lg:my-16 ">
                        <div className="relative w-full flex justify-center lg:justify-start">
                            <img
                                src="/mainPageLogo.svg"
                                alt="Dachshund Logo"
                                className="relative w-52 h-52 lg:w-64 lg:h-64 2xl:w-80 2xl:h-80 z-10 md:mr-8 sm:mr-0" />
                        </div>
                        <div className="lg:my-auto lg:ml-8 my-12 ml-12 mx-auto">
                            <h1 className="text-4xl font-bold bg-gradient-to-r from-[#5E78FF] to-[#384899] text-transparent bg-clip-text">
                                <span>Dachshund</span><br />
                                <span className="text-white">Development</span>
                            </h1>
                            <p className="text-gray-300 italic mt-2 text-2xl">
                                Sigma app, sigma dolgok...
                            </p>
                        </div>
                    </div>

                    <div className="bg-[#291E7C] rounded-2xl shadow-xl p-8 mx-6 sm:max-w-md md:max-w-2xl text-center md:pl-24 md:pr-24 md:pt-12 md:pb-12" style={{ backgroundColor: 'rgba(41, 30, 124, 0.12)' }}>
                        <h2 className="text-4xl font-bold bg-gradient-to-r from-[#5E78FF] to-[#384899] text-transparent bg-clip-text">Rólunk</h2>
                        <p className="md:text-lg sm:text-sm text-gray-300 mb-4 text-left">
                            A Dachshund Development elkötelezett az innovatív és hatékony informatikai
                            megoldások iránt. Célunk, hogy segítsük ügyfeleinket a digitális térben való fejlődésben
                            modern technológiákkal és szakértelemmel.
                        </p><br />
                        <ul className="md:text-lg sm:text-sm text-gray-400 text-left list-disc pl-6">
                            <li>
                                <span className="text-white font-semibold">Webfejlesztés:</span> Felhasználóbarát weboldalak és alkalmazások.
                            </li>
                            <li>
                                <span className="text-white font-semibold">Egyedi szoftverfejlesztés:</span> Testreszabott megoldások.
                            </li>
                            <li>
                                <span className="text-white font-semibold">IT-infrastruktúra menedzsment:</span> Stabil rendszerek tervezése és üzemeltetése.
                            </li>
                        </ul><br />
                        <p className="md:text-lg sm:text-sm text-gray-300 mt-4 text-left">
                            Hiszünk abban, hogy az informatika az innováció és a fejlődés kulcsa. Fedezzük fel együtt a digitális lehetőségeket!
                        </p>
                    </div>
                    {/*
                        <div id='scroll' className="text-center mb-96 block lg:hidden" style={{ width: "100%"}}>
                        <h2 className="text-4xl font-bold bg-gradient-to-r from-[#5E78FF] to-[#384899] text-transparent bg-clip-text my-10">Partnereink</h2>
                        <div className="relative w-full h-96 overflow-hidden">
                        {partnersMobile.map((partner, index) => (
                                <div key={index} className={`footer-bg footer_bg${index + 1} footerphone`}>
                                    <a href={partner.url}>
                                        <div className="max-w-56 rounded-2xl overflow-hidden shadow-lg bg-black bg-opacity-30">
                                            <div className='m-8'>
                                                <img className="w-full h-40" src={partner.logo} alt={partner.name} />
                                            </div>
                                            <div className="px-6 py-4">
                                                <div className="font-bold text-xl mb-2">{partner.name}</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div id='scroll' className="text-center mb-32 lg:block hidden" style={{ width: "130%" }}>
                        <h2 className="text-4xl font-bold bg-gradient-to-r from-[#5E78FF] to-[#384899] text-transparent bg-clip-text my-10">Partnereink</h2>
                        <div className="relative w-full h-96 overflow-hidden">
                            {partnersDesktop.map((partner, index) => (
                                <div key={index} className={`footer-bg footerbg${index + 1}`}>
                                    <a href={partner.url}>
                                        <div className="max-w-56 rounded-2xl overflow-hidden shadow-lg bg-black bg-opacity-30">
                                            <div className='m-8'>
                                                <img className="w-full" src={partner.logo} alt={partner.name} />
                                            </div>
                                            <div className="px-6 py-4">
                                                <div className="font-bold text-xl mb-2">{partner.name}</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                    */}
                </div>
            </main>
            <FooterLayout />
        </div>
    );
};

export default MainPage;