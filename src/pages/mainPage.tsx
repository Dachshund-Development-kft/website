import React from 'react';
import NavLayout from '../components/navLayout'
import Blobs from '../components/blobs'
import FooterLayout from '../components/footerLayout';

const MainPage: React.FC = () => {
    return (
        <>
            <NavLayout />
            <Blobs/>
            <main className="items-center  text-white">
                
            </main>
            <FooterLayout />
        </>
    );
};

export default MainPage;