'use client'

import '../app/globals.css'

const Skills = () => {
  return (
    <div
      id="skills"
      className='w-full border-t h-screen text-white flex flex-col items-center justify-center gap-10'
    >
      <div className='flex flex-col text-center gap-4'>
        <h1 className='text-[38px] md:text-[48px] font-sans2'>My Skills & Knowledge</h1>
        <h1 className='text-lg md:text-xl font-poppines2'>
          Technologies and languages that I use to make my projects every day
        </h1>
      </div>
      <div className='mt-10 grid grid-cols-3 md:grid-cols-7 place-items-center gap-16'>
        <img src="/assests/html.svg" alt="" className=' icon-tilt w-12 sm:w-20 h-12 sm:h-20' />
        <img src="/assests/css.svg" alt="" className='icon-tilt w-12 sm:w-20 h-12 sm:h-20' />
        <img src="/assests/javascript.svg" alt="" className='icon-tilt w-12 sm:w-20 h-12 sm:h-20' />
        <img src="/assests/nextjs.svg" alt="" className='icon-tilt w-12 sm:w-20 h-12 sm:h-20' />
        <img src="/assests/react.svg" alt="" className='icon-tilt w-12 sm:w-20 h-12 sm:h-20' />
        <img src="/assests/tailwindcss.svg" alt="" className='icon-tilt w-12 sm:w-20 h-12 sm:h-20' />
        <img src="/assests/sass.svg" alt="" className='icon-tilt w-12 sm:w-20 h-12 sm:h-20' />
        <img src="/assests/bootstrap.svg" alt="" className='icon-tilt w-12 sm:w-20 h-12 sm:h-20' />
        <img src="/assests/postman.svg" alt="" className='icon-tilt w-12 sm:w-20 h-12 sm:h-20' />
        <img src="/assests/git.svg" alt="" className='icon-tilt w-12 sm:w-20 h-12 sm:h-20' />
        <img src="/assests/vite.svg" alt="" className='icon-tilt w-12 sm:w-20 h-12 sm:h-20' />
        <img src="/assests/socket.svg" alt="" className='icon-tilt w-12 sm:w-20 h-12 sm:h-20' />
        <img src="/assests/zustand.png" alt="" className='icon-tilt w-12 sm:w-20 h-12 sm:h-20' />
        <img src="/assests/chartjs.png" alt="" className='icon-tilt w-12 sm:w-20 h-12 sm:h-20' />
      </div>
    </div>
  );
};

export default Skills;
