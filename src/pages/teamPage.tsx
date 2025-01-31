import React, { useMemo } from 'react';
import NavLayout from '../components/navLayout';
import { FaDiscord, FaGithub, FaSteam } from 'react-icons/fa';
import FooterLayout from '../components/footerLayout';

const TeamMember: React.FC<{ member: any }> = ({ member }) => {
    return (
        <div className="group relative bg-black bg-opacity-25 rounded-lg p-6 py-8 mt-8 w-72 text-center shadow-lg transform transition-all duration-300">
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
                            href={url as string}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-400 pointer-events-auto">
                            {key === 'discord' && <FaDiscord size={24} />}
                            {key === 'github' && <FaGithub size={24} />}
                            {key === 'steam' && <FaSteam size={24} />}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

const TeamPage: React.FC = () => {
    const teamMembers = useMemo(() => [
        {
            name: "Balló Benedek",
            role: "Project Manager",
            image: "https://avatars.githubusercontent.com/u/90302291?v=4",
            quote: "Leading teams to success, one project at a time.",
            socials: {
                discord: "https://discord.com/users/801162422580019220",
                github: "https://github.com/b3ni15",
                steam: "https://steamcommunity.com/profiles/76561199512453336/"
            }
        },
        {
            name: "Guti Balázs",
            role: "Software Developer",
            image: "https://avatars.githubusercontent.com/u/98970569?v=4",
            quote: "Striving for clean code and elegant designs.",
            socials: {
                discord: "https://discord.com/users/691581143669276692",
                github: "https://github.com/baluka0013",
                steam: "https://steamcommunity.com/id/LilKubikACreeperr"
            }
        },
        {
            name: "Domokos Ádám Péter",
            role: "Software Developer",
            image: "https://avatars.githubusercontent.com/u/195280489?v=4",
            quote: "Passionate about creating seamless user experiences.",
            socials: {
                discord: "https://discord.com/users/1006581830880874618",
                github: "https://github.com/Breadman7180",
                steam: "https://steamcommunity.com/id/krumplisteszta69"
            }
        },
        {
            name: "Meicher Zoltán",
            role: "Website Designer",
            image: "https://avatars.githubusercontent.com/u/117442499?v=4",
            quote: "Turning ideas into interactive interfaces.",
            socials: {
                discord: "https://discord.com/users/1015296418686189628",
                github: "https://github.com/MZoltan7"
            }
        }
    ], []);

    return (
        <>  
        <main className="flex flex-col min-h-screen inset-0 bg-cover filter z-[-2] bg-repeat-y" style={{ backgroundImage: "url(/blobs.svg)" }}>
            <NavLayout />
            <div className="min-h-screen flex justify-center items-center">
                <div className="flex flex-wrap justify-center gap-6 w-full max-w-screen-xl">
                    {teamMembers.map((member, index) => (
                        <TeamMember key={index} member={member} />
                    ))}
                </div>
            </div>
            <FooterLayout />
        </main>
            
        </>
    );
};

export default TeamPage;