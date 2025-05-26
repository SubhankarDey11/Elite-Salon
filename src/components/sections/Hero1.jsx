'use client';

import { Button } from "@/components/ui/button";
import { useState } from "react";
import BookingForm from './BookingForm';

export default function Hero1() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1600&auto=format&fit=crop&q=60')",
          filter: "brightness(0.7)"
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Your Beauty Journey Starts Here
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Experience luxury hair care and styling services in a relaxing environment
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            onClick={() => setIsBookingOpen(true)}
            className="bg-primary hover:bg-primary/90"
          >
            Book Appointment
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            onClick={scrollToServices}
            className="bg-transparent border-white text-white hover:bg-white/10"
          >
            View Services
          </Button>
        </div>
      </div>

      {/* Booking Form Modal */}
      <BookingForm 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
    </section>
  );
} 