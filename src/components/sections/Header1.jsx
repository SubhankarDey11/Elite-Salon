'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';
import BookingForm from './BookingForm';

export default function Header1({ content, items, theme, config }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-white">
            {content?.logo || 'Elite Salon'}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {items?.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Button 
              variant="outline" 
              className="text-white border-white hover:bg-white hover:text-black"
              onClick={() => setIsBookingOpen(true)}
            >
              {content?.cta || 'Book Now'}
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col space-y-4">
              {items?.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button 
                variant="outline" 
                className="text-white border-white hover:bg-white hover:text-black"
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsBookingOpen(true);
                }}
              >
                {content?.cta || 'Book Now'}
              </Button>
            </nav>
          </div>
        )}
      </div>

      {/* Booking Form Modal */}
      <BookingForm 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
    </header>
  );
} 