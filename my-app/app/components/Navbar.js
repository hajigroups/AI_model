"use client";
import React, { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-4 sm:px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="text-xl sm:text-2xl font-bold text-blue-600 flex items-center space-x-2">
        <span>🏡</span>
        <span>House Price AI</span>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-6">
        <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
        <Link href="/About" className="text-gray-700 hover:text-blue-600">About</Link>
        <Link href="/Contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
        <Link href="/Predictor" className="text-gray-700 hover:text-blue-600">Predictor</Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-700 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✖️" : "☰"}
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 md:hidden z-50">
          <Link
            href="/"
            className="text-gray-700 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/About"
            className="text-gray-700 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/Contact"
            className="text-gray-700 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/Predictor"
            className="text-gray-700 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Predictor
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
