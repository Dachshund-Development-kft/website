import React from "react";
import { FaGithub } from 'react-icons/fa';

const FooterLayout: React.FC = () => {
  return (
    <footer className="w-full relative z-10 mt-32">
      <img src="/footer.svg" alt="Footer" className="w-full opacity-10" />
      <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center py-4">
        <div className="text-center text-white">
          <a href="" target="_blank" className="hover:text-[#5E78FF] transition-colors duration-300">
            <FaGithub size={24} className="m-auto"/>
          </a>
          <p className="text-xs mt-2">Copyright © 2025 Dachsund Development</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterLayout;