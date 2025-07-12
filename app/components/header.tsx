// src/components/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import EnquireForm from "./enquireForm";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isStudyAbroadOpen, setIsStudyAbroadOpen] = useState(false);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isEnquireFormOpen, setIsEnquireFormOpen] = useState(false);
  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setIsDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200); // 200ms delay before closing
  };

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleStudyAbroad = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsStudyAbroadOpen(!isStudyAbroadOpen);
  };

  return (
    <header className="relative bg-white shadow-md border-t-4 border-blue-500 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center space-x-2">
            <Image src="/logo.svg" alt="WhatNext Logo" width={100} height={50} />
          </div>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 font-roboto font-semibold text-sm lg:text-lg">
          <Link href="/" className="text-gray-800 hover:text-blue-600 uppercase font-medium ">Home</Link>
          <Link href="/about-us" className="text-gray-800 hover:text-blue-600 uppercase font-medium">About Us</Link>
          <div
            className="relative group"
            onMouseEnter={handleDropdownEnter}
            onMouseLeave={handleDropdownLeave}
          >
            <button className="text-gray-800 hover:text-blue-600 uppercase flex items-center gap-1 font-medium">
              Study Abroad
              <svg
                className={`w-4 h-4 mt-0.5 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.585l3.71-4.354a.75.75 0 111.14.976l-4.25 5a.75.75 0 01-1.14 0l-4.25-5a.75.75 0 01.02-1.06z" />
              </svg>
            </button>
            {/* Dropdown */}
            <div className={`absolute ${isDropdownOpen ? 'block' : 'hidden'} bg-white shadow-lg mt-2 w-[180px] rounded-lg border border-gray-100 transition-all duration-200 ease-in-out transform origin-top`}>
              {/* Arrow pointer */}
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-t border-l border-gray-100 rotate-45"></div>
              <div className="relative z-1000 bg-white rounded-lg p-2">
                <Link href="/study-abroad/usa" className="block px-4 py-2.5 hover:bg-blue-50 rounded-md text-gray-700 hover:text-blue-600 transition-colors duration-150 uppercase font-medium">USA</Link>
                <Link href="/study-abroad/canada" className="block px-4 py-2.5 hover:bg-blue-50 rounded-md text-gray-700 hover:text-blue-600 transition-colors duration-150 uppercase font-medium">Canada</Link>
                <Link href="/study-abroad/uk" className="block px-4 py-2.5 hover:bg-blue-50 rounded-md text-gray-700 hover:text-blue-600 transition-colors duration-150 uppercase font-medium">UK</Link>
                <Link href="/study-abroad/europe" className="block px-4 py-2.5 hover:bg-blue-50 rounded-md text-gray-700 hover:text-blue-600 transition-colors duration-150 uppercase font-medium">Europe</Link>
                <Link href="/study-abroad/australia" className="block px-4 py-2.5 hover:bg-blue-50 rounded-md text-gray-700 hover:text-blue-600 transition-colors duration-150 uppercase font-medium">Australia</Link>
                <Link href="/study-abroad/newzealand" className="block px-4 py-2.5 hover:bg-blue-50 rounded-md text-gray-700 hover:text-blue-600 transition-colors duration-150 uppercase font-medium">New Zealand</Link>
                <Link href="/study-abroad/uae" className="block px-4 py-2.5 hover:bg-blue-50 rounded-md text-gray-700 hover:text-blue-600 transition-colors duration-150 uppercase font-medium">UAE</Link>
              </div>
            </div>
          </div>
          <Link href="/services" className="text-gray-800 hover:text-blue-600  uppercase font-medium">Services</Link>
          <Link href="/blogs" className="text-gray-800 hover:text-blue-600  uppercase font-medium">Blog</Link>
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Link href="">
            <button className="bg-[#1A4FA3] text-white px-4 py-2 rounded-md font-inter font-semibold text-[18px] hover:shadow-lg shadow-black hover:scale-105 transition" onClick={() => setIsEnquireFormOpen(true)}>
              Let&apos;s Talk
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="px-4 py-2 space-y-1">
            <Link href="/" className="block py-2 text-gray-800 hover:text-blue-600 font-medium" onClick={handleMobileMenuClick}>Home</Link>
            <Link href="/about-us" className="block py-2 text-gray-800 hover:text-blue-600 font-medium" onClick={handleMobileMenuClick}>About Us</Link>
            <div className="py-2">
              <button
                onClick={toggleStudyAbroad}
                className="w-full text-left text-gray-800 font-medium mb-2 flex items-center justify-between"
              >
                Study Abroad
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${isStudyAbroadOpen ? 'rotate-180' : ''}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.585l3.71-4.354a.75.75 0 111.14.976l-4.25 5a.75.75 0 01-1.14 0l-4.25-5a.75.75 0 01.02-1.06z" />
                </svg>
              </button>
              {isStudyAbroadOpen && (
                <div className="pl-4 space-y-1">
                  <Link href="/study-abroad/canada" className="block py-2 text-gray-800 hover:text-blue-600" onClick={handleMobileMenuClick}>Canada</Link>
                  <Link href="/study-abroad/usa" className="block py-2 text-gray-800 hover:text-blue-600" onClick={handleMobileMenuClick}>USA</Link>
                  <Link href="/study-abroad/uk" className="block py-2 text-gray-800 hover:text-blue-600" onClick={handleMobileMenuClick}>UK</Link>
                  <Link href="/study-abroad/australia" className="block py-2 text-gray-800 hover:text-blue-600" onClick={handleMobileMenuClick}>Australia</Link>
                  <Link href="/study-abroad/europe" className="block py-2 text-gray-800 hover:text-blue-600" onClick={handleMobileMenuClick}>Europe</Link>
                  <Link href="/study-abroad/newzealand" className="block py-2 text-gray-800 hover:text-blue-600" onClick={handleMobileMenuClick}>New Zealand</Link>
                  <Link href="/study-abroad/uae" className="block py-2 text-gray-800 hover:text-blue-600">UAE</Link>
                </div>
              )}
            </div>
            <Link href="/services" className="block py-2 text-gray-800 hover:text-blue-600 font-medium" onClick={handleMobileMenuClick}>Services</Link>
            <Link href="/blogs" className="block py-2 text-gray-800 hover:text-blue-600 font-medium" onClick={handleMobileMenuClick}>Blog</Link>
            <Link href="/contact-us" className="block py-2" onClick={handleMobileMenuClick}>
              <button className="w-full bg-blue-800 text-white px-4 py-2 rounded-md font-inter font-semibold text-[18px] hover:bg-blue-900 transition">
                Free Consultation
              </button>
            </Link>
          </nav>
        </div>
      )}

      {isEnquireFormOpen &&
        <div className="fixed inset-0 z-50 backdrop-blur-sm bg-black/30 transition-all duration-300 ease-in-out flex justify-center items-center">
          <div className="bg-white rounded-2xl w-full max-w-lg p-6 md:p-8 shadow-lg relative">
            <button
              onClick={() => setIsEnquireFormOpen(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-black text-xl"
            >
              &times;
            </button>
            <EnquireForm setIsEnquireFormOpen={setIsEnquireFormOpen} />
          </div>
        </div>
      }
    </header>
  );
}
