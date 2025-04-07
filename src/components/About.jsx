import React from "react";
import TypeWriterEffect from "react-typewriter-effect";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function About() {
    return (
        <section
            id="about"
            className="h-screen bg-gradient-to-br from-gray-700 via-gray-800 to-black flex items-center justify-center overflow-hidden relative"
        >
            <div className="text-center px-4 sm:px-6 lg:px-8">
                <div className="mb-20 text-amber-400 text-center relative">
                    <div className="relative h-[100px] sm:h-[120px] md:h-auto">
                        <TypeWriterEffect
                            textStyle={{
                                fontSize: "3rem",
                                fontWeight: "bold",
                                color: "#fbbf24",
                            }}
                            startDelay={100}
                            cursorColor="transparent"
                            multiText={["Hi, I'm Abhijeet Jaybhaye..."]}
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
                        MERN Stack Engineer
                    </motion.h3>
                    <p className="text-white font-bold max-w-2xl mx-auto text-sm sm:text-base mt-5">
                        Innovative Full Stack Developer passionate about building dynamic,
                        high-performance web applications.
                        Skilled in React.js, Node.js,
                        Express.js, and MongoDB, specializing in scalable, responsive user
                        experiences. With a keen eye for detail and a problem-solving
                        mindset, I craft clean, efficient code for enhanced functionality.<br/>
                        Constantly exploring new technologies.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;
