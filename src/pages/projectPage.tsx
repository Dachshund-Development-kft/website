import React from 'react';
import NavLayout from '../components/navLayout';
import Blobs from '../components/blobs';
import FooterLayout from '../components/footerLayout';

const ProjectPage: React.FC = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen text-white">
                <NavLayout />
                <main className="flex flex-col items-center justify-center flex-1 py-16 px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl px-4">
                        {[ 
                            { title: 'Easy Projects', color: 'text-green-400', description: 'Simple and quick tasks', count: 0 },
                            { title: 'Normal Projects', color: 'text-orange-400', description: 'Standard complexity projects', count: 0 },
                            { title: 'Hard Projects', color: 'text-red-500', description: 'Challenging and demanding', count: 0 },
                            { title: 'Brutal Projects', color: 'text-yellow-500', description: 'Extreme level projects', count: 0 }
                        ].map((project, index) => (
                            <div key={index} className="bg-black bg-opacity-25 p-8 rounded-xl shadow-lg flex flex-col items-center text-center min-w-[250px] w-full sm:w-80">
                                <h2 className={`text-2xl font-semibold ${project.color} mb-2`}>{project.title}</h2>
                                <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                                <span className="text-5xl font-bold">{project.count}</span>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
            <FooterLayout />
            <Blobs />
        </>
    );
}

export default ProjectPage;