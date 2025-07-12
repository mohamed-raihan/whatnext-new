'use client';
import EnquireForm from '@/app/components/enquireForm';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Banner() {
    const [isEnquireFormOpen, setIsEnquireFormOpen] = useState(false);
    return (
        <div className="relative min-h-[500px] md:min-h-[700px]">
            {/* Background Image */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/banner-home.png"
                    alt="University Building"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Content Container */}
            <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
                {/* Company Name */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                    <Image src="/flightlogo.png" alt="WhatNext Logo" width={80} height={21} className="mb-2 sm:mb-6" />
                    <h2 className="text-[#242424] font-semibold text-lg sm:text-xl mb-6 font-montserrat">
                        WhatNext Overseas Educational Consultancy
                    </h2>
                </div>

                {/* Main Headlines */}
                <div className="space-y-2 sm:space-y-4 mb-8 sm:mb-12 font-roboto">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold">
                        <span className="text-[#0046AA]">Empowering </span>
                        <span className="text-[#288737]">Dreams</span>
                    </h1>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold">
                        <span className="text-[#0046AA]">Extending </span>
                        <span className="text-[#288737]">Education</span>
                    </h1>
                </div>

                {/* <div className='lg:absolute lg:right-10 lg:bottom-40 flex lg:flex-col xl:flex-row gap-4 w-full lg:w-fit justify-center md:justify-start items-center py-3'>
                    <Image src="/ai_rc.png" alt="WhatNext Logo" width={100} height={100} className="md:w-35" />
                    <Image src="/nafsalogo.svg" alt="WhatNext Logo" width={100} height={100} className="md:w-40" />
                    <Image src="/icefLogo.png" alt="WhatNext Logo" width={100} height={100} className="md:w-30" />
                </div> */}

                {/* Stats Card */}
                <div className="bg-white rounded-lg p-4 sm:p-6 max-w-3xl border border-[#E5E5E5]">
                    <div className="mb-6 sm:mb-8">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                            <p className="text-[#464646] text-base sm:text-lg font-medium font-roboto">
                                Your gateway to world-class education in
                            </p>
                            <Image src="/flags.png" alt="Flags" width={188} height={34} className="ml-0 sm:ml-1" />
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        {/* Stats Section */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center divide-y sm:divide-y-0 sm:divide-x divide-gray-300 w-full sm:w-auto">
                            <div className="pb-4 sm:pb-0 sm:pr-8 md:pr-12 flex flex-col items-center justify-center w-full sm:w-auto">
                                <h3 className="text-[#0046AA] text-2xl sm:text-3xl font-bold mb-2">180+</h3>
                                <p className="text-gray-600 text-sm">University Partners</p>
                            </div>
                            <div className="py-4 sm:py-0 sm:px-8 md:px-12 w-full sm:w-auto flex flex-col items-center justify-center">
                                <h3 className="text-[#28A745] text-2xl sm:text-3xl font-bold mb-2">100+</h3>
                                <p className="text-gray-600 text-sm">Students&apos; Career</p>
                            </div>
                            <div className="pt-4 sm:pt-0 sm:pl-8 md:pl-12 w-full sm:w-auto flex flex-col items-center justify-center">
                                <h3 className="text-[#0046AA] text-2xl sm:text-3xl font-bold mb-2">35+</h3>
                                <p className="text-gray-600 text-sm">Scholarships Awarded</p>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col gap-4 w-full sm:w-auto sm:ml-4">
                            <Link href="" className="w-full" onClick={() => setIsEnquireFormOpen(true)}>
                                <button className="bg-[#0046AA] text-white px-3 py-3 rounded-lg hover:bg-blue-700 transition w-full text-sm font-semibold font-inter">
                                    Enquire Now
                                </button>
                            </Link>
                            <Link href="/about-us" className="w-full">
                                <button className="border-2 border-[#0046AA] text-[#0046AA] px-3 py-3 rounded-lg hover:bg-blue-50 transition w-full text-sm font-semibold font-inter">
                                    Know More
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>

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
        </div>
    );
}