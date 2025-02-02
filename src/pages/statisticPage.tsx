import React, { useEffect, useState } from 'react';
import NavLayout from '../components/navLayout';
import FooterLayout from '../components/footerLayout';
import getStats from '../api/stats';

const StatisticPage: React.FC = () => {
    const [points, setPoints] = useState<number>(0);
    const [tasks, setTasks] = useState<number>(0);

    useEffect(() => {
        getStats().then(async data => {
            setPoints(data.data.points);

            let completedTasks = 0;
            data.data.tasks.forEach(() => {
                completedTasks++;
            });

            setTasks(completedTasks);
        });
    }, []);

    const stats = [
        { title: "Dolgozók", description: "", value: 4 },
        { title: "Pontjaink", description: "", value: points },
        { title: "Feladatok", description: "", value: tasks }
    ];

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

export default StatisticPage;