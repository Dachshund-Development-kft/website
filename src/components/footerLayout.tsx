import React, { useState, useEffect } from "react";
import { FaGithub } from 'react-icons/fa';
import { AiOutlineGlobal } from "react-icons/ai";
import getVerison from "../api/version";

const FooterLayout: React.FC = () => {
  const [version, setVersion] = useState<string>('');

  useEffect(() => {
    getVerison().then(data => {
      setVersion(data.version);

      console.log(data);
    });
  }, []);

  const calcalutaTime = (time: string) => {
    const date = new Date(time);
    const days = Math.floor((new Date().getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((new Date().getTime() - date.getTime()) / (1000 * 60 * 60));
    const minutes = Math.floor((new Date().getTime() - date.getTime()) / (1000 * 60));

    if (days > 0) {
      return `${days} napja és ${hours - (days * 24)} órája`;
    } else if (hours > 0) {
      return `${hours} órája és ${minutes - (hours * 60)} perce`;
    } else {
      return `${minutes} perce`;
    }
  };

return (
  <footer className="w-full relative z-10 mt-20">
    <img src="/footersm.svg" alt="FooterSM" className="w-full opacity-10 md:hidden block " />
    <img src="/footermd.svg" alt="FooterMD" className="w-full opacity-10 hidden md:block lg:hidden" />
    <img src="/footerlg.svg" alt="FooterLG" className="w-full opacity-10 hidden lg:block xl:hidden" />
    <img src="/footerxl.svg" alt="FooterXL" className="w-full opacity-10 hidden xl:block 2xl:hidden" />
    <img src="/footer2xl.svg" alt="Footer2XL" className="w-full opacity-10 hidden 2xl:block 3xl:hidden" />
    <img src="/footer3xl.svg" alt="Footer3XL" className="w-full opacity-10 hidden 3xl:block 4xl:hidden" />
    <img src="/footer4xl.svg" alt="Footer4XL" className="w-full opacity-10 hidden 4xl:block" />
    <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center py-4">
      <div className="text-center text-white">
        <div className="flex justify-center space-x-4">
          <a href="https://github.com/Dachshund-Development-kft/website" target="_blank" className="hover:text-[#5E78FF] transition-colors duration-300">
            <FaGithub size={24} />
          </a>
          <a href="https://dachats.online/" target="_blank" className="hover:text-[#5E78FF] transition-colors duration-300">
            <AiOutlineGlobal size={24} />
          </a>
        </div>
        <p className="text-xs mt-2">Utólsó Frissítés ideje: <span className="text-sm underline">{`${calcalutaTime(version)}`}</span></p>
        <p className="text-xs mt-2">Copyright © 2025 Dachsund Development</p>
      </div>
    </div>
  </footer>
);
};

export default FooterLayout;