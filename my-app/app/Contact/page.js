"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="mt-3 text-lg max-w-2xl mx-auto">
          We’d love to hear from you! Fill out the form or reach us through our contact details.
        </p>
      </section>

      {/* Contact Form */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <form className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border rounded-lg p-3"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border rounded-lg p-3"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full border rounded-lg p-3"
                required
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="mt-8 text-gray-600 text-center">
            <p>📍 Karachi, Pakistan</p>
            <p>📧 support@housepriceai.com</p>
            <p>📞 +92 300 1234567</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
