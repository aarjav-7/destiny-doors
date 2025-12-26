// Services data utility functions
export interface Service {
  id: string;
  title: string;
  description: string;
}

export interface ServiceForHome {
  id: string;
  title: string;
  description: string;
}

export interface AdditionalService {
  title: string;
  description: string;
}

// Get all main services (used by services page)
export function getAllServices(): Service[] {
  return [
    {
      id: 'financial-growth',
      title: 'Financial & Growth Cycle Analysis',
      description: 'Understand your financial patterns and growth cycles to make better investment and money management decisions.',
    },
    {
      id: 'career-business',
      title: 'Career & Business Guidance',
      description: 'Navigate your professional path with clarity using numerological insights tailored to your career goals and business decisions.',
    },
    {
      id: 'relationship-compatibility',
      title: 'Relationship Compatibility',
      description: 'Understand relationship dynamics and compatibility through comprehensive numerological analysis of both partners.',
    },
    {
      id: 'name-correction',
      title: 'Name Numerology & Name Correction',
      description: 'Analyze the numerical value of your name and receive guidance on name corrections for better life outcomes.',
    },
    {
      id: 'mobile-number',
      title: 'Mobile Number Numerology',
      description: 'Discover how your mobile number affects your life and get recommendations for the most beneficial number combinations.',
    },
    {
      id: 'business-name',
      title: 'Business Name Numerology',
      description: 'Choose the perfect business name that aligns with your goals and attracts success through numerological principles.',
    },
    {
      id: 'education-study',
      title: 'Education & Study Guidance',
      description: 'Get insights into the best educational paths, study timing, and academic decisions based on your numerological profile.',
    },
    {
      id: 'house-number',
      title: 'House Number Numerology',
      description: 'A comprehensive analysis of your core numbers including Life Path, Expression, Soul Urge, and Personality numbers for your house.',
    },
    {
      id: 'marriage-family',
      title: 'Marriage & Family Numerology',
      description: 'Gain insights into family dynamics, marriage timing, and creating harmonious relationships within your family.',
    },
  ];
}

// Get additional services
export function getAdditionalServices(): AdditionalService[] {
  return [
    {
      title: 'Lucky Numbers & Remedies',
      description: 'Discover your personal lucky numbers and effective numerological remedies for specific challenges.',
    },
    {
      title: 'Yearly Prediction (Personal Year Analysis)',
      description: 'Get detailed insights into what the upcoming year holds for you based on your personal year cycle.',
    },
    {
      title: 'Monthly & Important Date Analysis',
      description: 'Understand the best timing for important decisions and events using monthly numerological analysis.',
    },
    {
      title: 'Health & Energy Numerology',
      description: 'Learn how numbers influence your health patterns and energy levels for better well-being.',
    },
    {
      title: 'Life Path & Destiny Analysis',
      description: 'Deep dive into your life purpose and destiny through comprehensive life path number analysis.',
    },
    {
      title: 'Children Numerology',
      description: 'Understand your child\'s potential, talents, and best guidance approach through their numerological profile.',
    },
  ];
}

// Get services for home page (simplified format)
export function getServicesForHome(): ServiceForHome[] {
  const services = getAllServices();
  return services.slice(0, 3).map(service => ({
    id: service.id,
    title: service.title,
    description: service.description.length > 120 ? 
      service.description.substring(0, 120) + '...' : 
      service.description,
  }));
}