import { getPostData, getAllPostSlugs, PostData } from '@/lib/posts';
import ArticleMeta from '@/components/blog/ArticleMeta';
import SocialShare from '@/components/ui/SocialShare';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation'; // For handling non-existent slugs
import Image from 'next/image';
import Script from 'next/script'; // Import Script for JSON-LD

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
    if (!post) {
      return notFound();
    }
    const siteUrl = 'https://camerhann.github.io'; // Corrected siteUrl
    const imageUrl = post.featured_image ? `${siteUrl}${post.featured_image}` : undefined;

    return {
      title: `${post.title} - Chris Cameron-Hann`,
      description: post.description || 'An insightful article from Chris Cameron-Hann',
      authors: [{ name: post.author || 'Chris Cameron-Hann' }],
      keywords: post.tags, // Assuming tags can be used as keywords
      openGraph: {
        title: post.title,
        description: post.description || '',
        url: `${siteUrl}/blog/${params.slug}`,
        siteName: 'Chris Cameron-Hann\'s Blog', // Or your site name
        type: 'article',
        publishedTime: new Date(post.date).toISOString(),
        authors: [post.author || 'Chris Cameron-Hann'],
        tags: post.tags,
        images: imageUrl ? [{ url: imageUrl }] : [],
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.description || '',
        creator: '@YourTwitterHandle', // Optional: Add your Twitter handle
        images: imageUrl ? [imageUrl] : [],
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

  const siteUrl = 'https://camerhann.github.io'; // Corrected siteUrl
  const currentUrl = `${siteUrl}/blog/${params.slug}`;
  const authorName = post.author || 'Chris Cameron-Hann';
  const featuredImageUrl = post.featured_image ? `${siteUrl}${post.featured_image}` : undefined;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': currentUrl,
    },
    headline: post.title,
    description: post.description || '',
    image: featuredImageUrl,
    author: {
      '@type': 'Person',
      name: authorName,
      // Optional: Add URL to an author page or social profile if available
      // url: `${siteUrl}/about` 
    },
    publisher: {
      '@type': 'Organization',
      name: 'Chris Cameron-Hann', // Or your organization name if different
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/images/logo.png`, // Replace with path to your site logo if you have one
      },
    },
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(), // Assuming date is last modification, update if you have a separate modified_date
  };

  return (
    <>
      <Script
        id="article-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
          className="prose prose-lg lg:prose-xl max-w-none prose-headings:font-sans prose-a:text-brand-teal hover:prose-a:text-brand-teal-light prose-img:rounded-xl prose-img:shadow-md"
          dangerouslySetInnerHTML={{ __html: post.contentHtml || '' }}
        />

        <SocialShare url={currentUrl} title={post.title} description={post.description} />

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/blog" className="text-brand-teal hover:text-brand-teal-light font-sans">
            &larr; Back to all articles
          </Link>
        </div>
      </article>
    </>
  );
} 