import Banner from "./sections/Home/banner";
import OurValues from "./sections/Home/ourvalues";
import StudyAbroadSection from "./sections/Home/studyAbroad";
import VoiceOfSuccess from "./sections/Home/success";
import StudentReviewsAndUniversities from "./sections/Home/review&university";
import Head from "next/head";
import { Metadata } from "next";
import EventsSection from "./sections/Home/activities";
import IndustryPartnerships from "./sections/Home/badges";
// import api from "./api-services/axios";
// import { API_URL } from "./api-services/api_url";

const seoData = {
  title: "WhatNext",
  meta_description: "WhatNext is a platform for students to find the best study abroad options for them.",
  meta_keywords: "study abroad, study abroad options, study abroad programs, study abroad destinations, study abroad countries, study abroad universities, study abroad scholarships, study abroad visa, study abroad immigration, study abroad education, study abroad opportunities, study abroad benefits, study abroad advantages, study abroad opportunities for students, study abroad opportunities for high school students, study abroad opportunities for college students, study abroad opportunities for university students, study abroad opportunities for high school students, study abroad opportunities for college students, study abroad opportunities for university students",
  canonical_url: "https://whatnextoverseas.com",
  og_title: "WhatNext",
  og_description: "WhatNext is a platform for students to find the best study abroad options for them.",
  og_image: "/logo.png",
  twitter_card: "summary_large_image",
  twitter_title: "WhatNext",
  twitter_description: "WhatNext is a platform for students to find the best study abroad options for them.",
  twitter_image: "/logo.png",
  noindex: false,
  nofollow: false,
  json_ld_schema: null,
};

// export async function generateMetadata() {
//   const response = await api.get(API_URL.SEO.GET_HOME_SEO)
//   console.log(response.data)
//   return {
//     title: response.data.title,
//     description: response.data.meta_description,  
//     keywords: response.data.meta_keywords,
//   }
// }

export const metadata: Metadata = {
  title: seoData.title,
  description: seoData.meta_description,
  keywords: seoData.meta_keywords,
  alternates: {
    canonical: seoData.canonical_url,
  },
  openGraph: {
    images: seoData.og_image,
  },
  twitter: {
      card: seoData.twitter_card as "summary_large_image" | "summary" | "player" | "app",
    title: seoData.twitter_title,
    description: seoData.twitter_description,
    images: seoData.twitter_image,
  },
};    


export default function Home() {
  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.meta_description} />
        <meta name="keywords" content={seoData.meta_keywords} />
        <link rel="canonical" href={seoData.canonical_url} />

        {/* Open Graph */}
        <meta property="og:title" content={seoData.og_title} />
        <meta property="og:description" content={seoData.og_description} />
        <meta property="og:image" content={seoData.og_image} />

        {/* Twitter */}
        <meta name="twitter:card" content={seoData.twitter_card || "summary_large_image"} />
        <meta name="twitter:title" content={seoData.twitter_title} />
        <meta name="twitter:description" content={seoData.twitter_description} />
        <meta name="twitter:image" content={seoData.twitter_image} />

        {/* Robots */}
        <meta name="robots" content={`${seoData.noindex ? "noindex" : "index"}, ${seoData.nofollow ? "nofollow" : "follow"}`} />

        {/* JSON-LD Schema */}
        {seoData.json_ld_schema && (
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: seoData.json_ld_schema }} />
        )}
      </Head>
      <Banner />
      <OurValues />
      <StudyAbroadSection />
      <VoiceOfSuccess />
      <StudentReviewsAndUniversities />
      <IndustryPartnerships/>
      <div className="">
      <EventsSection />
    </div>
    </>
  );
}
