import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";
import "hover.css/css/hover.css";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill out all fields.");
      return;
    }

    setLoading(true);
    setStatus("");

    emailjs
      .send(
        "service_l29korf",
        "template_n6yy06v",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "T_s639mhQHtnJdTrh"
      )
      .then(() => {
        setStatus("Message sent successfully ✅");
        const userdata = { ...formData};
        setFormData({ name: "", email: "", message: "" });

        emailjs.send(
          "service_l29korf",
          "template_m7egfva",
          {
            to_email: userdata.email,   
            to_name: userdata.name,        
          },
          "T_s639mhQHtnJdTrh"
        );
        setTimeout(() => setStatus(""), 3000);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setStatus("Oops! Something went wrong ❌");

        setTimeout(() => setStatus(""), 3000);
      })
      .finally(() => setLoading(false));
  };

  return (
    <section
      id="contact"
      className="py-20 h-screen bg-gradient-to-br from-gray-700 via-gray-800 to-black text-white px-4"
    >
      <div className="max-w-md mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center -mt-10">CONTACT</h2>
        <form
          className="bg-gray-900 bg-opacity-80 rounded-xl p-6 space-y-4 shadow-lg backdrop-blur-md"
          data-aos="zoom-in-up"
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-1">
              Name:
            </label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className="w-full px-4 py-2 text-sm rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-1">
              Email:
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              className="w-full px-4 py-2 text-sm rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-1">
              Message for me:
            </label>
            <textarea
              id="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message..."
              required
              className="w-full px-4 py-2 text-sm rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className={`px-5 py-2 rounded-md text-sm transition hvr-grow ${loading
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </div>
          {status && (
            <p className="text-center text-sm mt-3 text-green-400 transition-opacity duration-500">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
