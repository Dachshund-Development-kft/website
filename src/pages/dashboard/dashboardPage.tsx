import React, { useEffect, useState } from 'react';
import NavLayout from '../../components/navLayout';
import FooterLayout from '../../components/footerLayout';
import score from '../../api/score';
import team from '../../api/team';
import getUser from '../../api/getUser';

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
    const [leaderboard, setLeaderboard] = useState<Array<{ position: number; name: string; points: number }>>([]);
    const [position, setPosition] = useState<number>(0);
    const [teams, setTeams] = useState<any>({});

    useEffect(() => {
        getUser().then(async data => {
            if (!data) {
                window.location.href = '/login';
            }
        });

        const fetchData = async () => {
            try {
                const teamResponse = await team();
                setTeams(teamResponse.data);

                const scoreResponse = await score();
                if (scoreResponse && scoreResponse.success) {
                    const teamData = scoreResponse.data.find((team: any) => team.team === teamResponse.data.csapat);
                    if (teamData) {
                        setPoints(parseInt(teamData.pont, 10));
                    }

                    const sortedLeaderboard = scoreResponse.data
                        .sort((a: any, b: any) => parseInt(b.pont, 10) - parseInt(a.pont, 10))
                        .map((team: any, index: number) => ({
                            position: index + 1,
                            name: team.team,
                            points: parseInt(team.pont, 10),
                        }));

                    setLeaderboard(sortedLeaderboard);

                    const teamIndex = sortedLeaderboard.findIndex((team: any) => team.name === teamResponse.data.csapat);
                    if (teamIndex !== -1) {
                        setPosition(teamIndex + 1);
                    }
                }
            } catch (error) {
                console.error("Hiba történt az adatok lekérésekor:", error);
            }
        };

        fetchData();
    }, []);

    const animatedPoints = useCountUp(points);

    const stats = [
        { title: "Név", description: "", value: teams.user || "Betöltés..." },
        { title: "Csapatnév", description: "", value: teams.csapat || "Betöltés..." },
        { title: "Pontjaitok", description: "", value: animatedPoints || "Betöltés..." },
        { title: "Helyezésetek", description: "", value: position || "Betöltés..." },
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
                        <div
                            key={index}
                            className={`bg-black bg-opacity-30 p-8 rounded-2xl shadow-xl md:flex justify-between items-center w-full ${entry.name === teams.csapat ? 'border-2' : ''
                                }`}
                        >
                            <span className="text-3xl font-semibold">{entry.position}. hely</span><br className="md:hidden" />
                            <span className="text-4xl font-bold">{entry.name}</span><br className="md:hidden" />
                            <span className="text-4xl font-bold">{entry.points} pont</span>
                        </div>
                    ))}
                </div>
            </main>
            <FooterLayout />
        </div>
    );
};

export default DashboardPage;