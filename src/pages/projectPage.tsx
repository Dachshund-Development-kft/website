import React from 'react';
import NavLayout from '../components/navLayout';
import FooterLayout from '../components/footerLayout';

const ProjectPage: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen inset-0 bg-cover filter z-[-2] " style={{ backgroundImage: "url(/blobs.svg)" }}>
            <NavLayout />
            <main className="min-h-screen flex justify-center items-center">
                <div className="flex flex-wrap justify-center gap-6 w-full max-w-screen-xl lg:pt-0 pt-16">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 w-full max-w-7xl text-white">
                        <div className="bg-black bg-opacity-25 p-6 rounded-xl shadow-lg flex flex-col items-center text-center w-full min-w-[200px] sm:min-w-[250px] min-h-16">
                            <h2 className="text-2xl font-semibold mb-2">Work Here</h2>
                            <p className="text-gray-300 text-sm mb-4">The number of team members</p>
                            <span className="text-5xl font-bold">4</span>
                        </div>
                        <div className="bg-black bg-opacity-25 p-6 rounded-xl shadow-lg flex flex-col items-center text-center w-full min-w-[200px] sm:min-w-[250px] min-h-16">
                            <h2 className="text-2xl font-semibold mb-2">Total Points</h2>
                            <p className="text-gray-300 text-sm mb-4">The total amount of points</p>
                            <span className="text-5xl font-bold">0</span>
                        </div>
                        <div className="bg-black bg-opacity-25 p-6 rounded-xl shadow-lg flex flex-col items-center text-center w-full min-w-[200px] sm:min-w-[250px] min-h-16">
                            <h2 className="text-2xl font-semibold mb-2">Completed Tasks</h2>
                            <p className="text-gray-300 text-sm mb-4">The total number of completed tasks</p>
                            <span className="text-5xl font-bold">0</span>
                        </div>
                    </div>
                </div>
            </main>
            <FooterLayout />
        </div>
    );
};

export default ProjectPage;