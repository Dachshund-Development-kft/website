import React from "react";
import { FaGithub } from 'react-icons/fa';
import { AiOutlineGlobal } from "react-icons/ai";

const FooterLayout: React.FC = () => {
  return (
    <footer className="w-full relative z-10 mt-48">
      <img src="/footerPhone.svg" alt="Footer" className="w-full opacity-10 md:hidden block" />
      <img src="/footerDesktop.svg" alt="Footer" className="w-full opacity-10 hidden md:block" />
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
          <p className="text-xs mt-2">Copyright © 2025 Dachsund Development</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterLayout;