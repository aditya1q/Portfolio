'use client'
import { useEffect, useState } from 'react';
import { useSpring } from 'react-spring';
import { ExperienceData } from './Constants';

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

  const ExperienceCard = ({ item, fadeIn }) => (
    <div
      style={fadeIn}
      className='about-tilt border rounded-2xl flex flex-col items-center justify-center gap-3 h-36 w-96 lg:w-72'
    >
      {item.icon}
      <h1 className='text-xl font-bold'>{item.title}</h1>
      {item.company ? (
        <>
          <h1 className={`text-xs text-gray-300 ${item.companyWidth ? `w-[${item.companyWidth}]` : ''}`}>{item.company}</h1>
          <div className='flex items-center justify-evenly w-full'>
            <h1 className='text-xs text-gray-400'>{item.role}</h1>
            <p className='text-xs text-gray-400'>{item.duration}</p>
          </div>
        </>
      ) : (
        item.education.map((edu, idx) => (
          <div className='flex items-center justify-evenly w-full' key={idx}>
            <h1 className='text-xs text-gray-400'>{edu.degree}</h1>
            <p className='text-xs text-gray-400'>{edu.duration}</p>
          </div>
        ))
      )}
    </div>
  );

  return (
    <div
      id="about"
      className='w-full border-t flex flex-col h-[200vh] lg:h-screen text-white text-center gap-2'
    >
      <h1 className='text-xs mt-8'>Get to know more</h1>
      <h1 className='text-[38px] md:text-[48px] font-sans2'>About Me</h1>
      <div
        style={fadeIn}
        className='flex items-center justify-center h-[140vh] lg:h-screen mt-16 md:mt-0'
      >
        <div className='flex items-center justify-center gap-20 lg:gap-32 flex-col lg:flex-row'>
          <div className='flex items-center'>
            <img src="/assests/bg.png" alt="" className='image w-96 md:w-[550px] ml-0 lg:ml-24 lg:w-full lgl:w-[80%] 2xl:w-[70%] mb-0 lg:mb-32' />
          </div>
          <div className='flex flex-col gap-4 justify-center items-center lg:mr-20'>
            <div className='flex items-center justify-center gap-10 md:flex-row flex-col'>
              {ExperienceData.slice(0, 2).map((item) => (
                <ExperienceCard key={item.id} item={item} fadeIn={fadeIn} />
              ))}
            </div>
            <div className='flex items-center justify-center gap-10 md:flex-row flex-col'>
              {ExperienceData.slice(2, 4).map((item) => (
                <ExperienceCard key={item.id} item={item} fadeIn={fadeIn} />
              ))}
            </div>
            <div
              style={fadeIn}
              className='text-center mt-10 flex items-center justify-center'
            >
              <p className='text-xs md:text-sm text-center w-[80%] lg:w-[70%] text-gray-400'>
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
