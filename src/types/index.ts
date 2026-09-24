export interface TourPackage {
  id: string;
  title: string;
  category: "domestic" | "international" | "pilgrimage" | "family" | "couple";
  destination: string;
  duration: string;
  image: string;
  tagline: string;
  highlights: string[];
  inclusions: string[];
  bestTime: string;
  badge?: string;
  startingPrice: number;
  tourType?: string;
  month?: string;
  departureCity?: string;
  theme?: string;
  season?: string;
  days?: number;
}

export interface TravelService {
  id: string;
  title: string;
  route: string;
  shortDesc: string;
  longDesc: string;
  iconName: string;
  image: string;
  benefits: string[];
  features: string[];
}

export interface VehicleOption {
  id: string;
  name: string;
  type: "Sedan" | "SUV" | "Tempo Traveller" | "Luxury Chauffeur";
  seating: string;
  luggage: string;
  features: string[];
  image: string;
  idealFor: string;
}

export interface InquiryFormData {
  name: string;
  phone: string;
  whatsapp: string;
  destination: string;
  travelDate: string;
  travelers: string;
  serviceType?: string;
  message: string;
}

export type TravelInquiry = InquiryFormData;

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  tour: string;
  comment: string;
  verified: boolean;
}
