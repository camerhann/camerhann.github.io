import React from 'react';
import Link from 'next/link';
import { getAllUniqueTags } from '@/lib/posts'; // Assuming posts.ts is in lib

const Navbar = () => {
  const uniqueTags = getAllUniqueTags();

  return (
    <nav className="w-full bg-brand-teal text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold font-sans hover:text-brand-yellow transition-colors">
              [Your Blog Name] {/* Or your actual name/logo component */}
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-brand-teal-dark transition-colors">
              Home
            </Link>
            <Link href="/blog" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-brand-teal-dark transition-colors">
              All Posts
            </Link>
            {uniqueTags.slice(0, 4).map((tag) => ( // Show up to 4 tags, or implement a dropdown for more
              <Link
                key={tag}
                href={`/blog/tag/${encodeURIComponent(tag.toLowerCase())}`}
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-brand-teal-dark transition-colors capitalize"
              >
                {tag}
              </Link>
            ))}
            {/* Consider a 'More Tags' dropdown if you have many tags */}
          </div>
          {/* Mobile menu button - can be implemented later */}
          <div className="md:hidden">
            {/* Placeholder for mobile menu button */}
            <button className="p-2 rounded-md hover:bg-brand-teal-dark focus:outline-none focus:bg-brand-teal-dark">
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 