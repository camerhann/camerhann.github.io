"use client";

import {
  FacebookShareButton, FacebookIcon,
  TwitterShareButton, TwitterIcon,
  LinkedinShareButton, LinkedinIcon,
  EmailShareButton, EmailIcon,
  WhatsappShareButton, WhatsappIcon,
} from 'next-share'; // Or react-share if you prefer

interface SocialShareProps {
  url: string;
  title: string;
  description?: string; // For email body, etc.
}

const SocialShare: React.FC<SocialShareProps> = ({ url, title, description }) => {
  const iconSize = 32;

  return (
    <div className="my-6 py-4 border-t border-b border-gray-200">
      <h3 className="text-lg font-semibold font-sans text-brand-text-dark mb-3">Share this article:</h3>
      <div className="flex space-x-3">
        <TwitterShareButton url={url} title={title}>
          <TwitterIcon size={iconSize} round />
        </TwitterShareButton>

        <LinkedinShareButton url={url} title={title} summary={description}>
          <LinkedinIcon size={iconSize} round />
        </LinkedinShareButton>

        <FacebookShareButton url={url} quote={title}>
          <FacebookIcon size={iconSize} round />
        </FacebookShareButton>

        <WhatsappShareButton url={url} title={title} separator=":: ">
          <WhatsappIcon size={iconSize} round />
        </WhatsappShareButton>

        <EmailShareButton url={url} subject={title} body={description || title}>
          <EmailIcon size={iconSize} round />
        </EmailShareButton>
      </div>
    </div>
  );
};

export default SocialShare; 