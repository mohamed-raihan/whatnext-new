import React from 'react';
import type { BlogData } from './blogData';
import Image from 'next/image';

// interface Props extends BlogData {}

const BlogSection: React.FC<BlogData> = ({
  title,
  author,
  date,
  mainImage,
  content,
  tags,
  category,
  readTime,
}) => {
  return (
    <div className="w-full bg-white mb-20">
      {/* Hero Section */}
      <div className="relative w-full h-64 md:h-140 flex items-end justify-start bg-gray-100 rounded-lg overflow-hidden">
        <Image src={mainImage} alt={title} className="absolute inset-0 w-full h-full object-cover center" width={1000} height={1000} />
        <div className="relative z-10 p-6 md:p-10 bg-gradient-to-t from-black/70 to-transparent w-full">
          <span className="inline-block bg-red-600 text-white text-xs px-3 py-1 rounded mb-2 uppercase font-bold tracking-wider">{category}</span>
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-2 max-w-2xl">{title}</h1>
          <div className="flex items-center gap-4 text-gray-200 text-xs md:text-sm">
            <span>By {author}</span>
            <span>•</span>
            <span>{date}</span>
            <span>•</span>
            <span>{readTime}</span>
          </div>
        </div>
      </div>
      {/* Main Content & Sidebar */}
      <div className="flex flex-col lg:flex-row gap-8 mt-8 max-w-7xl mx-auto px-4 md:px-8">
        {/* Main Content */}
        <div className="flex-1 min-w-0">
          <div className="prose max-w-none text-gray-800">
            <div
              className="font-montserrat text-justify "
              dangerouslySetInnerHTML={{ __html: content }}
            />
            {/* Add more content blocks as needed */}
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {tags.map((tag, idx) => (
              <span key={idx} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">{tag}</span>
            ))}
          </div>
        </div>
        {/* Sidebar */}
        <aside className="w-full lg:w-80 flex-shrink-0 space-y-8">
          {/* Subscribe & Followers */}
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="font-bold mb-2">Subscribe & Followers</h3>
            <div className="flex flex-wrap gap-2">
              {['Facebook', 'Twitter', 'Instagram', 'Youtube', 'LinkedIn', 'Pinterest'].map((platform) => (
                <button key={platform} className="bg-gray-100 px-3 py-1 rounded text-xs font-semibold text-gray-700 hover:bg-blue-100">{platform}</button>
              ))}
            </div>
          </div>
          {/* Newsletter */}
          <div className="bg-blue-900 rounded-lg shadow p-4 text-white">
            <h4 className="font-bold mb-2">Daily Newsletter</h4>
            <p className="text-xs mb-3">Get All The Top Stories From Blogs To Keep Track.</p>
            <input type="email" placeholder="Enter your e-mail" className="w-full px-3 py-2 rounded bg-white text-gray-900 mb-2" />
            <button className="w-full bg-green-600 text-white py-2 rounded font-bold">Subscribe</button>
          </div>
          {/* Popular Study Destinations */}
          <div className="bg-white rounded-lg shadow p-4">
            <h4 className="font-bold mb-2">Popular Study Destinations</h4>
            <div className="flex flex-wrap gap-2">
              {['Australia', 'Canada', 'UK', 'USA', 'Europe', 'New Zealand'].map((dest) => (
                <span key={dest} className="bg-gray-100 px-3 py-1 rounded text-xs font-semibold text-gray-700">{dest}</span>
              ))}
            </div>
          </div>
          {/* Popular Posts */}
          <div className="bg-white rounded-lg shadow p-4">
            <h4 className="font-bold mb-2">Popular Posts</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="bg-yellow-300 text-xs px-2 py-1 rounded font-bold">GADGET</span>
                <span className="text-sm font-semibold">Influence The Future Of CSS</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-blue-200 text-xs px-2 py-1 rounded font-bold">NEWS</span>
                <span className="text-sm font-semibold">Best Tech Accessor To Work From Home</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-gray-300 text-xs px-2 py-1 rounded font-bold">TECHNOLOGY</span>
                <span className="text-sm font-semibold">The Butter Chocolate Cookies Daily</span>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default BlogSection; 