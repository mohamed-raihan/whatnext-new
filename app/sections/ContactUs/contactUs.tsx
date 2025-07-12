import GetintouchForm from "@/app/components/getintouch-form";
import React from "react";

const ContactSection = () => {
    return (
        <div className="font-sans">
            {/* Section 1: Banner with Form */}
            <section className="bg-[url('/banner-contact.png')] bg-cover bg-center 2xl:min-h-[900px] h-[1000px] md:h-[1100px] lg:h-[1200px] xl:h-[900px] py-8 md:py-16 px-4 sm:px-6 lg:px-8 text-center md:text-left">
                <div className="max-w-8xl mx-auto md:mx-20 grid xl:grid-cols-2 gap-8 xl:gap-70">
                    <div className="px-4 md:px-0 text-left">
                        <h2 className="text-[#686868] text-3xl lg:text-[40px] font-semibold mb-2">Contact Us</h2>
                        <h1 className="text-4xl lg:text-[70px] 2xl:text-[60px] text-[#0046AA] font-bold leading-tight md:leading-snug">
                            Get in Touch with <br />
                            <span className="text-[#288737]">Our Team</span>
                        </h1>
                        <p className="mt-4 text-gray-600 text-sm lg:text-lg md:text-base">
                            It&apos;s effective, it&apos;s beneficial and it&apos;s absolutely free. Take your virtual counselling session today!
                        </p>
                    </div>
                    <div className="max-w-full md:max-w-xl flex-1 flex items-center justify-center">
                        <GetintouchForm/>
                    </div>
                </div>
            </section>

            {/* Section 2: Map & Office Info */}
            <section className="py-8 md:py-10 px-4 sm:px-6 lg:px-8">
                <div className="grid xl:grid-cols-2 gap-8 mx-auto md:mx-20 items-center">
                    <div className="col-span-1 h-full flex items-center justify-center">
                        <iframe
                            className="w-full h-[400px] md:h-[600px] border-4 border-[#1B4FA3]"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.947167971726!2d77.60246107607402!3d12.975230987340442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1788640001f7%3A0x9e0c2ca931d45439!2sWhatNext%20Overseas%20Education%20Consultants!5e0!3m2!1sen!2sin!4v1748847997216!5m2!1sen!2sin"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div className="flex flex-col justify-center items-center px-4 md:px-0 mt-10 xl:mt-0">
                        <div className="max-w-7xl mx-auto text-center mb-8 md:mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0046AA] font-roboto">
                                Our Offices <span className="text-[#288737]">Near You</span>
                            </h2>
                            <p className="mt-2 text-[#686868] text-sm md:text-base">
                                Come and visit our office to find solutions
                            </p>
                        </div>
                        <div className="bg-[#288737] text-white py-8 md:py-14 px-6 md:px-20 rounded-lg text-center w-full md:w-xl shadow-md">
                            <h3 className="text-2xl md:text-[28px] font-bold mb-2 font-roboto">Bengaluru</h3>
                            <p className="font-montserrat text-base md:text-[20px]">WhatNext Overseas Education Consultancy Service, Unit No - 111, Barton Centre, M.G.Road, Bangalore - 560001</p>
                            <p className="mt-4 md:mt-6 font-semibold text-base md:text-[20px] font-montserrat">info@whatnextoverseas.com</p>
                            <p className="font-semibold text-base md:text-[20px] mt-1 font-montserrat">+91 99 00 54 24 29</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactSection;
