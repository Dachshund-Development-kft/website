import React from 'react';
import NavLayout from '../components/navLayout'
import Blobs from '../components/blobs'
import FooterLayout from '../components/footerLayout';

const MainPage: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <NavLayout />
            <main className="flex-grow items-center text-white">
                <div className='flex flex-col items-center justify-center h-screen'>
                    <h1 className='text-6xl'>Welcome to our website!</h1>
                    <p className='text-xl'>This is a sample project for the Tailwind CSS crash course.</p>
                </div>
            </main>
            <FooterLayout />
            <Blobs />
        </div>
    );
};

export default MainPage;