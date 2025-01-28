import React from 'react';
import NavLayout from '../components/navLayout';
import Blobs from '../components/blobs'
import FooterLayout from '../components/footerLayout';

const ProjectPage: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <NavLayout />
            <main className="flex-grow items-center text-white">
                <div className='flex flex-col items-center justify-center h-screen'>
                    
                </div>
            </main>
            <FooterLayout />
            <Blobs />
        </div>
    );
};

export default ProjectPage;