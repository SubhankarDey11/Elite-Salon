/**
 * Component Registry for Website Builder
 *
 * This registry defines all available section types, their variants,
 * and the schema for each variant. It serves both:
 * 1. The admin interface: for generating dynamic forms
 * 2. The customer-facing app: for rendering the appropriate components
 */

export const componentRegistry = {
    header: {
      name: "Header Section",
      description: "Navigation header for your salon website",
      variants: {
        1: {
          name: "Modern Salon Header",
          description: "Header with logo, navigation links and booking button",
          thumbnail: "/thumbnails/header-1.png",
          schema: {
            title: { type: "text", label: "Salon Name" },
            image_url: { type: "image", label: "Logo Image" },
            cta_text: { type: "text", label: "Booking Button Text" },
            cta_link: { type: "text", label: "Booking Button Link" },
          },
          itemSchema: {
            title: { type: "text", required: true, label: "Navigation Link Text" },
            cta_link: { type: "text", required: true, label: "Navigation URL" },
            position: { type: "number", label: "Display Order" },
          },
        }
      },
    },
    hero: {
      name: "Hero Section",
      description: "Main banner section for your salon",
      variants: {
        1: {
          name: "Full-width Hero",
          description: "Hero section with background image and call-to-action",
          thumbnail: "/thumbnails/hero-1.png",
          schema: {
            title: { type: "text", label: "Main Heading" },
            subtitle: { type: "text", label: "Subheading" },
            description: { type: "textarea", label: "Description" },
            image_url: { type: "image", label: "Background Image" },
            cta_text: { type: "text", label: "Primary Button Text" },
            cta_link: { type: "text", label: "Primary Button Link" },
          },
        }
      },
    },
    services: {
      name: "Services Section",
      description: "Display your salon services",
      variants: {
        1: {
          name: "Grid Services",
          description: "Grid layout of salon services with images and pricing",
          thumbnail: "/thumbnails/services-1.png",
          schema: {
            title: { type: "text", label: "Section Title" },
            subtitle: { type: "text", label: "Section Subtitle" },
            description: { type: "textarea", label: "Section Description" },
          },
          itemSchema: {
            title: { type: "text", required: true, label: "Service Name" },
            description: { type: "textarea", required: true, label: "Service Description" },
            icon: { type: "select", options: ["scissors", "palette", "sparkles", "heart"], label: "Service Icon" },
            image_url: { type: "image", label: "Service Image" },
            price: { type: "text", label: "Service Price" },
            duration: { type: "text", label: "Service Duration" },
            position: { type: "number", label: "Display Order" },
          },
        }
      },
    },
    testimonials: {
      name: "Testimonials Section",
      description: "Customer reviews and testimonials",
      variants: {
        1: {
          name: "Carousel Testimonials",
          description: "Sliding carousel of customer testimonials",
          thumbnail: "/thumbnails/testimonials-1.png",
          schema: {
            title: { type: "text", label: "Section Title" },
            subtitle: { type: "text", label: "Section Subtitle" },
            description: { type: "textarea", label: "Section Description" },
          },
          itemSchema: {
            title: { type: "text", required: true, label: "Client Name" },
            subtitle: { type: "text", label: "Client Title/Type" },
            description: { type: "textarea", required: true, label: "Testimonial Text" },
            image_url: { type: "image", label: "Client Photo" },
            rating: { type: "number", min: 1, max: 5, label: "Rating (1-5)" },
            position: { type: "number", label: "Display Order" },
          },
        }
      },
    },
    contact: {
      name: "Contact Section",
      description: "Contact form and information",
      variants: {
        1: {
          name: "Split Contact",
          description: "Contact form and information side by side",
          thumbnail: "/thumbnails/contact-1.png",
          schema: {
            title: { type: "text", label: "Section Title" },
            subtitle: { type: "text", label: "Section Subtitle" },
            description: { type: "textarea", label: "Section Description" },
          },
          itemSchema: {
            title: { type: "text", required: true, label: "Contact Type" },
            content: { type: "text", required: true, label: "Contact Information" },
            icon: { type: "select", options: ["phone", "mail", "map", "clock"], label: "Contact Icon" },
            link: { type: "text", label: "Contact Link (optional)" },
            position: { type: "number", label: "Display Order" },
          },
        }
      },
    },
    footer: {
      name: "Footer Section",
      description: "Website footer with navigation and social links",
      variants: {
        1: {
          name: "Modern Footer",
          description: "Footer with logo, navigation columns and social links",
          thumbnail: "/thumbnails/footer-1.png",
          schema: {
            title: { type: "text", label: "Salon Name" },
            description: { type: "textarea", label: "Footer Description" },
            image_url: { type: "image", label: "Logo Image" },
            copyright: { type: "text", label: "Copyright Text" },
          },
          itemSchema: {
            title: { type: "text", required: true, label: "Column Title" },
            links: { type: "array", label: "Column Links", itemSchema: {
              title: { type: "text", required: true, label: "Link Text" },
              href: { type: "text", required: true, label: "Link URL" },
            }},
            position: { type: "number", label: "Display Order" },
          },
        }
      },
    }
  };