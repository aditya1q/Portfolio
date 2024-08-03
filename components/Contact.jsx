'use client'

import '../app/globals.css'
function Contact() {
    return (
        <div
            id="contact"
            className='w-full border-t h-screen text-white flex flex-col gap-5 text-center items-center justify-center bg-black'
        >
            <h2 className="text-[38px] md:text-[48px] font-sans2">Get In Touch</h2>
            <p className="text-lg font-sans2 w-[75%] lg:w-[55%]">
                I'm actively seeking opportunities in the field of front-end
                development. If there's a vacant position that aligns with my skills
                and expertise, please don't hesitate to reach out. My inbox is
                always open, whether you have inquiries, wish to discuss anything
                further, or simply want to say hello. I'm committed to promptly
                responding to all messages and look forward to connecting with you!
            </p>

            <button
                className="border px-4 py-2"
                onClick={() => {
                    window.location.href = "mailto:adityatiwari9410@gmail.com";
                }}
            >
                Say Hello👋
            </button>
        </div>

    );
}

export default Contact;
