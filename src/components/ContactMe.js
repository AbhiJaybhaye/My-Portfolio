import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ContactMe = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container mt-5" id="contactme">
        <div className="section-title text-center">
          <span className="badge badge-info"><h3>Contact Me</h3></span>
        </div>
      <div className="row justify-content-center mb-3">
        <div className="col-md-6">
          <form onSubmit={handleSubmit} className="p-4 border rounded shadow">
            <div className="mb-3">
              <input type="text" placeholder="Name" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <input type="email" placeholder="Email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <textarea className="form-control" placeholder="Message here..." name="message" rows="3" value={formData.message} onChange={handleChange} required />
            </div>
            <button type="submit" className="btn btn-primary w-100">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
