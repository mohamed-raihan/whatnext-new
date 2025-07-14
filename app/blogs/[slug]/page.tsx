import { getBlogs } from '../../sections/Blogs/blogData';
import BlogSection from '../../sections/Blogs/BlogSection';
import { notFound } from 'next/navigation';

// type PageProps = {
//   params: { slug: string };
//   searchParams: { [key: string]: string | string[] | undefined };
// }

interface Props {
  params: { slug: string };
}

export default async function BlogPage({ params }: Props) {
  const { slug } = params;
  console.log('Checking slug:', slug);
  
  const blogs = await getBlogs();
  console.log(blogs);
  
  // Find the blog by slug (case-insensitive)
  const data = blogs.find(blog => blog.slug.toLowerCase() === slug.toLowerCase());
  if (!data) return notFound();
  return <BlogSection {...data} />;
}

// export default function BlogPage() {
//     return <div>BlogPage</div>;
// }