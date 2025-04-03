import { FaBookReader, FaBriefcase } from 'react-icons/fa';
import { BsFillFilePersonFill } from 'react-icons/bs';
import { PiCertificateFill } from "react-icons/pi";

// export personal projects
export const PersonalProjects = [
    {
        id: 1,
        title: 'YouTube Clone',
        github_link: 'https://github.com/aditya1OG/YouTube_Clone.git',
        Live: 'https://you-tube-clone-aditya1q.vercel.app/',
        description: 'The YouTube Clone project is a web application that replicates the core features and user interface of the YouTube. Developed using React for  functionality and Tailwind CSS for styling,',
        img: '../assests/youtube.png',
        technologies: ['React', 'CSS'],
    },
    {
        id: 2,
        title: 'Amazon Clone',
        github_link: 'https://github.com/aditya1OG/Amazon_Clone.git',
        Live: 'https://amazon-clone-1ysq-aditya1q.vercel.app/',
        description: 'The Amazon Clone - Frontend is a demonstration of frontend development skills and serves as a portfolio project for showcasing the ability to create a responsive, feature-rich e-commerce platform interface.',
        img: '../assests/amazon.png',
        technologies: ['Next.js', 'Tailwind CSS'],
    },
    {
        id: 3,
        title: 'Nike Shoe Website',
        github_link: 'https://nike-store-green.vercel.app/',
        Live: 'https://nike-store-aditya1q.vercel.app/',
        description: 'The Nike Store Website project serves as a demonstration of web development skills, including HTML, CSS, and JavaScript and serves as a portfolio project for showcasing the ability to create a responsive interface ',
        img: '../assests/nike.png',
        technologies: ['HTML', 'CSS', 'JavaScript'],
    },
    {
        id: 4,
        title: 'Restaurant Website',
        github_link: 'https://github.com/aditya1OG/Restaurent_web.git',
        Live: 'https://restaurent-lbiuddmjp-aditya1q.vercel.app/',
        description: 'This web project utilizes the power of Next.js and Tailwind CSS to deliver an exceptional front-end user interface that captures the essence of the restaurant, promotes its menu, and provides essential information to diners.',
        img: '../assests/logo.svg',
        technologies: ['Next.js', 'Tailwind CSS'],
    },
    {
        id: 5,
        title: 'Netflix Clone',
        github_link: 'https://github.com/aditya1OG/Netflix_Clone.git',
        Live: 'https://netflix-clone-bice-xi.vercel.app/',
        description: 'The Netflix Clone project serves as a demonstration of front-end web development skills and creativity.And offering users a taste of the Netflix experience while highlighting the capabilities of HTML, CSS, and JavaScript.',
        img: '../assests/netflix.png',
        technologies: ['HTML', 'CSS', 'JavaScript'],
    },
    {
        id: 6,
        title: 'Facebook Clone',
        github_link: 'https://github.com/aditya1q/Facebook_Clone.git',
        Live: 'https://facebook-clone-ebon.vercel.app/',
        description: 'The Facebook clone project serves as a demonstration of web development skills, including HTML, TailwindCSS, and JavaScript and also It is responsive for mobile devices.In this project i have created sign-up and sign-in page',
        img: '../assests/facebook.png',
        technologies: ['HTML', 'TailwindCSS'],
    },
];

// export About ExperienceData

export const ExperienceData = [
    {
        id: 1,
        icon: <FaBriefcase />,
        title: 'Experience',
        company: 'Mudraksh & McShaw Tech LLP',
        role: 'Frontend Developer',
        duration: 'May 2024 - Present',
        companyWidth: '60%'
    },
    {
        id: 2,
        icon: <BsFillFilePersonFill />,
        title: 'Internship',
        company: 'Mudraksh & McShaw Tech LLP',
        role: 'Frontend Developer Intern',
        duration: 'Nov 2023 - Apr 2024',
        companyWidth: '70%'
    },
    {
        id: 3,
        icon: <PiCertificateFill />,
        title: 'Certification Course',
        company: 'Ensino Research & Institute Dehradun',
        role: 'FullStack Developer',
        duration: 'Apr 2023 - Sep 2023',
        companyWidth: 'auto'
    },
    {
        id: 4,
        icon: <FaBookReader />,
        title: 'Education',
        education: [
            { degree: 'B.Sc. (Science), Graduation', duration: '2018-2021' },
            { degree: 'MCA, Post Graduation', duration: '2021-2023' }
        ]
    }
];

