'use client'
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Photo {
    id: number;
    src: string;
    alt: string;
    title: string;
    slug: string;
}

const EventsSection = () => {
    const column1Ref = useRef<HTMLDivElement>(null);
    const column2Ref = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);

    // Sample photos for the photo wall
    const photos: Photo[] = [
        {
            id: 1,
            src: '/blogs/activity7.jpg',
            alt: 'Event photo 1',
            title: 'Pre-Departure Briefing for Fall 2024 Intake',
            slug: 'pre-departure-briefing-fall-2024'
        },
        {
            id: 2,
            src: '/blogs/f1visa.jpg',
            alt: 'Event photo 2',
            title: 'USA F1 Visa Workshop: Common Mistakes to Avoid',
            slug: 'usa-f1-visa-workshop'
        },
        {
            id: 3,
            src: '/blogs/activity5.jpg',
            alt: 'Event photo 3',
            title: 'Meet and Greet with University Representatives',
            slug: 'meet-university-reps'
        },
        {
            id: 4,
            src: '/blogs/activity6.jpeg',
            alt: 'Event photo 4',
            title: 'Education Loan Fair for Aspiring Study Abroad Students',
            slug: 'education-loan-fair'
        },
        {
            id: 5,
            src: '/blogs/activity7.jpg',
            alt: 'Event photo 5',
            title: 'Cracking the Code: A Guide to Tech Internships Abroad',
            slug: 'tech-internships-abroad'
        },
        {
            id: 6,
            src: '/blogs/activities1.jpg',
            alt: 'Event photo 6',
            title: 'The Art of the Personal Statement',
            slug: 'personal-statement-art'
        },
        {
            id: 7,
            src: '/blogs/activity3.jpg',
            alt: 'Event photo 7',
            title: 'Navigating Visa Applications: A Step-by-Step Guide',
            slug: 'visa-application-guide'
        },
        {
            id: 8,
            src: '/blogs/activity4.avif',
            alt: 'Event photo 8',
            title: 'Scholarship Hunt: Finding Funding for Your Studies',
            slug: 'scholarship-hunt'
        },
    ];


    // Split photos into two columns
    const column2Photos = photos.filter((_, index) => index % 2 === 0);
    const column1Photos = photos.filter((_, index) => index % 2 === 1);

    useEffect(() => {
        let animationFrameId: number;
        const animateColumns = () => {
            if (!isPaused && column1Ref.current && column2Ref.current) {
                const scrollSpeed = 0.5;
                const currentTime = Date.now() * 0.001;

                // Column 1 scrolls up
                const column1Offset = (currentTime * scrollSpeed * 50) % (column1Ref.current.scrollHeight / 2);
                column1Ref.current.style.transform = `translateY(-${column1Offset}px)`;

                // Column 2 scrolls down
                const column2Height = column2Ref.current.scrollHeight / 2;
                const column2Offset = (currentTime * scrollSpeed * 50) % column2Height;
                column2Ref.current.style.transform = `translateY(${-column2Height + column2Offset}px)`;
            }
            animationFrameId = requestAnimationFrame(animateColumns);
        };

        if (typeof window !== 'undefined' && window.innerWidth >= 768) {
            animationFrameId = requestAnimationFrame(animateColumns);
        }

        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, [isPaused]);

    return (
        <section className="bg-gradient-to-br from-slate-50 to-blue-10 px-4 py-16 md:py-20">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Side - Event Description */}
                    <div className="space-y-8 md:py-12">
                        <div className="animate-fade-in">
                            <h2 className="text-4xl text-center lg:text-start lg:text-4xl font-bold text-gray-900 mb-6 font-roboto">
                                Events & Activities
                            </h2>
                            {/* <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-8"></div> */}
                        </div>

                        <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                            <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-4 font-roboto">Guiding Dreams: Activities & Events for Indian Students Who Aspire to Study Abroad</h3>
                                <p className="text-gray-600 leading-relaxed font-montserrat">
                                Studying abroad is more than just an academic decision — it&apos;s a transformative journey that shapes a student&apos;s future and broadens their worldview. At WhatNext, we understand the hopes, challenges, and excitement that come with this big step. That&apos;s why we are committed to supporting Indian students at every stage of their study abroad journey — not just academically, but also emotionally, culturally, and practically.

Our carefully curated activities and events are tailored to empower students with the clarity they need to make informed decisions, the confidence to thrive in a new environment, and a sense of community that helps them feel supported no matter where they go. From expert-led visa workshops and pre-departure sessions to university meet-and-greet events and cultural orientation programs, WhatNext ensures that every student is well-prepared and inspired to take their global leap.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Animated Photo Wall */}
                    <div className="relative hidden md:block">

                        <div className="relative h-[40rem] overflow-hidden rounded-2xl bg-gradient-to-b from-transparent via-white/10 to-transparent">
                            <div className="absolute inset-0 grid grid-cols-2 gap-4 p-4">
                                {/* Column 1 - Scrolls Up */}
                                <div
                                    ref={column1Ref}
                                    className="flex flex-col gap-4"
                                    style={{ willChange: 'transform' }}
                                >
                                    {/* Duplicate photos for seamless loop */}
                                    {[...column1Photos, ...column1Photos].map((photo, index) => (
                                        <Link href={`/blogs/${photo.slug}`} target='_blank' key={`col1-${photo.id}-${index}`}>
                                            <div
                                                className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                                                onMouseEnter={() => setIsPaused(true)}
                                                onMouseLeave={() => setIsPaused(false)}
                                            >
                                                <Image
                                                    src={photo.src}
                                                    alt={photo.alt}
                                                    width={300}
                                                    height={192}
                                                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                                                    <h3 className="text-white text-lg font-bold">
                                                        {photo.title}
                                                    </h3>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>

                                {/* Column 2 - Scrolls Down */}
                                <div
                                    ref={column2Ref}
                                    className="flex flex-col gap-4"
                                    style={{ willChange: 'transform' }}
                                >
                                    {/* Duplicate photos for seamless loop */}
                                    {[...column2Photos, ...column2Photos].map((photo, index) => (
                                        <Link href={`/blogs/${photo.slug}`} target='_blank' key={`col2-${photo.id}-${index}`}>
                                            <div
                                                className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                                                onMouseEnter={() => setIsPaused(true)}
                                                onMouseLeave={() => setIsPaused(false)}
                                            >
                                                <Image
                                                    src={photo.src}
                                                    alt={photo.alt}
                                                    width={300}
                                                    height={192}
                                                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                                                    <h3 className="text-white text-lg font-bold">
                                                        {photo.title}
                                                    </h3>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Gradient overlays for smooth edges */}
                            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-slate-50 to-transparent pointer-events-none z-10"></div>
                            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none z-10"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventsSection;