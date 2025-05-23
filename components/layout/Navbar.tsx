import React from 'react';
import Link from 'next/link';

const Navbar = () => (
  <nav className="w-full bg-brand-teal text-white p-4 shadow-md">
    <div className="container mx-auto flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold hover:text-gray-200 transition-colors">
        Aegaea
      </Link>
      <div className="space-x-4">
        <Link href="/" className="hover:text-gray-200 transition-colors">
          Home
        </Link>
        <Link href="/blog" className="hover:text-gray-200 transition-colors">
          Blog
        </Link>
        <Link href="/about" className="hover:text-gray-200 transition-colors">
          About
        </Link>
        <Link href="/contact" className="hover:text-gray-200 transition-colors">
          Contact
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar; 