import Link from 'next/link';
import Image from 'next/image';
import type { PostData } from '@/lib/posts';

interface ArticleCardProps {
  post: PostData;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ post }) => {
  return (
    <Link href={`/blog/${post.slug}`} className="block group border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      {post.featured_image && (
        <div className="aspect-video relative w-full overflow-hidden">
          <Image 
            src={post.featured_image} 
            alt={post.title} 
            fill
            className="absolute h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="p-6">
        <h2 className="text-xl font-semibold font-sans text-brand-teal group-hover:text-brand-teal-light mb-2 leading-tight">
          {post.title}
        </h2>
        {post.formattedDate && (
          <p className="text-sm text-gray-500 mb-2">{post.formattedDate}</p>
        )}
        {post.description && (
          <p className="text-gray-600 text-sm mb-3 leading-relaxed line-clamp-3">
            {post.description}
          </p>
        )}
        <div className="mt-auto">
          <span className="text-sm font-medium text-brand-blue group-hover:underline">
            Read more &rarr;
          </span>
        </div>
        {post.tags && post.tags.length > 0 && (
          <div className="mt-4 pt-3 border-t border-gray-100">
            {post.tags.slice(0, 3).map(tag => (
              <span key={tag} className="inline-block bg-gray-100 text-gray-700 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full capitalize">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
};

export default ArticleCard; 