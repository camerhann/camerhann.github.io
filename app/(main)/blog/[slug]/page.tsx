import { getPostData, getAllPostSlugs, PostData, getSortedPostsData } from '@/lib/posts';
import ArticleMeta from '@/components/blog/ArticleMeta';
import SocialShare from '@/components/ui/SocialShare';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation'; // For handling non-existent slugs
import Image from 'next/image';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const slugs = getAllPostSlugs(); // Returns [{ slug: '...' }, ...]
  return slugs.map(item => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const post = await getPostData(params.slug);
    return {
      title: `${post.title} - [Your Name]`,
      description: post.description || 'An insightful article from [Your Name]',
      authors: [{ name: post.author || '[Your Name]' }],
      openGraph: {
        title: post.title,
        description: post.description || '',
        type: 'article',
        publishedTime: post.date, // Assumes date is in ISO format
        authors: [post.author || '[Your Name]'],
        tags: post.tags,
        images: post.featured_image ? [{ url: `https://yourdomain.com${post.featured_image}` }] : [], // Replace with your actual domain
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.description || '',
        images: post.featured_image ? [`https://yourdomain.com${post.featured_image}`] : [], // Replace with your actual domain
      },
    };
  } catch (error) {
    // Post not found, metadata for a 404 page or default
    return {
      title: 'Article Not Found',
      description: 'The article you are looking for could not be found.',
    };
  }
}

export default async function PostPage({ params }: Props) {
  let post: PostData;
  try {
    post = await getPostData(params.slug);
  } catch (error) {
    notFound(); // This will render the nearest not-found.tsx file or a default Next.js 404 page
  }

  const siteUrl = 'https://yourdomain.com'; // Replace with your actual domain
  const currentUrl = `${siteUrl}/blog/${params.slug}`;

  // Get all posts for Next/Previous navigation
  const allPosts = getSortedPostsData();
  const currentIndex = allPosts.findIndex(p => p.slug === params.slug);
  
  let previousPost: PostData | null = null;
  if (currentIndex > 0) {
    previousPost = allPosts[currentIndex - 1];
  }

  let nextPost: PostData | null = null;
  if (currentIndex < allPosts.length - 1 && currentIndex !== -1) {
    nextPost = allPosts[currentIndex + 1];
  }

  return (
    <article className="max-w-3xl mx-auto py-8" data-theme="mytheme">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-sans text-brand-teal leading-tight mb-4">
          {post.title}
        </h1>
        <ArticleMeta 
          date={post.formattedDate} 
          author={post.author} 
          tags={post.tags} 
          // categories={post.categories} // Add if you use categories
        />
      </header>
      
      {post.featured_image && (
        <div className="mb-8 aspect-video relative overflow-hidden rounded-lg shadow-lg">
          <Image 
            src={post.featured_image} 
            alt={`Featured image for ${post.title}`} 
            fill
            className="absolute h-full w-full object-cover"
            sizes="(max-width: 768px) 100vw, 700px"
            priority={true}
          />
        </div>
      )}

      {/* Apply Tailwind Typography for markdown styling */}
      <div 
        className="prose prose-lg lg:prose-xl max-w-none prose-headings:font-sans prose-p:font-sans prose-li:font-sans prose-a:text-brand-teal hover:prose-a:text-brand-teal-light prose-img:rounded-xl prose-img:shadow-md font-sans"
        dangerouslySetInnerHTML={{ __html: post.contentHtml || '' }}
      />

      <SocialShare url={currentUrl} title={post.title} description={post.description} />

      {/* Next/Previous Post Navigation */}
      <div className="mt-12 pt-8 border-t border-gray-200 flex justify-between items-center">
        <div>
          {previousPost && (
            <Link href={`/blog/${previousPost.slug}`}>
              <span className="text-brand-teal hover:text-brand-teal-light font-sans text-sm block">
                &larr; Previous Post
              </span>
              <span className="text-lg font-semibold text-gray-700 hover:text-brand-teal block truncate w-48 md:w-64">
                {previousPost.title}
              </span>
            </Link>
          )}
        </div>
        <div>
          {nextPost && (
            <Link href={`/blog/${nextPost.slug}`} className="text-right">
              <span className="text-brand-teal hover:text-brand-teal-light font-sans text-sm block">
                Next Post &rarr;
              </span>
              <span className="text-lg font-semibold text-gray-700 hover:text-brand-teal block truncate w-48 md:w-64">
                {nextPost.title}
              </span>
            </Link>
          )}
        </div>
      </div>

      <div className="mt-8 pt-8 border-t border-gray-200">
        <Link href="/blog" className="text-brand-teal hover:text-brand-teal-light font-sans">
          &larr; Back to all articles
        </Link>
      </div>
    </article>
  );
} 