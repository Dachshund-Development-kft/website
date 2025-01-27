import React from 'react';
import NavLayout from '../components/navLayout';

const TeamPage: React.FC = () => {
    const teamMembers = [
        { name: "John Doe", role: "Frontend Developer", image: "/Logo.svg" },
        { name: "Jane Smith", role: "Backend Developer", image: "/Logo.svg" },
        { name: "Alice Johnson", role: "UI/UX Designer", image: "/Logo.svg" },
        { name: "Bob Brown", role: "Project Manager", image: "/Logo.svg" },
    ];

    return (
        <>
            <NavLayout />
            <div className="min-h-screen flex flex-wrap items-center justify-center bg-[#0F1015] p-4">
                {teamMembers.map((member, index) => (
                    <div key={index} className="bg-white bg-opacity-80 backdrop-blur-lg rounded-lg p-6 m-4 w-72 text-center shadow-lg">
                        <img src={member.image} alt={member.name} className="w-32 h-32 mx-auto rounded-full mb-4" />
                        <h2 className="text-xl font-bold mb-2">{member.name}</h2>
                        <span className="inline-block bg-blue-500 text-white px-3 py-1 rounded-full text-sm">{member.role}</span>
                    </div>
                ))}
            </div>
        </>
    );
};

export default TeamPage;