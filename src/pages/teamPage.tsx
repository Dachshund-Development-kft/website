import React from 'react';
import NavLayout from '../components/navLayout';
import Blobs from '../components/blobs';
import { FaDiscord, FaGithub, FaInstagram } from 'react-icons/fa';
import FooterLayout from '../components/footerLayout';

const TeamPage: React.FC = () => {
    const teamMembers = [
        {
            name: "Guti Balázs",
            role: "Frontend Developer",
            image: "https://cdn.discordapp.com/avatars/691581143669276692/5fd0c3677f16c82aab67d08870743181.webp?size=128",
            quote: "Striving for clean code and elegant designs.",
            socials: {
                discord: "https://discord.com/users/691581143669276692",
                github: "https://github.com/gutibalazs",
                instagram: "https://instagram.com/gutibalazs"
            }
        },
        {
            name: "Balló Benedek",
            role: "Project Manager",
            image: "https://cdn.discordapp.com/avatars/801162422580019220/671dcf03377274db3494348e0ada8bab.webp?size=128",
            quote: "Leading teams to success, one project at a time.",
            socials: {
                discord: "https://discord.com/users/801162422580019220",
                github: "https://github.com/ballobenedek",
                instagram: "https://instagram.com/ballobenedek"
            }
        },
        {
            name: "Domokos Ádám Péter",
            role: "Frontend Developer",
            image: "https://cdn.discordapp.com/avatars/1006581830880874618/b5dc767a0c6f906903958cbc795303f9.webp?size=128",
            quote: "Passionate about creating seamless user experiences.",
            socials: {
                discord: "https://discord.com/users/1006581830880874618",
                github: "https://github.com/domokosadam",
                instagram: "https://instagram.com/domokosadam"
            }
        },
        {
            name: "Meicher Zoltán",
            role: "Frontend Developer",
            image: "https://cdn.discordapp.com/avatars/1015296418686189628/6c5996770c985bcd6e5b68131ff2ba04.webp?size=128",
            quote: "Turning ideas into interactive interfaces.",
            socials: {
                discord: "https://discord.com/users/1015296418686189628",
                github: "https://github.com/meicherzoltan",
                instagram: "https://instagram.com/meicherzoltan"
            }
        }
    ];

    return (
        <>
            <NavLayout />
            <Blobs />
            <main className="h-screen flex justify-center items-center">
                <div className="flex justify-center items-center flex-wrap gap-6 p-8">
                    {teamMembers.map((member, index) => (
                        <div
                            id={`member-${index}`}
                            key={member.name}
                            className="group relative bg-black bg-opacity-25 backdrop-blur-lg rounded-lg p-6 w-72 text-center shadow-lg transform transition-all duration-300">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-32 h-32 mx-auto rounded-full mb-4"
                                loading="lazy"
                            />
                            <h2 className="text-xl font-bold mb-2 text-white">{member.name}</h2>
                            <span className="inline-block bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                                {member.role}
                            </span>

                            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-80 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 rounded-lg pointer-events-none">
                                <p className="mb-4 italic">"{member.quote}"</p>
                                <div className="flex gap-4">
                                    {Object.entries(member.socials).map(([key, url]) => (
                                        <a
                                            key={key}
                                            href={url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-500 hover:text-blue-400 pointer-events-auto">
                                            {key === 'discord' && <FaDiscord size={24} />}
                                            {key === 'github' && <FaGithub size={24} />}
                                            {key === 'instagram' && <FaInstagram size={24} />}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <FooterLayout />
        </>
    );
};

export default TeamPage;