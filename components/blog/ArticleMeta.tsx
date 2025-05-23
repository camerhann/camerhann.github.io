import React from 'react';

interface ArticleMetaProps {
  date?: string;
  author?: string;
  tags?: string[];
}

const ArticleMeta: React.FC<ArticleMetaProps> = ({ date, author, tags }) => {
  return (
    <div className="text-sm text-gray-500 mb-4 flex flex-wrap gap-4 items-center">
      {date && <span>{date}</span>}
      {author && <span>by {author}</span>}
      {tags && tags.length > 0 && (
        <span>
          {tags.map((tag, idx) => (
            <span key={tag} className="inline-block bg-brand-teal/10 text-brand-teal px-2 py-1 rounded mr-1">
              #{tag}
            </span>
          ))}
        </span>
      )}
    </div>
  );
};

export default ArticleMeta; 