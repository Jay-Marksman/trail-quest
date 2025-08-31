// types.ts
export interface POI {
  id: number;
  name: string;
  type: string;
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
}

export type ItineraryItem = POI & { order?: number };

export interface Weather {
  condition: string;
  temperature: string;
  precipitation: string;
  alerts: string[];
}

export interface AISuggestion {
  id: string;
  title: string;
  description: string;
  estimatedTime: string;
  difficulty: string;
  theme: string;
}

export interface UserPreferences {
  interests: string[];
  mobilityLevel: 'high' | 'moderate' | 'low';
  timePreference: string;
}
