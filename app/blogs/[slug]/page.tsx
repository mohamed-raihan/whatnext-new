import { getBlogs } from '../../sections/Blogs/blogData';
import BlogSection from '../../sections/Blogs/BlogSection';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function BlogPage({ params }: Props) {
  // Await the params Promise
  const { slug } = await params;
  
  console.log('Checking slug:', slug);
  const blogs = await getBlogs();
  console.log(blogs);
  
  // Find the blog by slug (case-insensitive)
  const data = blogs.find(blog => blog.slug.toLowerCase() === slug.toLowerCase());
  
  if (!data) return notFound();
  
  return <BlogSection {...data} />;
}