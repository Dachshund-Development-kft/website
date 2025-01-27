import React from 'react';
import NavLayout from '../components/navLayout';
import Blobs from '../components/blobs';

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
            <Blobs />
            <div className="h-screen flex justify-center items-center">
                <div className="flex justify-center items-center flex-wrap gap-6 p-8">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="bg-black bg-opacity-25 backdrop-blur-lg rounded-lg p-6 w-72 text-center shadow-lg"
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-32 h-32 mx-auto rounded-full mb-4"
                            />
                            <h2 className="text-xl font-bold mb-2 text-white">
                                {member.name}
                            </h2>
                            <span className="inline-block bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                                {member.role}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default TeamPage;