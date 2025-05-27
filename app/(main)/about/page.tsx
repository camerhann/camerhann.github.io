import type { Metadata } from 'next';
import Image from 'next/image'; // Optional: if you want to use next/image
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Chris Cameron-Hann - Flood & Environmental Expertise',
  description: 'Learn more about Chris Cameron-Hann, an expert in flood risk, drainage, and environmental consulting dedicated to building resilient futures. Director at Aegaea, Senior Hydromet Adviser at the World Bank, and consultant to 7Analytics.',
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
            alt="Chris Cameron-Hann - Profile Photo"
            width={200}
            height={200}
            className="rounded-full mx-auto shadow-md"
            priority
          />
        </div>
        */}
        
        <h2 className="text-2xl font-semibold font-sans text-brand-teal mb-4">Chris Cameron-Hann</h2>
        <p className="text-lg text-brand-text-dark mb-4">
          Hello! I&apos;m Chris Cameron-Hann. My work focuses on navigating complex water and environmental challenges through bespoke, innovative solutions. I have had the privilege of working with a diverse range of clients, from national developers and industrial operators to local authorities and governments worldwide.
        </p>
        <p className="text-lg text-brand-text-dark mb-4">
          My core mission is to bridge the gap between these challenges and pragmatic, effective solutions. I believe that sustainable development and robust resilience are not mutually exclusive but can, and should, go hand-in-hand.
        </p>
        
        <div className="text-lg text-brand-text-dark mb-4 space-y-3">
          <p>
            I am a <strong>Director at Aegaea Limited</strong>, a water, civils and environmental consultancy. We offer bespoke and innovative solutions to the UK and International flood risk and water markets, finding the &apos;how&apos; to take your project forward by leveraging technology and deep insight into water.
          </p>
          <p>
            As an <strong>advisor and business development consultant to 7Analytics</strong>, a Norwegian flood risk and flood forecasting specialist, I contribute to disrupting and improving the physical risk space with enhanced flood data.
          </p>
          <p>
            Additionally, I serve as a <strong>Senior Hydrometeorology Advisor to the World Bank</strong>, working with governments across the world to understand and improve their work around weather intelligence and flood forecasting – from capacity building and gap analysis, to financial investment and technical advice.
          </p>
        </div>

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
          <li>Weather intelligence and flood forecasting capacity building.</li>
          <li>Financial investment and technical advice for hydromet services.</li>
        </ul>

        <p className="text-lg text-brand-text-dark mb-4">
          I&apos;m always keen to connect with like-minded professionals and those looking to build more resilient and sustainable futures.
        </p>

        <Link href="https://www.linkedin.com/in/chris-cameron-hann/" target="_blank" rel="noopener noreferrer" className="btn btn-outline border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white mt-4">
          Connect on LinkedIn
        </Link>
      </div>
    </div>
  );
} 