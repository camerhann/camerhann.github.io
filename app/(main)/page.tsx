import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts'; // We'll create this lib file soon
import ArticleCard from '@/components/blog/ArticleCard'; // We'll create this component soon

export default async function HomePage() {
  const latestPosts = getSortedPostsData().slice(0, 3); // Get latest 3 posts

  return (
    <div data-theme="mytheme">
      <section className="hero min-h-[60vh] bg-base-200" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)' }}> {/* Placeholder image */}
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold font-sans text-white">Flood Risk Online</h1>
            <p className="mb-5 font-serif text-lg">
              Sharing expert insights on tehcnology,flood risk, drainage, environmental consulting, and building resilient futures.
            </p>
            <Link href="/blog" className="btn btn-primary bg-brand-teal hover:bg-brand-teal-light border-none text-white font-sans">
              Explore Articles
            </Link>
            <div className="mt-10">
              <h2 className="text-3xl font-bold mb-4 font-sans text-white">My Mission</h2>
              <p className="text-lg text-gray-200 mb-4">
                To provide clear, actionable, and data-driven advice that empowers developers, businesses, and communities to navigate complex environmental challenges and build more sustainably and resiliently.
              </p>
              <Link href="/about" className="btn btn-ghost text-gray-100 hover:bg-white/10 font-sans">
                Learn More About Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* New structure for main content and sidebar */}
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row gap-8">
        {/* Main content area */}
        <main className="w-full md:w-2/3">
          <section>
            <h2 className="text-3xl font-bold text-center md:text-left mb-12 font-sans text-brand-teal">Latest Insights</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {latestPosts.map(({ slug, title, date, description, author, tags, featured_image }) => (
                <ArticleCard 
                  key={slug} 
                  slug={slug} 
                  title={title} 
                  date={date} 
                  description={description} 
                  author={author}
                  tags={tags}
                  featured_image={featured_image}
                />
              ))}
            </div>
            <div className="text-center md:text-left mt-12">
              <Link href="/blog" className="btn btn-outline border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white font-sans">
                View All Articles
              </Link>
            </div>
          </section>
          {/* You can add more sections to the main content area here if needed */}
        </main>

        {/* Right Navigation Panel (Sidebar) */}
        <aside className="w-full md:w-1/3">
          <div className="sticky top-16 p-4 bg-base-100 rounded-lg shadow">
            <h3 className="text-2xl font-bold mb-6 font-sans text-brand-teal">Quick Access</h3>
            <ul className="space-y-3">
              {getSortedPostsData().map(({ slug, title }) => (
                <li key={slug}>
                  <Link href={`/blog/${slug}`} className="hover:text-brand-teal hover:underline font-serif">
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
      {/* End of new structure */}
    </div>
  );
} 