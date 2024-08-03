'use client'

import '../app/globals.css'
import { useEffect, useState } from 'react';
import { FaBookReader } from 'react-icons/fa';
import { BsFillFilePersonFill } from 'react-icons/bs';
import { useSpring, } from 'react-spring';
import { PiCertificateFill } from "react-icons/pi";
import { FaBriefcase } from 'react-icons/fa';
const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 0);
  }, []);

  const fadeIn = useSpring({
    opacity: isLoaded ? 1 : 0,
    transform: isLoaded ? 'translateY(0px)' : 'translateY(20px)',
  });

  return (
    <div
      id="about"
      className='w-full border-t flex flex-col h-[170vh] sm:h-[140vh] lg:h-screen text-white text-center gap-2'
    >
      <h1 className='text-xs mt-8'>Get to know more</h1>
      <h1 className='text-[38px] md:text-[48px] font-sans2'>About Me</h1>
      <div
        style={fadeIn}
        className='flex items-center justify-center h-screen mt-16 md:mt-0'
      >
        <div className='flex items-center justify-center gap-20 lg:gap-32 flex-col lg:flex-row'>
          <div className='flex items-center'>
            <img src="/assests/bg.png" alt="" className='image w-96 md:w-[550px] ml-0 lg:ml-24 lg:w-full lgl:w-[80%] 2xl:w-[60%] mb-0 lg:mb-32' />
          </div>
          <div className='flex flex-col gap-4 justify-center items-center mr-20'>
            <div className='flex items-center justify-center gap-10 md:flex-row flex-col'>
              <div
                style={fadeIn}
                className='border rounded-2xl flex flex-col items-center justify-center gap-3 h-36 w-72'
              >
                <FaBriefcase />
                <h1 className='text-xl font-bold'>Experience</h1>
                <h1 className='text-xs text-gray-300 w-[60%]'>Mudraksh & McShaw Tech LLP</h1>
                <div className='flex items-center justify-evenly w-full'>
                  <h1 className='text-xs text-gray-400'>Frontend Developer</h1>
                  <p className='text-xs text-gray-400'>May 2024 - Present</p>
                </div>
              </div>
              <div
                style={fadeIn}
                className='border rounded-2xl flex flex-col items-center justify-center gap-3 h-36 w-72'
              >
                <BsFillFilePersonFill />
                <h1 className='text-xl font-bold'>Internship</h1>
                <h1 className='w-[70%] text-gray-300 text-xs'>Mudraksh & McShaw Tech LLP</h1>
                <div className='flex items-center justify-evenly w-full'>
                  <h1 className='text-xs text-gray-400'>Frontend Developer Intern</h1>
                  <p className='text-xs text-gray-400'>Nov 2023 - Apr-2024</p>
                </div>
              </div>
            </div>
            <div className='flex items-center justify-center gap-10 md:flex-row flex-col'>
              <div
                style={fadeIn}
                className='border rounded-2xl flex flex-col items-center justify-center gap-3 h-36 w-72'
              >
                <PiCertificateFill />
                <h1 className='text-xl font-bold'>Certification Course</h1>
                <h1 className='text-xs text-gray-300'>Ensino Reaserch & Institute Dehradun</h1>
                <div className='flex items-center justify-evenly w-full'>
                  <h1 className='text-xs text-gray-400'>FullStack Developer</h1>
                  <p className='text-xs text-gray-400'>Apr 2023 - Sep-2023</p>
                </div>
              </div>
              <div
                style={fadeIn}
                className='border rounded-2xl flex flex-col items-center justify-center gap-3 h-36 w-72'
              >
                <FaBookReader />
                <h1 className='text-xl font-bold'>Education</h1>
                <div className='flex items-center justify-evenly w-full'>
                  <h1 className='text-xs text-gray-400'>B.Sc. (Science), Graduation</h1>
                  <p className='text-xs text-gray-400'>2018-2021</p>
                </div>
                <div className='flex items-center justify-evenly w-full'>
                  <h1 className='text-xs text-gray-400'>MCA, Post Graduation</h1>
                  <p className='text-xs text-gray-400'>2021-2023</p>
                </div>
              </div>

            </div>
            <div
              style={fadeIn}
              className='text-center mt-10 flex items-center justify-center'
            >
              <p className='text-xs md:text-sm text-center w-[60%] lg:w-[70%] text-gray-400'>
                With nine months of experience, including a six-month Full Stack Development Certification at Ensino Research and Development in Dehradun, 
                I've specialized in frontend development. I honed my skills in HTML, CSS, JavaScript, and various frontend frameworks, 
                focusing on creating user-friendly and visually appealing interfaces.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
