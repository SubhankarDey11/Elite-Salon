'use client';

import { Button } from "@/components/ui/button";
import { useState } from "react";
import BookingForm from './BookingForm';

export default function Services1() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const services = [
    {
      title: "Haircut & Styling",
      description: "Professional haircut and styling services tailored to your preferences",
      price: "From $45",
      image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&auto=format&fit=crop&q=60"
    },
    {
      title: "Hair Coloring",
      description: "Expert hair coloring services including highlights, balayage, and full color",
      price: "From $85",
      image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=800&auto=format&fit=crop&q=60"
    },
    {
      title: "Hair Treatment",
      description: "Deep conditioning and repair treatments for healthy, beautiful hair",
      price: "From $65",
      image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=800&auto=format&fit=crop&q=60"
    },
    {
      title: "Hair Extensions",
      description: "Professional hair extension services for length and volume",
      price: "From $200",
      image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=800&auto=format&fit=crop&q=60"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our range of professional hair care and styling services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-semibold">{service.price}</span>
                  <Button 
                    onClick={() => setIsBookingOpen(true)}
                    className="bg-primary hover:bg-primary/90"
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
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