// export projects

export const ProjectsData = [
    {
        id: 1,
        title: 'TradeSage',
        Live: 'https://tradesage.quanttiphy.com/',
        description: [
            'Built an interactive and user-friendly dashboard for client to track dealer trading statistics.',
            'Played a major role in the development of the frontend using React.js.Focused on Risk Management and Trader Management modules.',
            'Utilized APIs (Axios) for data connection and WebSockets for real-time data updates.',
            'Employed Chart.js and Recharts libraries for dynamic chart representation.',
            'Used MUI Table for displaying data in a structured and interactive format.'
        ],
        img: '../assests/tradesagelogin.png',
        technologies: ['React', 'Tailwind', 'MUI', 'Recharts', 'Chartjs', 'Sonner', 'Axios', 'Socket'],
    },
    {
        id: 2,
        title: 'Finsage',
        Live: 'https://fin.quanttiphy.com/',
        description: [
            'Developed a platform to monitor and analyze various trading algorithms.Incorporated backtesting capabilities to allow users to view historical performance and potential outcomes.',
            'Employed Tradingview lightweight Charts and Chart.js libraries for dynamic chart representation.',
            'Used MUI Table for displaying data in a structured and interactive format.',
            'Utilized Zustand for global state management',
            'Utilized APIs (Axios) for data connection',
        ],
        img: '../assests/finsage.png',
        technologies: ['Vite', 'Tailwind', 'MUI', 'TradingView Charts', 'Chartjs', 'Sonner', 'Axios', 'Zustand'],
    },
    {
        id: 3,
        title: 'Worksage',
        Live: 'https://quanttiphy.com/',
        description: [
            'WorkSage is a comprehensive task management software designed to streamline the assignment and tracking of tasks within an organization.',
            'It provides a centralized platform where users can manage their tasks, and administrators can oversee and optimize task distribution and completion.',
            'Utilized Zustand for global state management',
            'Utilized APIs (Axios) for data connection',
        ],
        img: '../assests/worksage.png',
        technologies: ['Vite', 'Tailwind', 'React-toastify', 'Axios', 'Zustand'],
    },
    {
        id: 4,
        title: 'Algosage',
        Live: 'https://backoffice.quanttiphy.com/',
        description: [
            'Developed a backoffice system to manage all client information and monitor the performance of trading strategies.',
            'Displayed data about the number of strategies each client is running, client profits from algorithms, and individual strategy profits and losses.',
            'Utilized MUI tables to present detailed client and strategy information and implemented Tradingview Lightweight Charts for dynamic data visualization.',
            'Utilized APIs (Axios) for data connection',
        ],
        img: '../assests/algoBacktest.png',
        technologies: ['Vite', 'Tailwind', 'Tradingview', 'Recharts', 'Axios', 'Zustand', 'React-query'],
    },
    {
        id: 5,
        title: 'AlgoMonitor',
        Live: 'http://164.52.195.138:8134/',
        description: [
            'Algo & Client Performance: Tracks execution speed, trade success rate, and anomalies.',
            'API Connections:This monitors API uptime, request failures, and latency.',
            'Cloud Infrastructure: Checks cloud resource usage, server health, and scaling efficiency.',
            'Database Latency: Measures query response times and detects bottlenecks.',
            'Internet Speed & Connectivity: Ensures stable network condition for smooth trade.'
        ],
        img: '../assests/heartbeat.png',
        technologies: ['Vite', 'Tailwind', 'Tradingview', 'shad-cn'],
    },
];
