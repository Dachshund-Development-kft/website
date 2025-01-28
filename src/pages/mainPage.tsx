import React from 'react';
import NavLayout from '../components/navLayout'
import Blobs from '../components/blobs'
import FooterLayout from '../components/footerLayout';

const MainPage: React.FC = () => {
    return (
        <>
            <NavLayout />
            <main className="items-center text-white">
                <div className="flex flex-col items-center justify-center h-screen">
                    <h1 className="text-5xl font-bold">Welcome to the<br />Main Page!</h1>
                    <p className="text-lg">This is the main page of the website.</p>
                </div>
            </main>
            <FooterLayout />
            <Blobs/>
        </>
    );
};

export default MainPage;