import React, { useState } from 'react';
import DoubleHeading from './DoubleHeading';
import { BsEnvelope } from 'react-icons/bs';
import { BiPhoneCall, BiShare } from 'react-icons/bi';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import CustomButton from './CustomButton';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/send-message', formData);
      setStatus({ message: response.data.success, type: 'success' });
      // Clear the form after submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setStatus({
        message: error.response?.data?.error || 'Failed to send message. Please try again later.',
        type: 'error',
      });
    }
  };

  return (
    <section id="contact">
      <DoubleHeading first="Get In" second="Touch" />

      <div className="bg-black text-white flex flex-col lg:flex-row mx-4 lg:mx-12 items-start lg:items-center justify-around space-y-6 lg:space-y-0">
        {/* Left Section */}
        <div className="w-3/4 lg:w-1/4 px-4">
          <h2 className="text-2xl lg:text-4xl font-bold mb-4 lg:text-left">DON'T BE SHY!</h2>
          <p className="mb-8 text-sm text-justify">
            Feel free to get in touch with me. I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>

          <div className="grid grid-cols-1 gap-8">
            <div className="space-y-4">
              {/* Mail Section */}
              <div className="flex items-center space-x-4">
                <div className="bg-yellow-500 text-black p-3 rounded-lg">
                  <BsEnvelope />
                </div>
                <div>
                  <p className="font-bold">MAIL ME</p>
                  <p>info@mail.com</p>
                </div>
              </div>

              {/* Call Section */}
              <div className="flex items-center space-x-4">
                <div className="bg-yellow-500 text-black p-3 rounded-lg">
                  <BiPhoneCall />
                </div>
                <div>
                  <p className="font-bold">CALL ME</p>
                  <p>+92325492099</p>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex space-x-4 mt-4 lg:justify-start">
                <a href="">
                  <div className="w-8 h-8 bg-[rgb(42,42,42)] p-2 rounded-lg flex items-center justify-center hover:bg-yellow-500">
                    <FaFacebook />
                  </div>
                </a>
                <a href="">
                  <div className="w-8 h-8 bg-[rgb(42,42,42)] p-2 rounded-lg flex items-center justify-center hover:bg-yellow-500">
                    <FaLinkedin />
                  </div>
                </a>
                <a href="">
                  <div className="w-8 h-8 bg-[rgb(42,42,42)] p-2 rounded-lg flex items-center justify-center hover:bg-yellow-500">
                    <FaInstagram />
                  </div>
                </a>
                <a href="">
                  <div className="w-8 h-8 bg-[rgb(42,42,42)] p-2 rounded-lg flex items-center justify-center hover:bg-yellow-500">
                    <FaTwitter />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-3/2 lg:w-3/5 px-4">
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Input Fields */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="YOUR NAME"
                className="p-3 bg-[rgb(42,42,42)] rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                value={formData.name}
                onChange={handleChange}
                name="name"
              />
              <input
                type="email"
                placeholder="YOUR EMAIL"
                className="p-3 bg-[rgb(42,42,42)] rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                value={formData.email}
                onChange={handleChange}
                name="email"
              />
              <input
                type="text"
                placeholder="YOUR SUBJECT"
                className="p-3 bg-[rgb(42,42,42)] rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                value={formData.subject}
                onChange={handleChange}
                name="subject"
              />
            </div>

            {/* Textarea */}
            <textarea
              placeholder="YOUR MESSAGE"
              className="p-3 bg-[rgb(42,42,42)] rounded-3xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 w-full h-32"
              value={formData.message}
              onChange={handleChange}
              name="message"
            ></textarea>

            {/* Submit Button */}
            <CustomButton type="submit" buttonicon={<BiShare />} text="Send Message" />
          </form>

          {/* Status Message */}
          {status && (
            <div
              className={`mt-4 p-3 rounded-lg text-white ${status.type === 'success' ? 'bg-green-500' : 'bg-red-500'
                }`}
            >
              {status.message}
            </div>
          )}
        </div>
      </div>

    </section>
  );
}

export default Contact;

