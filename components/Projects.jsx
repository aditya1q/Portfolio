'use client'

import Link from 'next/link';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// SwiperCore.use([Navigation]);

const projects = [
  {
    id: 1,
    title: 'TradeSage',
    Live: 'https://tradesage.in/',
    description: 'The YouTube Clone project is a web application that replicates the core features and user interface of YouTube. Developed using React for functionality and Tailwind CSS for styling.',
    img: '../assests/tradesagelogin.png',
    technologies: ['React', 'Tailwind', 'MUI', 'Recharts', 'Chartjs', 'Sonner', 'Axios', 'Socket'],
  },
  {
    id: 2,
    title: 'TradeSage',
    Live: 'https://tradesage.in/',
    description: 'The YouTube Clone project is a web application that replicates the core features and user interface of YouTube. Developed using React for functionality and Tailwind CSS for styling.',
    img: '../assests/tradesagelogin.png',
    technologies: ['React', 'Tailwind'],
  },
  {
    id: 3,
    title: 'TradeSage',
    Live: 'https://tradesage.in/',
    description: 'The YouTube Clone project is a web application that replicates the core features and user interface of YouTube. Developed using React for functionality and Tailwind CSS for styling.',
    img: '../assests/tradesagelogin.png',
    technologies: ['React', 'Tailwind'],
  },
  {
    id: 4,
    title: 'TradeSage',
    Live: 'https://tradesage.in/',
    description: 'The YouTube Clone project is a web application that replicates the core features and user interface of YouTube. Developed using React for functionality and Tailwind CSS for styling.',
    img: '../assests/tradesagelogin.png',
    technologies: ['React', 'Tailwind'],
  },
  // Add more projects here if needed
];

export default function Projects() {

  return (
    <div id="work" className='w-full text-black border-t flex items-center justify-center'>
      <div className="w-full max-w-6xl text-center bg-black bg-opacity-50 py-10 px-5 rounded-lg ">
        <h1 className="text-[38px] md:text-[48px] font-sans2 text-center text-white pt-6">Projects</h1>
        <div className="relative flex mt-8 gap-12 text-sm md:text-base place-items-center w-full">
          <FaChevronLeft
            color='#fff'
            fontSize={24}
            className="cursor-pointer left-0 z-10 swiper-button-prev"
          />
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            scrollbar={{ draggable: true }}
            // pagination={{ clickable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
          >
            {projects.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="flex items-center justify-center gap-5 h-[520px] w-[90%] mx-auto text-center text-white shadow-2xl rounded-2xl bg-opacity-75 p-5">
                  <div className='flex flex-col items-start justify-start w-[80%] gap-4'>
                    <p className="font-bold text-3xl">{item.title}</p>
                    <p className="text-[14px] text-start">{item.description}</p>
                    <div className="flex flex-1 flex-wrap gap-4 w-[70%] rounded-lg">
                      {item.technologies.map((tech, index) => (
                        <span key={index} className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Link href={item.Live} legacyBehavior>
                      <a className="flex flex-col text-white px-3 py-1 border rounded-lg text-sm">See Demo</a>
                    </Link>
                  </div>
                  <Link href={item.Live} legacyBehavior>
                    <a className="flex flex-col items-center text-white rounded-lg w-[80%] text-xs">
                     <img src={item.img} alt='Project image' className="rounded-lg img-tilt border" />
                    </a>
                  </Link> 
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <FaChevronRight
            color='#fff'
            fontSize={24}
            className="cursor-pointer absolute right-0 z-10 swiper-button-next"
          />
        </div>
      </div>
    </div>
  );
}
