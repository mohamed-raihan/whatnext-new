'use client'
import { API_URL } from "@/app/api-services/api_url";
import api from "@/app/api-services/axios";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { useEffect, useState } from "react";

type VideoItem = {
  id: number;
  username: string;
  thumbnail: string;
  video: string;
};

export async function getSuccessVideos() {
  const response = await api.get(API_URL.HOME.SUCCESS_VIDEOS);
  console.log(response);
  
  return response.data;
}

const initialVideos: VideoItem[] = [
  {
    id: 1,
    username: "@whatnextoverseas",
    thumbnail: "/success1.svg",
    video: "#",
  },
  {
    id: 2,
    username: "@whatnextoverseas",
    thumbnail: "/success2.svg",
    video: "#",
  },
  {
    id: 3,
    username: "@whatnextoverseas",
    thumbnail: "/success3.svg",
    video: "#",
  },
  {
    id: 4,
    username: "@whatnextoverseas",
    thumbnail: "/success1.svg",
    video: "#",
  },
  {
    id: 5,
    username: "@whatnextoverseas",
    thumbnail: "/success2.svg",
    video: "#",
  },
  {
    id: 6,
    username: "@whatnextoverseas",
    thumbnail: "/success3.svg",
    video: "#",
  },
  {
    id: 7,
    username: "@whatnextoverseas",
    thumbnail: "/success1.svg",
    video: "#",
  },
  {
    id: 8,
    username: "@whatnextoverseas",
    thumbnail: "/success2.svg",
    video: "#",
  },
  {
    id: 9,
    username: "@whatnextoverseas",
    thumbnail: "/success3.svg",
    video: "#",
  },
  {
    id: 10,
    username: "@whatnextoverseas",
    thumbnail: "/success1.svg",
    video: "#",
  },
];

const VoiceOfSuccess = () => {
  const [videos, setVideos] = useState<VideoItem[]>(initialVideos);
  const [playingVideoId, setPlayingVideoId] = useState<string | number>();
  const [currentPage, setCurrentPage] = useState(0);
  const [videosPerPage, setVideosPerPage] = useState(5);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const data = await getSuccessVideos();
        console.log(data);
        
        if (data && data.length > 0) {
          const formattedVideos = data.map((item: VideoItem, index: number) => ({
            id: index + 1,
            username: item.username || "@whatnextoverseas",
            thumbnail: item.thumbnail || `/success${(index % 3) + 1}.svg`,
            video: item.video || "#"
          }));
          setVideos(formattedVideos);
        }
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  // Handle responsive videos per page
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) { // xl screen
        setVideosPerPage(5);
      } else if (window.innerWidth >= 1024) { // lg screen
        setVideosPerPage(3);
      } else if (window.innerWidth >= 768) { // md screen
        setVideosPerPage(2);
      } else { // sm and below
        setVideosPerPage(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Reset to first page when videos per page changes
  useEffect(() => {
    setCurrentPage(0);
  }, [videosPerPage]);

  console.log(videos);

  const handlePlayClick = (videoId: number | string) => {
    console.log(videoId);
    
    setPlayingVideoId(videoId);
  };

  const handleDotClick = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };

  // Calculate pagination
  const totalPages = Math.ceil(videos.length / videosPerPage);
  const startIndex = currentPage * videosPerPage;
  const endIndex = startIndex + videosPerPage;
  const currentVideos = videos.slice(startIndex, endIndex);

  return (
    <section className="py-16 px-6 lg:px-20 bg-white text-center">
      <h2 className="text-3xl font-bold text-blue-800 mb-10">Voice of Success</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-center">
      {currentVideos.map((video) => (
        <div
          key={video.id}
          className="relative rounded-xl overflow-hidden shadow-md group hover:scale-105 transition-transform duration-300 cursor-pointer "
        >
          {playingVideoId === video.id ? (
            <video
              src={video.video}
              controls
              autoPlay
              className="w-full h-full object-cover"
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <>
              <Image
                src={video.thumbnail}
                alt={`Thumbnail for video ${video.id}`}
                width={300}
                height={300}
                className="w-full h-110 object-cover"
              />
              <div className="absolute flex items-center gap-2 top-2 left-2 px-2 py-1 text-xs font-semibold">
                <Image
                  src="/smallLogo.svg"
                  alt="Logo"
                  width={20}
                  height={20}
                  className="w-full h-full object-cover"
                />
                <p>{video.username}</p>
              </div>
              <div
                className="absolute inset-0 flex items-center justify-center"
                onClick={() => handlePlayClick(video.id)}
              >
                <div className="bg-white rounded-full p-3 shadow-lg hover:scale-110 transition-transform">
                  <FaPlay className="text-blue-600 w-5 h-5" />
                </div>
              </div>
            </>
          )}
        </div>
      ))}
    </div>

      {/* Functional Carousel Dots */}
      {totalPages > 1 && (
        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentPage ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default VoiceOfSuccess;
