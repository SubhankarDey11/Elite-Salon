import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer1({ content, items, theme, config }) {
  const {
    title = 'Elite Salon',
    description = 'Your premier destination for professional hair care and styling services.',
    image_url,
    copyright = `© ${new Date().getFullYear()} Elite Salon. All rights reserved.`,
  } = content || {};

  // Default footer items if none provided
  const footerItems = items?.length > 0 ? items : [
    {
      id: '1',
      title: 'Services',
      links: [
        { title: 'Haircuts', href: '/#services' },
        { title: 'Coloring', href: '/#services' },
        { title: 'Styling', href: '/#services' },
        { title: 'Treatments', href: '/#services' },
      ],
    },
    {
      id: '2',
      title: 'Company',
      links: [
        { title: 'About Us', href: '/#about' },
        { title: 'Our Team', href: '/#team' },
        { title: 'Careers', href: '/careers' },
        { title: 'Contact', href: '/#contact' },
      ],
    },
    {
      id: '3',
      title: 'Support',
      links: [
        { title: 'FAQs', href: '/faq' },
        { title: 'Privacy Policy', href: '/privacy' },
        { title: 'Terms of Service', href: '/terms' },
        { title: 'Book Appointment', href: '/#contact' },
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex flex-col space-y-4">
              {image_url ? (
                <Link href="/" className="block w-40">
                  <Image
                    src={image_url}
                    alt={title}
                    width={160}
                    height={60}
                    className="h-auto w-full"
                  />
                </Link>
              ) : (
                <Link href="/" className="text-2xl font-bold text-white">
                  {title}
                </Link>
              )}
              <p className="text-gray-400">
                {description}
              </p>
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Columns */}
          {footerItems.map((column) => (
            <div key={column.id}>
              <h3 className="text-white font-semibold mb-4">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-primary transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          {copyright}
        </div>
      </div>
    </footer>
  );
} 