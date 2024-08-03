"use client"

import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact2 = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        console.log(form.current)

        emailjs
            .sendForm('service_w5rmwi7', 'template_a5uaara', form.current, 'NHPILangUmCt0FtPB')
            .then((result) => {
                console.log(result.text);
                console.log("message sent");
            })
            .catch((error) => {
                console.error("Error sending message:", error);
            });

        form.current.reset();
    };

    return (
        <div id="contact2" className="w-full border-t flex flex-col gap-4 items-center justify-center min-h-screen text-white">
            <h1 className="text-[38px] md:text-[48px] font-sans2 ">Contact Me</h1>
            <form
                ref={form}
                onSubmit={sendEmail}
                className="scrollbar bg-transparent shadow-[3xl] border-white overflow-hidden overflow-y-auto rounded-2xl border px-8 pt-6 pb-8 mb-4 w-[90%] lsm:[60%] md:w-[50%] mdl:w-[40%] lg:w-1/3 flex flex-col gap-4 h-[80vh]"
            >
                <div className="mb-4 mt-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="user_name">
                        Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline bg-transparent"
                        type="text"
                        name="name"
                        required
                        placeholder='Enter your name'
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="user_email">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 bg-transparent leading-tight focus:outline-none focus:shadow-outline"
                        type="email"
                        name="email"
                        required
                        placeholder='Enter your email'
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-bold mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-400 bg-transparent leading-tight focus:outline-none focus:shadow-outline"
                        id="message"
                        name="message"
                        required
                        placeholder='Enter your message'
                    />
                </div>
                <div className="flex items-center justify-between mt-8">
                    <button
                        className="bg-transparent cursor-pointer hover:bg-white hover:text-black border-white w-full text-white border hover:border-black font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
                        type="submit"
                        value="Send"
                    >Send</button>
                </div>
            </form >
        </div >
    );
};

export default Contact2;