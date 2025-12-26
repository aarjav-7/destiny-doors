// Testimonials data utility functions
export interface Testimonial {
  name: string;
  location: string;
  service: string;
  rating: number;
  quote: string;
}

export interface TestimonialForHome {
  name: string;
  location: string;
  rating: number;
  quote: string;
}

// Get all testimonials (used by testimonials page)
export function getAllTestimonials(): Testimonial[] {
  return [
    {
      name: 'Priya Jain',
      location: 'Mumbai',
      service: 'Personal Numerology Session',
      rating: 3,
      quote: 'Shilpa\'s guidance helped me understand my career path with clarity I never had before. The insights were incredibly accurate and actionable. I finally feel like I\'m moving in the right direction.',
    },
    {
      name: 'Rahul Mehta',
      location: 'Bangalore',
      service: 'Relationship Compatibility',
      rating: 2,
      quote: 'The relationship compatibility session was eye-opening. It helped us understand each other better and strengthened our bond. Shilpa\'s warm approach made us feel comfortable discussing sensitive topics.',
    },
    {
      name: 'Anita Desai',
      location: 'Delhi',
      service: 'Personal Numerology Session',
      rating: 5,
      quote: 'Professional, warm, and incredibly insightful. Shilpa has a gift for making complex numerology concepts easy to understand. The PDF report was thorough and I keep referring back to it.',
    },
    {
      name: 'Vikram Patel',
      location: 'Pune',
      service: 'Career & Business Guidance',
      rating: 5,
      quote: 'I was stuck in a career rut for years. Shilpa\'s career guidance session gave me the confidence to make a bold move that\'s already paying off. Her timing advice was spot-on.',
    },
    {
      name: 'Kavita Rao',
      location: 'Hyderabad',
      service: 'Personal Numerology Session',
      rating: 5,
      quote: 'I\'ve had readings from other numerologists, but Shilpa\'s approach is different - it\'s practical, empowering, and non-judgmental. She helped me see my challenges as opportunities for growth.',
    },
    {
      name: 'Arjun Singh',
      location: 'Jaipur',
      service: 'Relationship Compatibility',
      rating: 5,
      quote: 'My partner and I were skeptical at first, but the compatibility reading was remarkably accurate. We learned so much about our dynamic and how to support each other better. Highly recommend!',
    },
    {
      name: 'Meera Kapoor',
      location: 'Chennai',
      service: 'Career & Business Guidance',
      rating: 5,
      quote: 'Shilpa\'s business guidance helped me choose the perfect launch date for my startup. Six months later, we\'re exceeding our goals. Her insights into my natural strengths were invaluable.',
    },
    {
      name: 'Sanjay Gupta',
      location: 'Ahmedabad',
      service: 'Personal Numerology Session',
      rating: 5,
      quote: 'The session felt like talking to a wise friend who truly understands you. Shilpa\'s explanations were clear, and she took the time to answer all my questions. Worth every rupee.',
    },
    {
      name: 'Deepa Iyer',
      location: 'Kolkata',
      service: 'Personal Numerology Session',
      rating: 5,
      quote: 'I was going through a difficult transition and feeling lost. Shilpa\'s reading gave me hope and a clear path forward. Her follow-up support via email was also really helpful.',
    },
  ];
}

// Get featured testimonials for home page (only 5-star ratings, limited count)
export function getFeaturedTestimonials(limit = 3): TestimonialForHome[] {
  const testimonials = getAllTestimonials();
  
  // Filter 5-star testimonials and limit the result
  return testimonials
    .filter(testimonial => testimonial.rating === 5)
    .slice(0, limit)
    .map(testimonial => ({
      name: testimonial.name,
      location: testimonial.location,
      rating: testimonial.rating,
      quote: testimonial.quote.length > 150 ? 
        testimonial.quote.substring(0, 150) + '...' : 
        testimonial.quote,
    }));
}