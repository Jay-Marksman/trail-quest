export interface PointOfInterest {
  id: number;
  name: string;
  type: 'Historic Site' | 'Natural Feature' | 'Historic Trail' | 'Monument';
  description: string;
  walkTime: number;
  observationTime: number;
  admission: string;
  parking: string;
  coordinates: { lat: number; lng: number };
  historicalPeriod: string;
  historicalSignificance: string;
  accessibility: string;
  bestTimeToVisit: string;
  offlineContent: boolean;
  images?: string[];
  audioGuide?: string;
}

export interface Itinerary {
  id: string;
  name: string;
  date: string;
  startingPoint: string;
  pois: PointOfInterest[];
  estimatedDuration: number;
  totalCost: number;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  theme: string;
}

export interface UserSettings {
  privacyMode: boolean;
  voiceEnabled: boolean;
  mobilityLevel: 'high' | 'moderate' | 'low';
  interests: string[];
  offlineMode: boolean;
}

export interface WeatherData {
  condition: string;
  temperature: string;
  precipitation: string;
  alerts: string[];
  uvIndex?: number;
  windSpeed?: string;
}
