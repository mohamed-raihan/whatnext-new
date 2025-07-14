'use client';
import { API_URL } from '@/app/api-services/api_url';
import api from '@/app/api-services/axios';
import GetintouchForm from '@/app/components/getintouch-form';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
// import blogs from './blogs';


const SocialMediaButtons = () => {
    const platforms = [
        { name: 'Facebook', icon: <FaFacebookF className="inline-block mr-2" />, link: "https://www.facebook.com/whatnextoverseas" },
        { name: 'Twitter', icon: <FaTwitter className="inline-block mr-2" />, link: "#" },
        { name: 'Instagram', icon: <FaInstagram className="inline-block mr-2" />, link: "https://www.instagram.com/whatnextoverseas?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
        { name: 'Youtube', icon: <FaYoutube className="inline-block mr-2" />, link: "https://www.youtube.com/@WhatNextOverseas" },
        { name: 'LinkedIn', icon: <FaLinkedinIn className="inline-block mr-2" />, link: "https://www.linkedin.com/company/what-next-overseas-education-consultancy-service/" },
        // { name: 'Pinterest', icon: <FaPinterestP className="inline-block mr-2" />, link: "#" }
    ];

    return (
        <div className="grid grid-cols-2 gap-2">
            {platforms.map((platform) => (
                <button
                    key={platform.name}
                    className="bg-gray-100 px-3 py-2 rounded text-xs font-semibold text-gray-700 hover:bg-blue-100 text-left flex items-center"
                    onClick={() => window.open(platform.link, '_blank')}
                >
                    {platform.icon}
                    {platform.name}
                </button>
            ))}
        </div>
    );
};

interface Blog {
    title: string;
    slug: string;
    author: string;
    date: string;
    image: string;
    category: string;
    readTime: string;
    is_editors: boolean;
    is_recent: boolean;
    is_trending: boolean;
    featured: boolean;
    excerpt?: string;
    is_event?: boolean;
}

type Category = { id: number; title: string };
type Heading = { id: number; title: string };
type ApiBlog = {
  id: number;
  title: string;
  slug: string;
  author: string;
  date: string;
  blog_image: string;
  blog_category: number;
  blog_heading: number;
  time: string;
  description: string;
  // add any other fields from your API if needed
};


const blogData = [
    {
        title: 'Why Canada Remains A Top Choice For Indian Students',
        slug: 'why-canada-top-choice',
        author: 'Admin',
        date: '27 August, 2024',
        image: '/blogs/canadaBlog.svg',
        category: 'Canada',
        readTime: '20 mins',
        is_editors: false,
        is_recent: false,
        is_trending: false,
        featured: true,
    },
    {
        title: 'Study In Australia: The Land Of Opportunities',
        slug: 'study-in-australia',
        author: 'Admin',
        date: '27 August, 2024',
        image: '/blogs/study-in-australia.jpg',
        category: 'Australia',
        readTime: '18 mins',
        is_editors: false,
        is_recent: false,
        is_trending: false,
        featured: false,
    },
    {
        title: 'Your Ultimate UK Student Visa Checklist (2025 Edition)',
        slug: 'uk-visa-checklist',
        author: 'Admin',
        date: '27 August, 2024',
        image: '/blogs/uk-visa-apprvd.jpg',
        category: 'Visa',
        readTime: '15 mins',
        is_editors: false,
        is_recent: false,
        is_trending: false,
        featured: false,
    },
    {
        title: 'Using Automated Test Results To Improve Accessibility',
        slug: 'using-automated-test-results-to-improve-accessibility',
        author: 'Admin',
        date: '27 August, 2024',
        image: '/blogs/newsBlog.svg',
        category: 'News',
        readTime: '12 mins',
        is_editors: true,
        is_recent: false,
        is_trending: false,
        featured: false,
    },
    {
        title: 'USA F1 Visa Interview Questions—And How To Nail Them',
        slug: 'usa-f1-visa',
        author: 'Admin',
        date: '27 August, 2024',
        image: '/blogs/Container-2.svg',
        category: 'Gadget',
        readTime: '8 mins',
        is_editors: true,
        is_recent: false,
        is_trending: false,
        featured: false,
    },
    {
        title: 'IELTS Vs TOEFL: Which Exam Should You Take?',
        slug: 'ielts-vs-toefl',
        author: 'Admin',
        date: '27 August, 2024',
        image: '/blogs/ielts.jpg',
        category: 'Technology',
        readTime: '9 mins',
        is_editors: true,
        is_recent: false,
        is_trending: false,
        featured: false,
    },
    {
        title: 'Culture Shock Is Real—Here\'s How To Deal With It',
        slug: 'culture-shock',
        author: 'Admin',
        date: '27 August, 2024',
        image: '/blogs/recent_post01.jpg.svg',
        category: 'News',
        readTime: '20 mins',
        is_editors: false,
        is_recent: true,
        is_trending: false,
        featured: true,
    },
    {
        title: 'Crafting A Winning SOP: 5 Things You Should Always Include',
        slug: 'winning-sop',
        author: 'Admin',
        date: '27 August, 2024',
        image: '/blogs/s-o-p.jpg',
        category: 'Gadget',
        readTime: '11 mins',
        is_editors: false,
        is_recent: true,
        is_trending: false,
        featured: false,
    },
    {
        title: 'Cost Of Living Abroad: Budgeting Tips For First-Timers',
        slug: 'cost-of-living-abroad',
        author: 'Admin',
        date: '27 August, 2024',
        image: '/blogs/cost.jpg',
        category: 'Technology',
        readTime: '13 mins',
        is_editors: false,
        is_recent: true,
        is_trending: false,
        featured: false,
    },
    {
        title: 'Top 7 Scholarships For Indian Students In 2025',
        slug: 'top-scholarships-2025',
        author: 'Admin',
        date: '27 August, 2024',
        image: '/blogs/sop.jpg',
        category: 'Mobile',
        readTime: '14 mins',
        is_editors: false,
        is_recent: true,
        is_trending: false,
        featured: false,
    },
    {
        title: 'A Day In The Life Of An Indian Student In The UK',
        slug: 'indian-student-uk-life',
        author: 'Admin',
        date: '27 August, 2024',
        image: '/blogs/Container-6.svg',
        category: 'UK',
        readTime: '20 mins',
        is_editors: false,
        is_recent: false,
        is_trending: true,
        featured: true,
        excerpt: 'Browned Butter And Brown Sugar Area Caramelly Goodness, Crispy Edgesick And Soft Centers Rare Melty Little Puddles Of Chocolate First Favorite Thing About These Browned Butter.'
    },
    {
        title: 'One-Pan Baked Sausage And Lentils',
        slug: 'one-pan-sausage-lentils',
        author: 'Admin',
        date: '27 August, 2024',
        image: '/blogs/trending_post02.jpg.svg',
        category: 'Gadget',
        readTime: '15 mins',
        is_editors: false,
        is_recent: false,
        is_trending: true,
        featured: false,
    },
    {
        title: 'How To Create Advanced Animations With CSS',
        slug: 'css-advanced-animations',
        author: 'Admin',
        date: '27 August, 2024',
        image: '/blogs/trending_post03.jpg.svg',
        category: 'News',
        readTime: '12 mins',
        is_editors: false,
        is_recent: false,
        is_trending: true,
        featured: false,
    },
    {
        title: 'State Of CSS: Influence The Future Of CSS',
        slug: 'state-of-css-future',
        author: 'Admin',
        date: '27 August, 2024',
        image: '/blogs/trending_post04.jpg.svg',
        category: 'Mobile',
        readTime: '18 mins',
        is_editors: false,
        is_recent: false,
        is_trending: true,
        featured: false,
    },
    // Popular posts
    {
        title: 'Influence The Future Of CSS',
        slug: 'influence-css-future',
        author: 'Admin',
        date: '27 August, 2024',
        image: '/blogs/t_popular_post01.jpg.svg',
        category: 'Gadget',
        readTime: '10 mins',
        is_editors: false,
        is_recent: true,
        is_trending: false,
        featured: false,
    },
    {
        title: 'Best Tech Accessor 10 Work From Home',
        slug: 'tech-accessories-wfh',
        author: 'Admin',
        date: '27 August, 2024',
        image: '/blogs/t_popular_post02.jpg.svg',
        category: 'News',
        readTime: '8 mins',
        is_editors: false,
        is_recent: true,
        is_trending: false,
        featured: false,
    },
    {
        title: 'The Butter Chocolate Cookies Daily',
        slug: 'butter-chocolate-cookies',
        author: 'Admin',
        date: '27 August, 2024',
        image: '/blogs/Container-6.svg',
        category: 'Technology',
        readTime: '6 mins',
        is_editors: false,
        is_recent: true,
        is_trending: false,
        featured: false,
    },
    {
        title: 'Activities and Events for Aspiring Abroad Students',
        slug: 'activities-and-events',
        author: 'Admin',
        date: '24 June, 2025',
        image: '/blogs/activities1.jpg',
        category: 'News',
        readTime: '18 mins',
        is_editors: true,
        is_recent: true,
        is_trending: true,
        featured: false,
        is_event: false,
    },
    // Events & Activities
    {
        title: 'Pre-Departure Briefing for Fall 2024 Intake',
        slug: 'pre-departure-briefing-fall-2024',
        author: 'Admin',
        date: '15 July, 2024',
        image: '/blogs/activity7.jpg',
        category: 'Event',
        readTime: '10 mins',
        is_editors: false,
        is_recent: false,
        is_trending: false,
        featured: false,
        is_event: true,
    },
    {
        title: 'USA F1 Visa Workshop: Common Mistakes to Avoid',
        slug: 'usa-f1-visa-workshop',
        author: 'Admin',
        date: '20 June, 2024',
        image: '/blogs/f1visa.jpg',
        category: 'Event',
        readTime: '15 mins',
        is_editors: false,
        is_recent: false,
        is_trending: false,
        featured: false,
        is_event: true,
    },
    {
        title: 'Education Loan Fair for Aspiring Study Abroad Students',
        slug: 'education-loan-fair',
        author: 'Admin',
        date: '25 May, 2024',
        image: '/blogs/activity6.jpeg',
        category: 'Event',
        readTime: '8 mins',
        is_editors: false,
        is_recent: false,
        is_trending: false,
        featured: false,
        is_event: true,
    },
    {
        title: 'Meet and Greet with University Representatives',
        slug: 'meet-university-reps',
        author: 'Admin',
        date: '05 June, 2024',
        image: '/blogs/activity5.jpg',
        category: 'Event',
        readTime: '12 mins',
        is_editors: false,
        is_recent: false,
        is_trending: false,
        featured: false,
        is_event: true,
    },
    // Add more blogs as needed...
];

export default function BlogList() {
    
    const [categories, setCategories] = useState<Category[]>([]);
    const [headings, setHeadings] = useState<Heading[]>([]);
    const [blogs, setBlogs] = useState<ApiBlog[] | typeof blogData>(blogData);
    
    useEffect(() => {
      const fetchAll = async () => {
        const [blogsRes, categoriesRes, headingsRes] = await Promise.all([
          api.get(API_URL.BLOGS.GET_BLOGS),
          api.get(API_URL.BLOGS.GET_BLOG_CATEGORIES),
          api.get(API_URL.BLOGS.GET_BLOG_HEADERS),
        ]);
        setBlogs(blogsRes.data);
        setCategories(categoriesRes.data);
        setHeadings(headingsRes.data);
      };
      fetchAll();
    }, []);

    console.log(blogs);
    console.log(headings,categories);
    

    const headingNameById = Object.fromEntries(headings.map(h => [h.id, h.title]));
    const categoryNameById = Object.fromEntries(categories.map(c => [c.id, c.title]));

    console.log(headingNameById,categoryNameById);
    

    // Type guard for ApiBlog
    function isApiBlog(blog: unknown): blog is ApiBlog {
      return typeof blog === 'object' && blog !== null && 'blog_heading' in blog;
    }

    const sourceBlogs = Array.isArray(blogs) && blogs.length > 0 ? blogs : blogData;
    const transformedBlogs = sourceBlogs.map((blog) => {
      if (isApiBlog(blog)) {
        const headingName = headingNameById[blog.blog_heading];
        return {
          title: blog.title,
          slug: blog.slug,
          author: blog.author,
          date: blog.date,
          image: blog.blog_image,
          category: categoryNameById[blog.blog_category] || '',
          readTime: blog.time || '',
          is_editors: typeof headingName === 'string' && headingName.toLowerCase().includes('editor'),
          is_recent: typeof headingName === 'string' && headingName.toLowerCase().includes('recent'),
          is_trending: typeof headingName === 'string' && headingName.toLowerCase().includes('trending'),
          featured: typeof headingName === 'string' && headingName.toLowerCase().includes('featured'),
          excerpt: blog.description,
          is_event: typeof headingName === 'string' && headingName.toLowerCase().includes('event'),
        };
      }
      // fallback for static data
      return blog;
    });

    console.log(transformedBlogs);
    

    // Main featured blog
    const main = transformedBlogs.find((b: Blog) => b.featured) || transformedBlogs[0];
    // Side blogs (not featured, just take next 3 for demo)
    const side = transformedBlogs.filter((b: Blog) => b.slug !== main.slug).slice(0, 3);
    // Editors Choice
    const editors = transformedBlogs.filter((b: Blog) => b.is_editors).slice(0, 4);
    // Events and Activities
    const events = transformedBlogs.filter((b: Blog) => b.is_event).slice(0, 4);
    // Recent Posts (first is large, rest are small)
    const recent = transformedBlogs.filter((b: Blog) => b.is_event).slice(0, 4);
    // Trending News
    const trending = transformedBlogs.filter((b: Blog) => b.is_trending).slice(0, 4);
    // Popular Posts (hardcoded for demo)

    console.log(recent);


    const popular = [
        {
            ...transformedBlogs.find((b: Blog) => b.slug === 'influence-the-future-of-css'),
            category: 'Gadget',
            image: '/blogs/t_popular_post01.jpg.svg',
            title: 'Influence The Future Of CSS',
            date: '27 August, 2024',
        },
        {
            ...transformedBlogs.find((b: Blog) => b.slug === 'best-tech-accessor-10-work-from-home'),
            category: 'News',
            image: '/blogs/t_popular_post02.jpg.svg',
            title: 'Best Tech Accessor 10 Work From Home',
            date: '27 August, 2024',
        },
        {
            ...transformedBlogs.find((b: Blog) => b.slug === 'the-butter-chocolate-cookies-daily'),
            category: 'Technology',
            image: '/blogs/Container-6.svg',
            title: 'The Butter Chocolate Cookies Daily',
            date: '27 August, 2024',
        },
    ];

    return (
        <div className="relative">
            {/* <Image src="/birdLeftUp.svg" alt="Bottom Bird" width={100} height={100} className="absolute top-0  z-10 left-0 w-[150px] lg:w-[300px]" /> */}
            <div className="w-full max-w-7xl mx-auto px-2 md:px-6 py-18">
                <h1 className="text-4xl md:text-4xl lg:text-5xl text-center mb-10 text-[#0046AA] font-medium font-roboto font-semibold">
                    Blogs
                </h1>
                {/* Main Featured Blog + Side Blogs */}
                <div className="flex flex-col lg:flex-row gap-6 mb-12">
                    {/* Main Featured Blog */}
                    <Link
                        href={`/blogs/${main?.slug}`}
                        className="flex-1 relative rounded-lg overflow-hidden group min-h-[350px] lg:min-h-[500px] flex"
                    >
                        <img
                            src={main.image}
                            alt={main.title}
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition"
                        />
                        <div className="relative z-10 flex flex-col justify-end h-full w-full bg-gradient-to-t from-black/60 to-transparent p-6">
                            <span className="inline-block bg-red-400 text-white text-xs px-3 py-1 rounded mb-2 uppercase font-bold w-fit tracking-wider">
                                {main.category}
                            </span>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 max-w-2xl">
                                {main.title}
                            </h2>
                            <div className="flex items-center gap-4 text-gray-200 text-xs md:text-sm">
                                <span>BY {main.author.toUpperCase()}</span>
                                <span>•</span>
                                <span>{main.date}</span>
                                <span>•</span>
                                <span>{main.readTime}</span>
                            </div>
                        </div>
                    </Link>
                    {/* Side Blogs */}
                    <div className="w-full lg:w-[400px] flex flex-col gap-4">
                        {side.map((blog: Blog) => (
                            <Link
                                key={blog.slug}
                                href={`/blogs/${blog.slug}`}
                                className="relative rounded-lg overflow-hidden h-[180px] shadow group min-h-[120px] flex"
                            >
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition"
                                />
                                <div className="relative z-10 flex flex-col justify-end h-full w-full bg-gradient-to-t from-black/60 to-transparent p-4">
                                    <span className="inline-block bg-red-400 text-white text-xs px-3 py-1 rounded mb-2 uppercase w-fit font-bold tracking-wider">
                                        {blog.category}
                                    </span>
                                    <h3 className="text-lg md:text-xl font-bold text-white mb-1">
                                        {blog.title}
                                    </h3>
                                    <div className="flex items-center gap-2 text-gray-200 text-xs">
                                        <svg className="w-4 h-4 inline-block mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
                                        <span>{blog.date}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Editors Choice */}
                <section className="mb-12">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl md:text-2xl font-bold">Editors Choice</h2>
                        <div className="flex gap-2">
                            <button className="w-8 h-8 flex items-center justify-center rounded border text-gray-500 hover:bg-gray-100">
                                <span>&lt;</span>
                            </button>
                            <button className="w-8 h-8 flex items-center justify-center rounded border text-gray-500 hover:bg-gray-100">
                                <span>&gt;</span>
                            </button>
                        </div>
                    </div>
                    <div className="flex gap-6 overflow-x-auto pb-2">
                        {editors.map((post: Blog) => (
                            <Link
                                key={post.slug}
                                href={`/blogs/${post.slug}`}
                                className="min-w-[260px] max-w-[260px] bg-white rounded-lg shadow hover:shadow-lg transition flex-shrink-0"
                            >
                                <img src={post.image} alt={post.title} className="w-full h-36 object-cover rounded-t-lg" />
                                <div className="p-4">
                                    <span className="inline-block bg-gray-200 text-xs px-2 py-1 rounded font-bold mb-2 uppercase">{post.category}</span>
                                    <h3 className="font-semibold text-base mb-2">{post.title}</h3>
                                    <div className="text-xs text-gray-500">{post.date}</div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Events and Activities */}
                <section className="mb-12">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl md:text-2xl font-bold">Events and Activities</h2>
                        <div className="flex gap-2">
                            <button className="w-8 h-8 flex items-center justify-center rounded border text-gray-500 hover:bg-gray-100">
                                <span>&lt;</span>
                            </button>
                            <button className="w-8 h-8 flex items-center justify-center rounded border text-gray-500 hover:bg-gray-100">
                                <span>&gt;</span>
                            </button>
                        </div>
                    </div>
                    <div className="flex gap-6 overflow-x-auto pb-2">
                        {events.map((post: Blog) => (
                            <Link
                                key={post.slug}
                                href={`/blogs/${post.slug}`}
                                className="min-w-[260px] max-w-[260px] bg-white rounded-lg shadow hover:shadow-lg transition flex-shrink-0"
                            >
                                <img src={post.image} alt={post.title} className="w-full h-36 object-cover rounded-t-lg" />
                                <div className="p-4">
                                    <span className="inline-block bg-gray-200 text-xs px-2 py-1 rounded font-bold mb-2 uppercase">{post.category}</span>
                                    <h3 className="font-semibold text-base mb-2">{post.title}</h3>
                                    <div className="text-xs text-gray-500">{post.date}</div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Recent Posts */}
                <section className="flex flex-col lg:flex-row gap-8">
                    {/* Left: Featured + List */}
                    <div className="flex-1">
                        <h2 className="text-xl md:text-2xl font-bold mb-4">Recent Posts</h2>
                        <div className="flex flex-col md:flex-row gap-6">
                            {/* Featured Recent Post */}
                            <Link
                                href={`/blogs/${recent[0]?.slug}`}
                                className="relative rounded-lg overflow-hidden flex-1 min-h-[300px] max-h-[350px] shadow group"
                            >
                                <img src={recent[0].image} alt={recent[0].title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition" />
                                <div className="relative z-10 flex flex-col justify-end h-full w-full bg-gradient-to-t from-black/60 to-transparent p-6">
                                    <span className="inline-block bg-green-600 text-white text-xs px-3 py-1 rounded mb-2 uppercase font-bold w-fit tracking-wider">
                                        {recent[0].category}
                                    </span>
                                    <h3 className="text-lg md:text-2xl font-bold text-white mb-2">{recent[0].title}</h3>
                                    <div className="flex items-center gap-4 text-gray-200 text-xs md:text-sm">
                                        <span>BY {recent[0].author?.toUpperCase()}</span>
                                        <span>•</span>
                                        <span>{recent[0].date}</span>
                                        <span>•</span>
                                        <span>{recent[0].readTime}</span>
                                    </div>
                                </div>
                            </Link>
                            {/* List of Recent Posts */}
                            <div className="flex flex-col gap-4 w-full md:w-64">
                                {recent.slice(1).map((post: Blog) => (
                                    <Link
                                        key={post.slug}
                                        href={`/blogs/${post.slug}`}
                                        className="relative rounded-lg overflow-hidden h-[90px] shadow group flex"
                                    >
                                        <img src={post.image} alt={post.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition" />
                                        <div className="relative z-10 flex flex-col justify-end h-full w-full bg-gradient-to-t from-black/60 to-transparent p-3">
                                            <span className="inline-block bg-green-600 text-white text-xs px-2 py-1 rounded mb-1 uppercase font-bold w-fit tracking-wider">
                                                {post.category}
                                            </span>
                                            <h4 className="text-xs font-semibold text-white mb-1">{post.title}</h4>
                                            <div className="text-[10px] text-gray-200">{post.date}</div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Right: Sidebar */}
                    <aside className="w-full lg:w-[320px] flex-shrink-0 space-y-8 mt-8 lg:mt-0">
                        {/* Subscribe & Followers */}
                        <div>
                            <h3 className="font-bold mb-2">Subscribe & Followers</h3>
                            <SocialMediaButtons />
                        </div>
                        {/* Newsletter */}
                        <div className="bg-blue-900 rounded-lg shadow p-4 text-white">
                            <h4 className="font-bold mb-2">Daily Newsletter</h4>
                            <p className="text-xs mb-3">Get All The Top Stories From Blogs To Keep Track.</p>
                            <div className="flex">
                                <input type="email" placeholder="Enter your e-mail" className="w-full px-3 py-2 rounded text-gray-900 mb-2 bg-white" />
                                <button className="ml-2 bg-green-600 text-white px-4 py-2 rounded font-bold">→</button>
                            </div>
                        </div>
                        {/* Popular Study Destinations */}
                        <div>
                            <h4 className="font-bold mb-2">Popular Study Destinations</h4>
                            <div className="flex flex-wrap gap-2">
                                {['Australia', 'Canada', 'UK', 'USA', 'Europe', 'New Zealand'].map((dest) => (
                                    <span key={dest} className="bg-gray-100 px-3 py-1 rounded text-xs font-semibold text-gray-700">{dest}</span>
                                ))}
                            </div>
                        </div>
                    </aside>
                </section>

                {/* Trending News Section */}
                <div className="w-full flex flex-col lg:flex-row gap-8 mt-12">
                    {/* Trending News */}
                    <section className="flex-1">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl md:text-2xl font-bold">Trending News</h2>
                            {/* <button className="text-xs font-semibold flex items-center gap-1 border px-3 py-1 rounded hover:bg-gray-100">
                                VIEW ALL <span>→</span>
                            </button> */}
                        </div>
                        <div className="border-b mb-6" />
                        <div className="flex flex-col gap-6">
                            {/* Large trending post */}
                            {trending[0] && (
                                <div className="flex flex-col md:flex-row gap-6">
                                    <img
                                        src={trending[0].image}
                                        alt={trending[0].title}
                                        className="rounded-lg w-full md:w-1/2 h-64 object-cover"
                                    />
                                    <div className="flex flex-col justify-between">
                                        <span className="inline-block bg-green-600 text-white text-xs px-3 py-1 rounded mb-2 uppercase font-bold w-fit tracking-wider">
                                            {trending[0].category}
                                        </span>
                                        <h3 className="text-lg md:text-2xl font-bold mb-2">{trending[0].title}</h3>
                                        <div className="flex items-center gap-4 text-gray-500 text-xs md:text-sm mb-2">
                                            <span>BY {trending[0].author?.toUpperCase()}</span>
                                            <span>•</span>
                                            <span>{trending[0].date}</span>
                                            <span>•</span>
                                            <span>{trending[0].readTime}</span>
                                        </div>
                                        <p className="text-gray-700 mb-4">
                                            Moving to the UK for studies is a dream for many Indian students. But what&apos;s a typical day like? From attending early morning lectures to cooking Indian meals in shared accommodations.
                                        </p>
                                        <Link href={`/blogs/${trending[0].slug}`}>
                                            <button className="border px-4 py-2 rounded text-sm font-semibold flex items-center gap-1 hover:bg-gray-100">
                                                READ MORE <span>→</span>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            )}
                            {/* Small trending posts */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                                {trending.slice(1).map((post: Blog) => (
                                    <Link
                                        key={post.slug}
                                        href={`/blogs/${post.slug}`}
                                        className="bg-white rounded-lg shadow hover:shadow-lg transition flex flex-col"
                                    >
                                        <img src={post.image} alt={post.title} className="w-full h-40 object-cover rounded-t-lg" />
                                        <div className="p-4">
                                            <span className="inline-block bg-green-600 text-white text-xs px-2 py-1 rounded mb-2 uppercase font-bold w-fit tracking-wider">
                                                {post.category}
                                            </span>
                                            <h4 className="font-semibold text-base mb-2">{post.title}</h4>
                                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                                <span>BY {post.author?.toUpperCase()}</span>
                                                <span>•</span>
                                                <span>{post.date}</span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                    {/* Sidebar: Popular Posts */}
                    <aside className="w-full lg:w-[320px] flex-shrink-0 mt-8 lg:mt-0">
                        <h3 className="font-bold mb-4">Popular Posts</h3>
                        <div className="border-b mb-4" />
                        <ul className="space-y-4">
                            {popular.map((post, idx) => (
                                <li key={idx} className="flex gap-3 items-center">
                                    <img src={post.image} alt={post.title} className="w-16 h-16 object-cover rounded-lg" />
                                    <div>
                                        <span className="inline-block bg-gray-100 text-xs px-2 py-1 rounded font-bold mb-1 uppercase">{post.category}</span>
                                        <h4 className="font-semibold text-sm">{post.title}</h4>
                                        <div className="text-xs text-gray-500 flex items-center gap-1">
                                            <svg className="w-4 h-4 inline-block" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
                                            <span>{post.date}</span>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </aside>
                </div>
            </div>
            <div className="relative bg-[url(/service-bg.svg)] bg-cover flex flex-col gap-10 md:flex-row justify-between items-center md:items-start bg-no-repeat md:mt-0 pt-10 md:pt-18 xl:pt-20 px-2 md:px-10 py-10 h-auto ">
                    <div className="ms-2 md:ms-10 mb-8 md:mb-0 flex-1 flex flex-col w-1/2">
                        <h1 className="text-3xl md:text-5xl custom1280:text-5xl xl:text-5xl text-[#0046AA] font-medium font-roboto font-semibold">
                            Connect with Experts,<br />
                            <span className="text-[#288737]">Start Your Journey</span>
                        </h1>
                        <p className="w-full md:w-xl text-base md:text-[18px] text-gray-600 mt-5 font-montserrat">
                            Get personalized guidance for your study abroad plans. Our experienced counselors are here to help—book your free virtual session now and take the first step toward your future.
                        </p>
                    </div>
                    <div className="max-w-full md:max-w-2xl flex-1 flex items-center justify-center ">
                        <GetintouchForm />
                    </div>
                </div>
        </div>
    );
}