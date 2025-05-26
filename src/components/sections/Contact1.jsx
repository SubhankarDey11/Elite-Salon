import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Contact1({ content, items, theme, config }) {
  const {
    title = 'Contact Us',
    subtitle = 'Book Your Appointment',
    description = 'Get in touch with us to schedule your next visit or ask any questions.',
  } = content || {};

  // Default contact info if none provided
  const contactInfo = items?.length > 0 ? items : [
    {
      id: '1',
      title: 'Phone',
      content: '+1 (555) 123-4567',
      icon: 'phone',
      link: 'tel:+15551234567',
    },
    {
      id: '2',
      title: 'Email',
      content: 'info@elitesalon.com',
      icon: 'mail',
      link: 'mailto:info@elitesalon.com',
    },
    {
      id: '3',
      title: 'Address',
      content: '123 Beauty Street, City, State 12345',
      icon: 'map',
      link: 'https://maps.google.com',
    },
    {
      id: '4',
      title: 'Hours',
      content: 'Mon-Sat: 9AM-8PM, Sun: 10AM-6PM',
      icon: 'clock',
    },
  ];

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'phone':
        return <Phone className="h-6 w-6" />;
      case 'mail':
        return <Mail className="h-6 w-6" />;
      case 'map':
        return <MapPin className="h-6 w-6" />;
      case 'clock':
        return <Clock className="h-6 w-6" />;
      default:
        return null;
    }
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-xl text-primary mb-4">{subtitle}</p>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-900 rounded-lg p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Phone
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Your phone number"
                  className="bg-gray-800 border-gray-700 text-white"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  className="bg-gray-800 border-gray-700 text-white min-h-[150px]"
                />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info) => (
              <div
                key={info.id}
                className="flex items-start space-x-4 bg-gray-900 rounded-lg p-6"
              >
                <div className="text-primary">
                  {getIcon(info.icon)}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {info.title}
                  </h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-gray-400 hover:text-primary transition-colors"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-gray-400">{info.content}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 