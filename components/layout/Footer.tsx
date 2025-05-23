import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer footer-center p-10 bg-brand-bg-card text-brand-text-light border-t border-gray-200 mt-16" data-theme="mytheme">
      <nav className="grid grid-flow-col gap-4">
        <Link href="/about" className="link link-hover">About</Link>
        <Link href="/contact" className="link link-hover">Contact</Link>
        <Link href="/blog" className="link link-hover">Articles</Link>
      </nav>
      <aside>
        <p>&copy; {currentYear} [Your Name] - All rights reserved.</p>
        <p>Expert Insights on Flood Risk & Environmental Consulting.</p>
        {/* Optional: Link to Aegaea or other affiliations */}
      </aside>
      {/* Optional: Social media icons */}
    </footer>
  );
};

export default Footer; 