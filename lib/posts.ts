import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { format, parseISO } from 'date-fns';

export interface PostData {
  slug: string;
  title: string;
  date: string; // Store as ISO string initially
  formattedDate?: string; // For display
  author?: string;
  description?: string;
  tags?: string[];
  categories?: string[];
  featured_image?: string;
  contentHtml?: string; // For full post
  // Add any other front matter fields you expect
}

const postsDirectory = path.join(process.cwd(), 'content');

export function getSortedPostsData(limit?: number): PostData[] {
  let fileNames = fs.readdirSync(postsDirectory).filter(f => f.endsWith('.md'));

  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    const post: PostData = {
      slug,
      title: matterResult.data.title || 'Untitled Post',
      date: matterResult.data.date ? format(parseISO(matterResult.data.date), 'yyyy-MM-dd') : format(new Date(), 'yyyy-MM-dd'),
      formattedDate: matterResult.data.date ? format(parseISO(matterResult.data.date), 'MMMM d, yyyy') : format(new Date(), 'MMMM d, yyyy'),
      author: matterResult.data.author || 'Chris Cameron-Hann',
      description: matterResult.data.description || '',
      tags: matterResult.data.tags || [],
      categories: matterResult.data.categories || [],
      featured_image: matterResult.data.featured_image || '',
    };
    return post;
  });

  // Sort posts by date in descending order
  const sortedPosts = allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));

  if (limit) {
    return sortedPosts.slice(0, limit);
  }
  return sortedPosts;
}

export async function getPostData(slug: string): Promise<PostData> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Post not found: ${slug}`);
  }
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  const contentHtml = marked.parse(matterResult.content) as string;

  const post: PostData = {
    slug,
    title: matterResult.data.title || 'Untitled Post',
    date: matterResult.data.date ? format(parseISO(matterResult.data.date), 'yyyy-MM-dd') : format(new Date(), 'yyyy-MM-dd'),
    formattedDate: matterResult.data.date ? format(parseISO(matterResult.data.date), 'MMMM d, yyyy') : format(new Date(), 'MMMM d, yyyy'),
    author: matterResult.data.author || 'Chris Cameron-Hann',
    description: matterResult.data.description || '',
    tags: matterResult.data.tags || [],
    categories: matterResult.data.categories || [],
    featured_image: matterResult.data.featured_image || '',
    contentHtml,
  };
  return post;
}

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory).filter(f => f.endsWith('.md'));
  return fileNames.map((fileName) => {
    return {
      slug: fileName.replace(/\.md$/, ''),
    };
  });
} 