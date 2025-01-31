import React from 'react';
import Blobs from '../components/blobsLayout';
import NavLayout from '../components/navLayout';

const ErrorPage: React.FC = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen text-white">
                <NavLayout />
                <main className="flex-grow items-center">
                    <div className="flex flex-col items-center justify-center h-screen text-center">
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#5E78FF] to-[#384899] text-transparent bg-clip-text">
                            404 - Oldal nem található
                        </h1>
                        <p className="text-gray-300 italic mt-2 text-2xl">
                            A keresett oldal nem található.
                        </p>
                    </div>
                </main>
                <Blobs />
            </div>
        </>
    );
};

export default ErrorPage;