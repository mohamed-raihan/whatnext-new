"use client"
import api from '@/app/api-services/axios';
import { API_URL } from '@/app/api-services/api_url';
import { useEffect, useState, useRef } from 'react';
// import { useState } from 'react';

const initialReviews = [
  {
    name: 'Girish.s.c giri',
    designation: 'Student at University of Texas at Arlington',
    review: `WhatNext Overseas Education provided excellent guidance and support throughout my application
process. Their knowledgeable team helped me to select the right universities, prepare a strong
application, and navigate visa procedures. Thanks to their expertise and personalized attention, I am
now studying at my dream university abroad. I highly recommend their services!" Please do contact
them once if you have any plans`,
    date: '2021.03.02',
    profile_image: '/reviewimage.svg',
    company: '',
    country: 'India',
  },
  {
    name: 'Manideep Parvataneni',
    designation: 'Student at University of Memphis',
    review: `WhatNext Overseas Education is a very good consultancy offering various universities suitable to
profile in different cost parameters. Also it's supporting candidates for VISA interview for free of
cost, 24/7 assistance available. I too got my Visa approved through the support from Kalyani
ma'am(who is the founder) and I am currently studying in University of Memphis, USA.`,
    date: '2021.05.12',
    profile_image: '/reviewimage.svg',
    company: '',
    country: 'India',
  },
  {
    name: 'Noel Sugandh',
    designation: 'Student',
    review:
      'Overall, I had a wonderful experience with consultancy and thanks to kalyani mam, I am very grateful for their support and guidance. I highly recommend WhatNext Overseas to anyone who wants to study abroad. They have a professional and supportive team that will help you achieve your goals.',
    date: '2022.01.18',
    profile_image: '/reviewimage.svg',
    company: '',
    country: 'India',
  },
  {
    name: 'Krishna Raparla',
    designation: 'Student',
    review:
      'I am very glad to share my experience with WhatNext Overseas Education Consultants, for their guidance and support to achieve my goal. Thank you "Kalyani mam" she feel it as their own responsibility and had done my entire process with patience and perseverance in the tough times from start to end.They helped me with everything and she makes the students in a way that we built confidence in ourselves. And I would like to be thankful to every one who has taken mock interviews for me. I\'m very much thankful to the entire team who has supported me. I Highly recommend for upcoming students to prefer this consultants to achieve your dream.',
    date: '2022.01.18',
    profile_image: '/reviewimage.svg',
    company: '',
    country: 'India',
  },
  {
    name: 'Mateen Mohammed',
    designation: 'Student',
    review: `I am very happy that my Visa got approved. Thanks top Sridhar Sir, Vishal Sir and Pavana Madam. I must recommend the services of NxtStep Overseas, if you are planning for abroad education. They quickly solve all the queries and are always willing to help.`,
    date: '2021.03.02',
    profile_image: '/reviewimage.svg',
    company: '',
    country: 'India',
  },
  {
    name: 'Romicherla Ramesh Kumar',
    designation: 'Student',
    review: `While I have been seeking guidance for a quality education for my younger son who is studying grade 8th in CBSE curriculum for the last few months, I am very fortunate that, one of my colleagues advised me to contact "WhatNext overseas Education Consultants" well in time.

I will forever be grateful to Kalyani Ma\'am for her excellent guidance to uncover my child\'s potential and to build his competencies to face the world. She advised me IB world schools which are in top 10 ranks to choose keeping my child\'s future in mind and to find admissions in prominent Institutions of higher learning both in India and the most reputed universities and colleges globally.

With her support and guidance my younger Son has got the admission into one of the top IB world school well in advance, will be joining in the month of July\'2024.

From the bottom of my heart, I would like to appreciate Kalyani Ma\'am for her outstanding services.

If you\'re looking for quality of service to guide your child\'s education to pursue higher studies abroad "WhatNext" is the best choice.`,
    date: '2021.05.12',
    profile_image: '/reviewimage.svg',
    company: '',
    country: 'India',
  },
  // Repeat or add more reviewers here
];

type Review = {
  name: string;
  designation: string;
  company: string;
  review: string;
  date: string;
  country: string;
  profile_image: string;
};

export async function getReviews() {
  const response = await api.get(API_URL.HOME.REVIEWS);
  console.log(response.data);
  return response.data;
}

