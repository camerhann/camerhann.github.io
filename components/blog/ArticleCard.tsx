import Link from 'next/link';
import Image from 'next/image';
import { PostData } from '@/lib/posts'; // Assuming PostData interface is exported from posts.ts

interface ArticleCardProps extends Omit<PostData, 'contentHtml'> {}

const ArticleCard: React.FC<ArticleCardProps> = ({ 
  slug, 
  title, 
  formattedDate, 
  description, 
  author,
  tags,
  featured_image 
}) => {
  return (
    <div className="card bg-brand-bg-card shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out h-full flex flex-col" data-theme="mytheme">
      {featured_image && (
        <figure className="relative h-48 w-full">
          <Image 
            src={featured_image} 
            alt={title} 
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </figure>
      )}
      <div className="card-body flex flex-col flex-grow">
        <h2 className="card-title font-sans text-brand-teal hover:text-brand-teal-light">
          <Link href={`/blog/${slug}`}>{title}</Link>
        </h2>
        {formattedDate && <p className="text-sm text-brand-text-light font-serif">{formattedDate} {author && <>by {author}</>}</p>}
        <p className="text-brand-text-dark font-serif flex-grow py-2">{description ? description.substring(0, 150) + (description.length > 150 ? '...' : '') : 'Read more to find out...'}</p>
        {tags && tags.length > 0 && (
          <div className="card-actions justify-start mt-2 flex-wrap">
            {tags.slice(0, 3).map(tag => (
              <div key={tag} className="badge badge-outline border-brand-teal text-brand-teal text-xs font-sans">{tag}</div>
            ))}
          </div>
        )}
        <div className="card-actions justify-end mt-auto pt-4">
          <Link href={`/blog/${slug}`} className="btn btn-sm btn-ghost text-brand-teal hover:bg-brand-teal/10 font-sans">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard; 