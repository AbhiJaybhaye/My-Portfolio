import React, { useEffect } from "react";
import TypeWriterEffect from "react-typewriter-effect";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import profilePic from "../assets/Profile.jpg";
import AOS from "aos";

function About() {

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <section
            id="about"
            className="h-screen bg-gradient-to-br from-gray-700 via-gray-800 to-black flex items-center justify-center overflow-hidden relative"
        >
            <div className="text-center px-4 sm:px-6 lg:px-8" data-aos="zoom-in-down">
                <div className="mb-5 flex justify-center -mt-8">
                    <img
                        src={profilePic}
                        alt="Abhijeet Jaybhaye"
                        className="w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full border-4 border-white shadow-lg object-cover"
                    />
                </div>

                <div className="mb-12 text-amber-400 text-center relative">
                    <div className="relative min-h-[120px] sm:min-h-[140px] md:min-h-[160px]">
                        <TypeWriterEffect
                            textStyle={{
                                fontSize: "2.5rem",
                                fontWeight: "bold",
                                color: "#fbbf24",
                            }}
                            startDelay={100}
                            cursorColor="transparent"
                            multiText={["Hello, I'm Abhijeet Jaybhaye..."]}
                            multiTextLoop={true}
                            typeSpeed={100}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </div>
                </div>

                <div className="animate-fade-in-delay opacity-0 animation-delay-in">
                    <motion.h3
                        animate={{
                            scale: [1, 1.05, 1],
                            textShadow: [
                                "0 0 10px #BF00FF",
                                "0 0 20px #BF00FF",
                                "0 0 10px #BF00FF"
                            ],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "easeInOut",
                        }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 tracking-tight"
                        style={{
                            color: "#BF00FF",
                            textShadow: "0 0 10px #BF00FF, 0 0 20px #BF00FF, 0 0 30px #BF00FF",
                        }}
                    >
                        MERN Stack Developer
                    </motion.h3>

                    <p className="text-white font-bold max-w-2xl mx-auto text-sm sm:text-base mt-5">
                        Innovative Full Stack Developer passionate about building dynamic,
                        high-performance web applications.
                        Skilled in React.js, Node.js,
                        Express.js, and MongoDB, specializing in scalable, responsive user
                        experiences. With a keen eye for detail and a problem-solving
                        mindset, I craft clean, efficient code for enhanced functionality.<br />
                        Constantly exploring new technologies.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;
