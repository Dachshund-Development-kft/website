import React from 'react';
import NavLayout from '../components/navLayout';
import Blobs from '../components/blobs';
import FooterLayout from '../components/footerLayout';
import { FaGithub } from 'react-icons/fa';

const projects = [
    {
        difficulty: 'Easy',
        name: 'Project Alpha',
        description: 'A simple starter project.',
        done: true,
        github: 'https://github.com/user/project-alpha',
        color: 'bg-green-500',
        image: 'https://avatars.githubusercontent.com/u/90302291?v=4',
    },
    {
        difficulty: 'Medium',
        name: 'Project Beta',
        description: 'A more advanced project with complexity.',
        done: false,
        github: 'https://github.com/user/project-beta',
        color: 'bg-yellow-500',
        image: 'https://avatars.githubusercontent.com/u/90302291?v=4',
    },
    {
        difficulty: 'Hard',
        name: 'Project Gamma',
        description: 'A challenging project with intricate logic.',
        done: true,
        github: 'https://github.com/user/project-gamma',
        color: 'bg-red-500',
        image: 'https://avatars.githubusercontent.com/u/90302291?v=4',
    },
    {
        difficulty: 'Brutal',
        name: 'Project Omega',
        description: 'An extreme challenge for the most advanced developers.',
        done: false,
        github: 'https://github.com/user/project-omega',
        color: 'bg-purple-700',
        image: 'https://avatars.githubusercontent.com/u/90302291?v=4',
    },
];

const ProjectPage: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <NavLayout />
            <main className="min-h-screen flex justify-center items-center">
                <div className="flex flex-wrap justify-center gap-6 w-full max-w-screen-xl lg:pt-0 pt-16">
                    {projects.map((project, index) => (
                        <div key={index} className="relative rounded-lg p-4 pt-20 py-8 w-72 text-center shadow-lg transform transition-all duration-300 bg-black bg-opacity-25">
                            {/* Project Image */}
                            <div
                                className={`h-36 rounded-lg bg-cover bg-center`}
                                style={{ backgroundImage: `url(${project.image})` }}
                            >
                                {/* Name and Difficulty */}
                                <div className="absolute top-2 left-2">
                                    <h3 className="text-xl font-bold text-white">{project.name}</h3>
                                    {/* Difficulty with dynamic text color */}
                                    <p className={`text-sm text-white ${project.color}`}>{project.difficulty}</p>
                                </div>
                            </div>

                            {/* Project Details (Description, State, and GitHub) */}
                            <div className="mt-4">
                                <p className="text-sm text-gray-300">{project.description}</p>
                                <div className="flex items-center justify-center gap-2 text-sm mt-4">
                                    <span className='text-sm text-gray-300'>Done: {project.done ? '✅' : '❌'}</span>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-gray-300 transition-all duration-300"
                                    >
                                        <FaGithub size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <FooterLayout />
            <Blobs />
        </div>
    );
};

export default ProjectPage;
