"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-3 text-lg max-w-2xl mx-auto">
          Learn more about our mission and vision behind House Price AI
        </p>
      </section>

      {/* Content Section */}
      <section className="max-w-5xl mx-auto px-6 py-12 space-y-8">
        <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
        <p className="text-gray-600 leading-relaxed">
          At <span className="font-semibold text-blue-600">House Price AI</span>, 
          we aim to simplify the process of buying and selling properties by using the 
          power of Artificial Intelligence. Our tool predicts house prices with accuracy 
          so you can make informed decisions faster.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>✔️ AI-powered price predictions</li>
          <li>✔️ Easy to use & beginner-friendly</li>
          <li>✔️ Saves time and effort in property evaluation</li>
          <li>✔️ Trusted by professionals and individuals alike</li>
        </ul>
      </section>

      <Footer />
    </div>
  );
};

export default About;
