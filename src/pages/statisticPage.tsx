import React from 'react';
import NavLayout from '../components/navLayout';
import FooterLayout from '../components/footerLayout';

const StatisticPage: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url(/blobs.svg)" }}>
            <NavLayout />
            <main className="flex flex-col flex-grow justify-center items-center px-4">
                <h1 className='text-white text-5xl font-bold my-10 text-center'>Statistic</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl text-white">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-black bg-opacity-30 p-8 rounded-2xl shadow-xl flex flex-col items-center text-center w-full min-h-[180px]">
                            <h2 className="text-2xl font-semibold mb-2">{stat.title}</h2>
                            <p className="text-gray-300 text-sm mb-4">{stat.description}</p>
                            <span className="text-5xl font-bold">{stat.value}</span>
                        </div>
                    ))}
                </div>
            </main>
            <FooterLayout />
        </div>
    );
};

const stats = [
    { title: "Work Here", description: "The number of team members", value: 4 },
    { title: "Total Points", description: "The total amount of points", value: 0 },
    { title: "Completed Tasks", description: "The total number of completed tasks", value: 0 }
];

export default StatisticPage;