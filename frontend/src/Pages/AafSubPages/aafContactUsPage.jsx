import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const AafContactUs = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="py-16 md:py-24 text-center">
        <div className="mx-4 px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-2xl sm:text-4xl md:text-4xl font-bold text-black mb-4"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-lg sm:text-xl text-black max-w-2xl mx-auto"
          >
            We’d love to hear from you. Get in touch with the Arts Alumni Festival team.
          </motion.p>
        </div>
      </section>

      {/* Contact Info and Form Section */}
      <section className=" bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-red-600 mb-4 mt-10">Our Details</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-red-600 w-5 h-5" />
                <div>
                  <p className="text-lg text-gray-500">Email</p>
                  <a href="mailto:info@aaf.org" className="text-red-700 hover:text-red-900 font-medium">
                    info@aaf.org
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-red-600 w-5 h-5" />
                <div>
                  <p className="text-lg text-gray-500">Phone</p>
                  <a href="tel:+923001234567" className="text-red-700 hover:text-red-900 font-medium">
                    +92 300 123 4567
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-red-600 w-5 h-5" />
                <div>
                  <p className="text-lg text-gray-500">Address</p>
                  <p className="text-red-700 font-medium">Karachi Arts Council, Karachi, Pakistan</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-red-800 mb-3">Follow Us</h3>
              <div className="flex space-x-4">
                {[
                  { href: "#", icon: <FaFacebookF />, alt: "Facebook" },
                  { href: "#", icon: <FaInstagram />, alt: "Instagram" },
                  { href: "#", icon: <FaTiktok />, alt: "TikTok" },
                  { href: "#", icon: <FaYoutube />, alt: "YouTube" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="text-red-600 hover:text-red-800 text-lg"
                    aria-label={social.alt}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white p-5 my-5 rounded-xl shadow-md border border-gray-200"
          >
            <h2 className="text-2xl sm:text-4xl font-semibold text-red-600 mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-1 focus:ring-red-500 focus:border-red-500 transition duration-300"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-1 focus:ring-red-500 focus:border-red-500 transition duration-300"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-1 focus:ring-red-500 focus:border-red-500 transition duration-300 resize-none"
                  placeholder="Your Message"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full px-6 py-3 bg-red-600 text-white rounded-lg text-base font-medium hover:bg-red-700 transition-colors duration-300"
              >
                Submit
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AafContactUs;