export type TabType = 'home' | 'about' | 'product' | 'enquiry';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  position: string;
  category: 'Founder' | 'Co-Founder' | 'Engineering' | 'Executive';
  description: string;
  photoUrl: string;
  photoSetting: string;
  email?: string;
  linkedin?: string;
  skills: string[];
}

export interface ProductDetail {
  id: string;
  name: string;
  tagline: string;
  overview: string;
  keyFeatures: {
    title: string;
    description: string;
    icon: string;
  }[];
  specifications: {
    label: string;
    value: string;
  }[];
  status: string;
}

export interface EnquiryForm {
  name: string;
  email: string;
  contact: string;
  organization: string;
  subject: string;
  details: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'zoya';
  text: string;
  timestamp: string;
  actionRequired?: TabType;
  actionLabel?: string;
}

export interface RadarTarget {
  id: string;
  name: string;
  type: string;
  distanceKm: number;
  speedKmh: number;
  altitudeM: number;
  threatLevel: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
  angleDeg: number;
  confidence: number;
}