// const universities = [
//   { name: 'Buckinghamshire New University', logo: '/universities/buckinghamshire.png' },
//   { name: 'Aberystwyth University', logo: '/universities/aberystwyth.png' },
//   { name: 'Birmingham Newman University', logo: '/universities/newman.png' },
//   { name: 'Durham University', logo: '/universities/durham.png' },
//   { name: 'UWE Bristol', logo: '/universities/uwe.png' },
//   { name: 'Arts University Bournemouth', logo: '/universities/artsbournemouth.png' },
//   { name: 'Birmingham City University', logo: '/universities/birminghamcity.png' },
//   { name: 'Bournemouth University', logo: '/universities/bournemouth.png' },
//   { name: 'Canterbury Christ Church University', logo: '/universities/canterbury.png' },
//   { name: 'Bangor University', logo: '/universities/bangor.png' },
//   { name: 'David Game College', logo: '/universities/davidgame.png' },
//   { name: 'BPP University', logo: '/universities/bpp.png' },
//   { name: 'Bishop Grosseteste University', logo: '/universities/bishopgrosseteste.png' },
//   { name: 'Birkbeck University of London', logo: '/universities/birkbeck.png' },
//   { name: 'Bath Spa University', logo: '/universities/bathspa.png' },
// ];

export default function StudentReviewsAndUniversities() {
  // const [currentIndex, setCurrentIndex] = useState(0);\
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [currentPage, setCurrentPage] = useState(0);
  const reviewsPerPage = 3;
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const isHoveringRef = useRef(false);

  const totalPages = Math.ceil(reviews.length / reviewsPerPage);
  const startIndex = currentPage * reviewsPerPage;
  const currentReviews = reviews.slice(startIndex, startIndex + reviewsPerPage);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviews = await getReviews();
        if (reviews && reviews.length > 3) {
          setReviews(reviews);
        }
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };
    fetchReviews();
  }, []);

  useEffect(() => {
    const autoSwitchReviews = () => {
      if (isHoveringRef.current) return; // Pause on hover
      
      setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
    };

    const startAutoSwitch = () => {
      intervalRef.current = setInterval(autoSwitchReviews, 5000); // Switch every 5 seconds
    };

    const stopAutoSwitch = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    // Mouse event handlers for the reviews container
    const handleMouseEnter = () => {
      isHoveringRef.current = true;
      stopAutoSwitch();
    };

    const handleMouseLeave = () => {
      isHoveringRef.current = false;
      startAutoSwitch();
    };

    // Start auto-switching
    startAutoSwitch();

    // Add event listeners to the reviews container
    const reviewsContainer = document.querySelector('.reviews-container');
    if (reviewsContainer) {
      reviewsContainer.addEventListener('mouseenter', handleMouseEnter);
      reviewsContainer.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      stopAutoSwitch();
      if (reviewsContainer) {
        reviewsContainer.removeEventListener('mouseenter', handleMouseEnter);
        reviewsContainer.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [totalPages]);

  console.log(reviews);

  return (
    <section className=''>
      {/* Student Reviews Section */}
      <div className="bg-[url('/reviewBg.svg')] bg-cover bg-center text-white pb-25 pt-45 md:pt-15 relative">
        <h2 className="text-3xl font-bold font-roboto text-center mb-10">Student Reviews</h2>

        <div className="reviews-container flex justify-center gap-6 flex-wrap px-4">
          {currentReviews.map((review, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-xl shadow-lg max-w-sm p-6 flex flex-col items-start h-[21rem] overflow-y-auto scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-[50px] h-[50px] rounded-full bg-[#C7C7C7] flex items-center justify-center text-2xl font-bold text-gray-700">
                  {review.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="font-bold text-lg">{review.name}</p>
                  <p className="text-sm text-gray-600">{review.designation} {review.company}</p>
                </div>
              </div>
              <p className="text-sm mb-4">{review.review}</p>
              <p className="text-xs text-gray-500">{review.date}</p>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="mt-6 flex justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <span
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${i === currentPage ? "bg-white" : "bg-white/40"
                }`}
            />
          ))}
        </div>
      </div>

      {/* Featured UK Universities */}
      {/* <div className="bg-white py-10 px-8 relative">
        <div className='rounded-lg relative -top-30 bottom-0 left-0 w-full h-full bg-white shadow-lg p-8'>
          <h2 className="text-3xl font-bold text-center mb-12">Featured UK Universities</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-6">
          {universities.map((uni, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-md shadow-md flex items-center justify-center h-24"
            >
              <Image
                src={uni.logo}
                alt={uni.name}
                width={150}
                height={80}
                className="object-contain max-h-full"
              />
            </div>
          ))}
        </div>
          <div>
            <Image src="/university.svg" alt="University" width={100} height={50} className="w-full object-cover" />
          </div>
        </div>
      </div> */}
    </section>
  );
}
