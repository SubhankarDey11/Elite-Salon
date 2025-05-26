'use client';

import { Star } from 'lucide-react';

export default function Testimonial1({ content, items, theme, config }) {
  const testimonials = [
    {
      id: '1',
      title: 'Sarah Johnson',
      subtitle: 'Regular Client',
      description: 'The best salon experience I\'ve ever had! The stylists are incredibly talented and the atmosphere is so relaxing. I always leave feeling beautiful and confident.',
      image_url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      rating: 5,
    },
    {
      id: '2',
      title: 'Michael Chen',
      subtitle: 'New Client',
      description: 'I was nervous about trying a new salon, but the team here made me feel so welcome. The attention to detail and personalized service is outstanding.',
      image_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      rating: 5,
    },
    {
      id: '3',
      title: 'Emily Rodriguez',
      subtitle: 'VIP Member',
      description: 'I\'ve been coming here for years and they never disappoint. The quality of service and the results are consistently amazing. Worth every penny!',
      image_url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            {content?.title || 'What Our Clients Say'}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {content?.subtitle || 'Don\'t just take our word for it. Here\'s what our clients have to say about their experience at our salon.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-900 rounded-lg p-6 transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image_url}
                  alt={testimonial.title}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-white font-semibold">{testimonial.title}</h3>
                  <p className="text-gray-400 text-sm">{testimonial.subtitle}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300">{testimonial.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 