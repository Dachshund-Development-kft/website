import React, { useEffect, useState } from 'react';
import NavLayout from '../../components/navLayout';
import FooterLayout from '../../components/footerLayout';
import getStats from '../../api/stats';

const useCountUp = (targetValue: number, duration: number = 1000) => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (targetValue === 0) return;

        const start = performance.now();
        const updateValue = (currentTime: number) => {
            const elapsedTime = currentTime - start;
            const progress = Math.min(elapsedTime / duration, 1);
            setValue(Math.floor(progress * targetValue));

            if (progress < 1) {
                requestAnimationFrame(updateValue);
            }
        };

        requestAnimationFrame(updateValue);
    }, [targetValue, duration]);

    return value;
};

const DashboardPage: React.FC = () => {
    const [points, setPoints] = useState<number>(0);

    useEffect(() => {
        getStats().then(async data => {
            setPoints(data.data.points);
        });
    }, []);

    const animatedPoints = useCountUp(points);
    const teamname = "Dachshund Development";
    const position = 1;

    const stats = [
        { title: "Név", description: "", value: 4 },
        { title: "Csapatnév", description: "", value: teamname },
        { title: "Pontjaitok", description: "", value: animatedPoints },
        { title: "Helyezésetek", description: "", value: position },
    ];

    const leaderboard = [
        { position: "1. hely", name: "Team Alpha", points: 100 },
        { position: "2. hely", name: "Team Beta", points: 90 },
        { position: "3. hely", name: "Team Gamma", points: 80 },
        { position: "4. hely", name: "Team Delta", points: 70 },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url(/blobs.svg)" }}>
            <NavLayout />
            <main className="flex flex-col flex-grow justify-center items-center px-4 mb-auto">
                <h1 className='text-white text-5xl font-bold my-10 text-center'>Statisztika</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl text-white">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-black bg-opacity-30 p-8 rounded-2xl shadow-xl flex flex-col items-center text-center w-full min-h-[180px]">
                            <h2 className="text-2xl font-semibold mb-2">{stat.title}</h2>
                            <p className="text-gray-300 text-sm mb-4">{stat.description}</p>
                            <span className="text-5xl font-bold">{stat.value}</span>
                        </div>
                    ))}
                </div>
                <h1 className='text-white text-5xl font-bold my-10 text-center'>Leaderboard</h1>
                <div className="grid grid-cols-1 gap-8 w-full max-w-6xl text-white">
                    {leaderboard.map((entry, index) => (
                        <div key={index} className="bg-black bg-opacity-30 p-8 rounded-2xl shadow-xl md:flex justify-between items-center w-full">
                        <span className="text-3xl font-semibold">{entry.position}</span><br />
                        <span className="text-4xl font-bold">{entry.name}</span><br />
                        <span className="text-4xl font-bold">{entry.points} pont</span><br />
                    </div>
                    
                    ))}
                </div>
                
            </main>
            <FooterLayout />
        </div>
    );
};

export default DashboardPage;