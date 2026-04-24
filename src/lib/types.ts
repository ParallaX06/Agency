export type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
};

export type PortfolioItem = {
  id: string;
  title: string;
  description: string;
  service: string;
  image: string;
  results: {
    traffic: string;
    conversion: string;
  };
};

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  company: string;
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    linkedin?: string;
    twitter?: string;
    dribbble?: string;
  };
};
