import Link from 'next/link';
import { getSortedPostsData, PostData } from '@/lib/posts';
import ArticleCard from '@/components/blog/ArticleCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Articles - Chris Cameron-Hann | Flood & Environmental Insights',
  description: 'Explore a collection of articles, guides, and case studies on flood risk management, SuDS, environmental regulations, and sustainable development by Chris Cameron-Hann.',
};

export default function BlogIndexPage() {
  const allPosts = getSortedPostsData();

  return (
    <div data-theme="mytheme">
      <header className="py-12 bg-base-200">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-sans text-brand-teal">All Articles</h1>
          <p className="mt-4 text-lg text-brand-text-dark max-w-2xl mx-auto">
            Explore a collection of insights, guides, and case studies on navigating environmental challenges in development.
          </p>
        </div>
      </header>

      {/* TODO: Add Search and Filter/Category functionality here later */}

      <section className="py-16">
        <div className="container mx-auto px-4">
          {allPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allPosts.map((post: PostData) => (
                <ArticleCard 
                  key={post.slug} 
                  slug={post.slug} 
                  title={post.title} 
                  date={post.date}
                  formattedDate={post.formattedDate}
                  description={post.description}
                  author={post.author}
                  tags={post.tags}
                  featured_image={post.featured_image}
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-brand-text-light text-xl">No articles published yet. Check back soon!</p>
          )}
        </div>
      </section>
      {/* Optional: Pagination if many posts */}
    </div>
  );
} 