import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Chris Cameron-Hann - Flood & Environmental Consulting Enquiries',
  description: 'Get in touch with Chris Cameron-Hann for discussions on flood risk, drainage, environmental consulting, or collaboration opportunities. Contact Aegaea for expert advice.',
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto py-8" data-theme="mytheme">
      <h1 className="text-4xl font-bold font-sans text-brand-teal mb-8 text-center">Get In Touch</h1>
      <div className="bg-brand-bg-card p-8 rounded-lg shadow-lg">
        <p className="text-lg text-brand-text-dark mb-6">
          I'm always open to discussing new projects, collaborations, or simply sharing insights on flood risk management, sustainable development, and environmental best practices. 
        </p>
        <p className="text-lg text-brand-text-dark mb-6">
          Please feel free to reach out via the contact details below, and I'll get back to you as soon as possible.
        </p>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold font-sans text-brand-teal mb-2">Email</h3>
          <a href="mailto:chris@aegaea.com" className="text-brand-teal hover:text-brand-teal-light text-lg break-all">
            chris@aegaea.com
          </a>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold font-sans text-brand-teal mb-2">Phone</h3>
          <a href="tel:07383557941" className="text-brand-teal hover:text-brand-teal-light text-lg">
            07383557941
          </a>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold font-sans text-brand-teal mb-2">Website (Aegaea)</h3>
          <a href="https://www.aegaea.com" target="_blank" rel="noopener noreferrer" className="text-brand-teal hover:text-brand-teal-light text-lg">
            www.aegaea.com
          </a>
        </div>

        {/* Optional: LinkedIn Profile Link */}
        {/* <div className="mb-6">\
          <h3 className="text-xl font-semibold font-sans text-brand-teal mb-2">LinkedIn</h3>
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-brand-teal hover:text-brand-teal-light text-lg">\
            Connect on LinkedIn
          </a>
        </div> */}

        {/* Basic Contact Form (Example - requires backend or a service like Formspree/Netlify Forms) */}
        {/* 
        <form action="YOUR_FORMSPREE_ENDPOINT" method="POST" className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-brand-text-dark">Full Name</label>
            <input type="text" name="name" id="name" required className="mt-1 block w-full input input-bordered focus:ring-brand-teal focus:border-brand-teal" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-brand-text-dark">Email Address</label>
            <input type="email" name="email" id="email" required className="mt-1 block w-full input input-bordered focus:ring-brand-teal focus:border-brand-teal" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-brand-text-dark">Message</label>
            <textarea name="message" id="message" rows={4} required className="mt-1 block w-full textarea textarea-bordered focus:ring-brand-teal focus:border-brand-teal"></textarea>
          </div>
          <div>
            <button type="submit" className="btn btn-primary bg-brand-teal hover:bg-brand-teal-light border-none text-white font-sans">\
              Send Message
            </button>
          </div>
        </form>
        */}
        
        <p className="text-md text-brand-text-light mt-8">
          Looking forward to hearing from you!
        </p>
      </div>
    </div>
  );
} 