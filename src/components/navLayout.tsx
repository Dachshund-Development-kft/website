import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMiniHome } from "react-icons/hi2";
import { FaDiagramProject } from "react-icons/fa6";
import { HiUserAdd } from "react-icons/hi";


const NavLayout: React.FC = () => {

    return (
        <>
            <div className="felx flex-row bg-[#1A1B22] opacity-[35] p-2">
                <nav className="flex flex-row justify-between">
                    <div className="flex flex-row">
                        <Link to="/" className="text-white"><img width={50} src="./Logo.svg" alt="Logo" title='Logo' /></Link>
                    </div>
                    <div className="flex flex-row m-auto">
                        <Link to="/" className="text-white"><HiMiniHome /> Főoldal</Link>
                        <Link to="/about" className="text-white ml-4"><FaDiagramProject /> Projektek</Link>
                        <Link to="/" className="text-white ml-4"><HiUserAdd /> Csapat</Link>
                    </div>
                    <div className="flex-e flex-row">
                        <Link to="/asd" className="text-white"><img width={50} src="" alt="" title='Logo' /></Link>
                    </div>
                </nav>  
            </div>
        </>
    );
};

export default NavLayout;