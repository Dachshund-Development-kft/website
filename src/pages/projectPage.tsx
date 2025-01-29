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
        color: 'bg-green-500'
    },
    {
        difficulty: 'Medium',
        name: 'Project Beta',
        description: 'A more advanced project with complexity.',
        done: false,
        github: 'https://github.com/user/project-beta',
        color: 'bg-yellow-500'
    },
    {
        difficulty: 'Hard',
        name: 'Project Gamma',
        description: 'A challenging project with intricate logic.',
        done: true,
        github: 'https://github.com/user/project-gamma',
        color: 'bg-red-500'
    },
    {
        difficulty: 'Brutal',
        name: 'Project Omega',
        description: 'An extreme challenge for the most advanced developers.',
        done: false,
        github: 'https://github.com/user/project-omega',
        color: 'bg-purple-700'
    },
    {
        difficulty: 'Easy',
        name: 'Project Alpha',
        description: 'A simple starter project.',
        done: true,
        github: 'https://github.com/user/project-alpha',
        color: 'bg-green-500'
    },
    {
        difficulty: 'Medium',
        name: 'Project Beta',
        description: 'A more advanced project with complexity.',
        done: false,
        github: 'https://github.com/user/project-beta',
        color: 'bg-yellow-500'
    },
    {
        difficulty: 'Hard',
        name: 'Project Gamma',
        description: 'A challenging project with intricate logic.',
        done: true,
        github: 'https://github.com/user/project-gamma',
        color: 'bg-red-500'
    },
    {
        difficulty: 'Brutal',
        name: 'Project Omega',
        description: 'An extreme challenge for the most advanced developers.',
        done: false,
        github: 'https://github.com/user/project-omega',
        color: 'bg-purple-700'
    },
    {
        difficulty: 'Easy',
        name: 'Project Alpha',
        description: 'A simple starter project.',
        done: true,
        github: 'https://github.com/user/project-alpha',
        color: 'bg-green-500'
    },
    {
        difficulty: 'Medium',
        name: 'Project Beta',
        description: 'A more advanced project with complexity.',
        done: false,
        github: 'https://github.com/user/project-beta',
        color: 'bg-yellow-500'
    },
    {
        difficulty: 'Hard',
        name: 'Project Gamma',
        description: 'A challenging project with intricate logic.',
        done: true,
        github: 'https://github.com/user/project-gamma',
        color: 'bg-red-500'
    },
    {
        difficulty: 'Brutal',
        name: 'Project Omega',
        description: 'An extreme challenge for the most advanced developers.',
        done: false,
        github: 'https://github.com/user/project-omega',
        color: 'bg-purple-700'
    },
];

const ProjectPage: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <NavLayout />
            <main className="min-h-screen flex justify-center items-center">
                <div className="flex flex-wrap justify-center gap-6 w-full max-w-screen-xl">
                    {projects.map((project, index) => (
                        <div key={index} className={`group relative ${project.color} bg-opacity-35 hover:bg-opacity-70 rounded-lg p-6 py-8 w-72 text-center shadow-lg transform transition-all duration-300`}>
                            <h3 className="text-xl font-bold text-white">{project.name}</h3>
                            <p className="text-sm text-white">Difficulty: {project.difficulty}</p>
                            <p className="text-sm text-white">{project.description}</p>
                            <p className="text-sm text-white">Done: {project.done ? '✅' : '❌'}</p>
                            <a href={project.github} className="flex items-center justify-center gap-2 text-white hover:text-gray-300 transition-all duration-300">
                                <FaGithub size={20} />
                            </a>
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