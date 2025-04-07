import React from "react";
import { FaLinkedin, FaGithub, FaXTwitter, FaInstagram } from "react-icons/fa6";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function Footer() {
  const socialLinks = [
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/abhijeet-jaybhaye-7b91a7208",
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      url: "https://github.com/AbhiJaybhaye",
    },
    {
      icon: <FaXTwitter />,
      label: "Twitter",
      url: "https://x.com/abhi_jaybhaye",
    },
    {
      icon: <FaInstagram />,
      label: "Instagram",
      url: "https://instagram.com/abhi.jaybhaye", // replace with yours
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-br from-gray-700 via-gray-800 to-black text-white py-6 absolute bottom-0 left-0 w-full"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mt-4 flex justify-center space-x-6">
            {socialLinks.map(({ icon, label, url }) => (
              <Tippy content={label} key={label}>
                <motion.a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-gray-400 hover:text-blue-400 text-xl"
                >
                  {icon}
                </motion.a>
              </Tippy>
            ))}
          </div>
          <p className="mt-5 text-sm text-white">
            © {new Date().getFullYear()}{" "}
            <a
              href="https://www.crio.do/learn/portfolio/jaybhayeabhijeet333"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:underline transition"
            >
              Abhijeet Jaybhaye
            </a>
            . All Rights Reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
