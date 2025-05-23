import type { Metadata } from 'next';
import Image from 'next/image'; // Optional: if you want to use next/image

export const metadata: Metadata = {
  title: 'About [Your Name] - Flood & Environmental Expertise',
  description: 'Learn more about [Your Name], an expert in flood risk, drainage, and environmental consulting dedicated to building resilient futures.',
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto py-8" data-theme="mytheme">
      <h1 className="text-4xl font-bold font-sans text-brand-teal mb-8 text-center">About Me</h1>
      
      <div className="bg-brand-bg-card p-8 rounded-lg shadow-lg">
        {/* Optional: Placeholder for a professional photo 
        <div className="mb-8 text-center">
          <Image 
            src="/images/your-profile-photo.jpg" // Replace with your photo path in /public/images
            alt="[Your Name] - Profile Photo"
            width={200}
            height={200}
            className="rounded-full mx-auto shadow-md"
            priority
          />
        </div>
        */}
        
        <h2 className="text-2xl font-semibold font-sans text-brand-teal mb-4">[Your Name]</h2>
        <p className="text-lg text-brand-text-dark mb-4">
          Hello! I&#39;m [Your Name], a passionate and experienced consultant specializing in flood risk management, sustainable drainage systems (SuDS), and comprehensive environmental assessments. With [X] years in the field, I&#39;ve had the privilege of working with a diverse range of clients, from national developers and industrial operators to local authorities and private landowners.
        </p>
        <p className="text-lg text-brand-text-dark mb-4">
          My core mission is to bridge the gap between complex environmental challenges and pragmatic, effective solutions. I believe that sustainable development and robust resilience are not mutually exclusive but can, and should, go hand-in-hand.
        </p>
        <p className="text-lg text-brand-text-dark mb-4">
          Through this blog, I aim to share insights, demystify regulations, and offer practical guidance to help you navigate the intricacies of environmental planning and create projects that are not only compliant but also contribute positively to our built and natural environments.
        </p>
        
        <h3 className="text-xl font-semibold font-sans text-brand-teal mt-6 mb-3">My Expertise Includes:</h3>
        <ul className="list-disc list-inside text-brand-text-dark space-y-1 mb-4">
          <li>Comprehensive Flood Risk Assessments (FRAs) for all development types.</li>
          <li>Sustainable Drainage System (SuDS) design and SAB approval (Wales).</li>
          <li>Natural Flood Management (NFM) and Blue-Green Infrastructure design.</li>
          <li>Environmental Impact Assessment (EIA) support.</li>
          <li>Coastal erosion and shoreline management planning.</li>
          <li>Environmental permitting and compliance.</li>
          <li>Climate change adaptation strategies for developments.</li>
        </ul>

        <p className="text-lg text-brand-text-dark mb-4">
          Currently, I [mention your current role, e.g., lead environmental consultant at Aegaea / operate as an independent consultant / etc.]. I&#39;m always keen to connect with like-minded professionals and those looking to build more resilient and sustainable futures.
        </p>

        {/* Optional: Link to LinkedIn or professional profile */}
        {/* <Link href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="btn btn-outline border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white mt-4">
          Connect on LinkedIn
        </Link> */}
      </div>
    </div>
  );
} 