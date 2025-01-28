import React from 'react';
import NavLayout from '../components/navLayout'
import Blobs from '../components/blobs'

const MainPage: React.FC = () => {
    return (
        <>
            <NavLayout />
            <Blobs/>
            <main className="items-center  text-white">
                
            </main>
        </>
    );
};

export default MainPage;