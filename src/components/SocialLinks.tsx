'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faSoundcloud, faFacebook } from '@fortawesome/free-brands-svg-icons';

interface SocialLink {
  name: string;
  href: string;
  icon: typeof faInstagram;
}

const SocialLinks = () => {
  const socialLinks: SocialLink[] = [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/dorgham.music/',
      icon: faInstagram
    },
    {
      name: 'SoundCloud',
      href: 'https://soundcloud.com/idorgham',
      icon: faSoundcloud
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/iDorgham',
      icon: faFacebook
    }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-gray-300 hover:text-red-400 transition-colors duration-200 group"
          aria-label={link.name}
        >
          <div className="group-hover:scale-110 transition-transform duration-200">
            <FontAwesomeIcon icon={link.icon} className="w-6 h-6" />
          </div>
          <span className="font-medium">{link.name}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
