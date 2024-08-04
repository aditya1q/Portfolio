"use client"

import React from 'react'
import { FaLinkedin, FaWhatsapp, FaGithub, FaInstagramSquare } from 'react-icons/fa'
import { BiLogoGmail } from 'react-icons/bi'
import Link from 'next/link'

const TopNavbar = () => {
    return (
        <div className='w-[550px] sm:w-full bg-black h-16 pt-5 flex items-center justify-around'>
            <nav className='text-white flex items-center justify-center gap-6 md:gap-8'>
                <Link href="" legacyBehavior>
                    <a
                        href="https://wa.me/9760746380"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group inline-block"
                    >
                        <FaWhatsapp className="cursor-pointer transition-opacity duration-300" />
                        <span className="hidden group-hover:inline-block absolute bg-black bg-opacity-75 text-white text-center py-1 px-2 rounded-md bottom-full left-1/2 transform -translate-x-1/2 -mb-2 opacity-0 transition-opacity duration-300">
                            9760746380
                        </span>
                    </a>

                </Link>
                <Link href='https://github.com/aditya1q' legacyBehavior>
                    <a>
                        <FaGithub className='cursor-pointer' />
                    </a>
                </Link>
                <Link href='https://www.linkedin.com/in/aditya-tiwari-b9278b278' legacyBehavior>
                    <a>
                        <FaLinkedin className='cursor-pointer' />
                    </a>
                </Link>
                <Link href="mailto:adityatiwari9410@gmail.com" legacyBehavior>
                    <a href="mailto:adityatiwari9410@gmail.com">
                        <BiLogoGmail className='cursor-pointer' />
                    </a>
                </Link>
                {/* <Link href="https://instagram.com/kanhatiwari007?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
                    legacyBehavior>
                    <a href=''>
                        <FaInstagramSquare className='cursor-pointer' />
                    </a>
                </Link> */}

            </nav>
            <div className='text-white'>
                <button className='btn border border-white py-1 px-3 md:py-2 md:px-4'>
                    <Link href='#contact2' legacyBehavior>
                        <a href="#contact2">Let's Connect</a>
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default TopNavbar