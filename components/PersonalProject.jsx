'use client'
import Link from 'next/link';
import { PersonalProjects } from './Constants';

export default function PersonalProject() {
    return (
        <div
            id="project"
            className='w-full text-black border-t pb-20'
        >
            <h1 className="text-[38px] md:text-[48px] font-sans2 text-center text-white pt-6">Personal UI Projects</h1>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 mt-8 gap-12 text-sm md:text-base place-items-center shadow-[3xl]">
                {PersonalProjects.map((item) => (
                    <div
                        key={item.id}
                        className="project-tilt flex flex-col items-center justify-center gap-5 h-[420px] xl:h-96 text-center text-white w-[90%] xl:w-72 shadow-2xl border rounded-2xl"
                    >
                        <a
                            href={item.Live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold text-xl flex flex-col items-center justify-center gap-5"
                        >
                            <div className="flex items-center justify-around cursor-pointer">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="flex items-center justify-center object-contain w-[30%]"
                                />
                            </div>
                            {item.title}
                            <p className="font-medium text-xs text-center w-[85%]">
                                {item.description}
                            </p>
                        </a>
                        <div className="flex space-x-2 mt-4">
                            {item.technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className="bg-blue-500 text-white px-2 py-1 rounded-lg text-xs"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex gap-5">
                            <Link href={item.github_link} legacyBehavior>
                                <a
                                    href={item.github_link}
                                    className="text-white border rounded-lg px-3 py-1 bg-[#131921] text-xs hover:bg-[black]"
                                >
                                    Source Code
                                </a>
                            </Link>
                            <Link href={item.Live} legacyBehavior>
                                <a
                                    href={item.Live}
                                    className="text-white border rounded-lg px-3 py-1 bg-[#131921] text-xs hover:bg-black"
                                >
                                    Live Demo
                                </a>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
