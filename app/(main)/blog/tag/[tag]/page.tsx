import Link from 'next/link';
import { getAllUniqueTags, getPostsByTag, PostData } from '@/lib/posts';
import ArticleCard from '@/components/blog/ArticleCard'; // Assuming you have an ArticleCard component
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    tag: string;
  };
};

export async function generateStaticParams() {
  const tags = getAllUniqueTags();
  return tags.map(tag => ({ tag: encodeURIComponent(tag.toLowerCase()) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tagName = decodeURIComponent(params.tag);
  // Capitalize the first letter of each word in the tag for the title
  const titleCaseTagName = tagName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  return {
    title: `Posts tagged with "${titleCaseTagName}" - [Your Name]`,
    description: `Browse articles related to ${titleCaseTagName} on [Your Name]'s blog.`,
  };
}

export default function TagPage({ params }: Props) {
  const tagName = decodeURIComponent(params.tag);
  const posts = getPostsByTag(tagName);

  if (!posts || posts.length === 0) {
    // Or provide a message like "No posts found for this tag."
    // For now, let's keep it simple and show notFound, but ideally you might want a softer message.
    // notFound(); 
    // Instead of notFound, render a message:
    return (
      <div className="text-center py-12">
        <h1 className="text-3xl font-bold text-brand-teal mb-4">
          No posts found for "{tagName}"
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Sorry, there are no articles tagged with "{tagName}" at the moment.
        </p>
        <Link href="/blog" className="text-brand-teal hover:text-brand-teal-light font-sans">
          &larr; View all articles
        </Link>
        <br />
        <Link href="/" className="mt-4 inline-block text-brand-teal hover:text-brand-teal-light font-sans">
          &larr; Back to Home
        </Link>
      </div>
    );
  }

  const titleCaseTagName = tagName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <div className="py-8">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold font-sans text-brand-teal">
          Posts tagged with: <span className="capitalize">"{titleCaseTagName}"</span>
        </h1>
      </header>

      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-center text-lg text-gray-600">No posts found for this tag.</p>
      )}

      <div className="mt-12 text-center">
        <Link href="/blog" className="text-brand-teal hover:text-brand-teal-light font-sans">
          &larr; View all articles
        </Link>
        <br />
        <Link href="/" className="mt-4 inline-block text-brand-teal hover:text-brand-teal-light font-sans">
          &larr; Back to Home
        </Link>
      </div>
    </div>
  );
} 