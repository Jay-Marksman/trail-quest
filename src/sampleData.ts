// sampleData.ts
import { POI, Weather } from './types';

export const regions: string[] = [
  'Blue Ridge Mountains, VA',
  'Appalachian Trail, NH',
  'Historic Boston, MA',
  'Colonial Williamsburg, VA',
  'Great Smoky Mountains, TN'
];

export const samplePOIs: Record<string, POI[]> = {
  'Blue Ridge Mountains, VA': [
    {
      id: 1,
      name: 'Monticello',
      type: 'Historic Site',
      description: 'Thomas Jefferson\'s mountaintop home',
      walkTime: 45,
      observationTime: 90,
      admission: '$29',
      parking: 'Free',
      coordinates: { lat: 38.0084, lng: -78.4534 },
      historicalPeriod: '1769-1826',
      historicalSignificance: 'Designed by Thomas Jefferson, showcases neoclassical architecture and Enlightenment ideals',
      accessibility: 'Wheelchair accessible grounds, shuttle available',
      bestTimeToVisit: '9:00 AM - 11:00 AM (fewer crowds)',
      offlineContent: true
    },
    {
      id: 2,
      name: 'Shenandoah Falls Trail',
      type: 'Natural Feature',
      description: 'Scenic waterfall with moderate hiking trail',
      walkTime: 120,
      observationTime: 30,
      admission: 'Free',
      parking: '$5',
      coordinates: { lat: 38.1234, lng: -78.5678 },
      historicalPeriod: 'Geological formation: 200M+ years',
      historicalSignificance: 'Used by Native American tribes for centuries, later by European settlers',
      accessibility: 'Moderate difficulty, uneven terrain',
      bestTimeToVisit: '7:00 AM - 9:00 AM (best lighting)',
      offlineContent: true
    },
    {
      id: 3,
      name: 'Ash Lawn-Highland',
      type: 'Historic Site',
      description: 'James Monroe\'s historic estate',
      walkTime: 30,
      observationTime: 60,
      admission: '$15',
      parking: 'Free',
      coordinates: { lat: 37.9876, lng: -78.4321 },
      historicalPeriod: '1799-1823',
      historicalSignificance: '5th U.S. President\'s home, showcases early American domestic life',
      accessibility: 'Partially accessible, some uneven paths',
      bestTimeToVisit: '10:00 AM - 12:00 PM',
      offlineContent: true
    }
  ],
  'Historic Boston, MA': [
    {
      id: 4,
      name: 'Freedom Trail - Boston Common',
      type: 'Historic Trail',
      description: 'Start of the famous Freedom Trail',
      walkTime: 20,
      observationTime: 30,
      admission: 'Free',
      parking: '$25/day',
      coordinates: { lat: 42.3551, lng: -71.0656 },
      historicalPeriod: '1634-present',
      historicalSignificance: 'America\'s oldest public park, central to Revolutionary War events',
      accessibility: 'Fully accessible paths available',
      bestTimeToVisit: '8:00 AM - 10:00 AM',
      offlineContent: true
    },
    {
      id: 5,
      name: 'Paul Revere House',
      type: 'Historic Site',
      description: 'Home of the famous midnight rider',
      walkTime: 15,
      observationTime: 45,
      admission: '$6',
      parking: 'Street parking',
      coordinates: { lat: 42.3634, lng: -71.0536 },
      historicalPeriod: '1680-1800',
      historicalSignificance: 'Oldest building in downtown Boston, home of Revolutionary War hero',
      accessibility: 'Historic building - limited accessibility',
      bestTimeToVisit: '9:30 AM - 11:30 AM',
      offlineContent: true
    }
  ]
};

export const mockWeather: Weather = {
  condition: 'Partly Cloudy',
  temperature: '72°F',
  precipitation: '10%',
  alerts: ['UV Index High - Bring sunscreen', 'Afternoon thunderstorms possible']
};
