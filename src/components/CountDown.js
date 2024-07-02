import React, { useState, useEffect } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

function Counter({ targetDate }) {
    const [count, setCount] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const intervalId = setInterval(() => {
            const diff = new Date(targetDate) - new Date();
            if (diff <= 0) {
                setCount({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                clearInterval(intervalId);
                return;
            }

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            setCount({ days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(intervalId);
    }, [targetDate]);

    return (
        <div className="antialiased bg-home w-full min-h-screen px-8 py-12">
            <div className="m-auto md:max-w-2xl lg:max-w-3xl flex flex-col justify-between">
                <div>
                    <div className="flex flex-wrap justify-center gap-4">
                        <div className="timer-circle">
                            <div>
                                <span className="timer-count">{count.days === 0 ? '00' : count.days}</span>
                                <span className="timer-type">Days</span>
                            </div>
                        </div>
                        <div className="timer-circle">
                            <div>
                                <span className="timer-count">{count.hours === 0 ? '00' : count.hours}</span>
                                <span className="timer-type">Hours</span>
                            </div>
                        </div>
                        <div className="timer-circle">
                            <div>
                                <span className="timer-count">{count.minutes === 0 ? '00' : count.minutes}</span>
                                <span className="timer-type">Minutes</span>
                            </div>
                        </div>
                        <div className="timer-circle">
                            <div>
                                <span className="timer-count">{count.seconds === 0 ? '00' : count.seconds}</span>
                                <span className="timer-type">Seconds</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 text-white text-center">
                        <h1> Project Coming Soon </h1>
                        <p className="pt-4 text-lg md:text-3xl">
                            We love to create dependable business solutions for companies
                            of all sizes and any industry. Our goal is to improve accuracy and
                            efficiency to reduce operational cost
                        </p>
                    </div>
                    <form action="#" className="mt-8 md:flex md:max-w-lg md:mx-auto">
                        <input id="email" type="email" placeholder="Enter Email address"
                            className="px-8 py-4 rounded-full 
                            md:rounded-r-none w-full
                            flex-grow placeholder-gray-700"
                        />
                        <button type="submit" className="mt-4 bg-pink-800
                            text-white uppercase font-bold
                            text-sm pt-4 rounded-full md:mt-0 md:rounded-l-none w-full px-8
                            py-4 placeholder-gray-700 md:w-48 ">
                            Sign Up
                        </button>
                    </form>
                </div>
                <footer className="mt-8 md:mx-auto">
                    <div className="md:m-auto text-pink-800 text-lg flex justify-center space-x-4">
                        <a href="#" className="social-link">
                            <FaTwitter className="m-auto" />
                        </a>
                        <a href="#" className="social-link">
                            <FaInstagram className="m-auto" />
                        </a>
                        <a href="#" className="social-link">
                            <FaGithub className="m-auto" />
                        </a>
                        <a href="#" className="social-link">
                            <FaFacebookF className="m-auto" />
                        </a>
                    </div>
                </footer>
            </div>
        </div>
    );
}

const CountDown = () => {
    const getDate = () => {
        return '2024-07-20T00:00:00'; // Return the date you want to count down to here 
    }
    return (
        <Counter targetDate={getDate()} />
    )
}

export default CountDown;
