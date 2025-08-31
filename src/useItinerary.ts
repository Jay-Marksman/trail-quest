// useItinerary.ts
import { useState } from 'react';
import { ItineraryItem } from './types';

export const useItinerary = (initialItinerary: ItineraryItem[] = []) => {
  const [itinerary, setItinerary] = useState<ItineraryItem[]>(initialItinerary);

  const addPOI = (poi: ItineraryItem) => {
    if (!itinerary.find(item => item.id === poi.id)) {
      setItinerary([...itinerary, { ...poi, order: itinerary.length + 1 }]);
    }
  };

  const removePOI = (poiId: number) => {
    setItinerary(itinerary.filter(item => item.id !== poiId));
  };

  const optimizeItinerary = (speak: (text: string) => void) => {
    const optimized = [...itinerary].sort((a, b) => {
      const timeA = parseInt(a.bestTimeToVisit?.split(':')[0] || '12');
      const timeB = parseInt(b.bestTimeToVisit?.split(':')[0] || '12');
      return timeA - timeB;
    });
    setItinerary(optimized);
    speak('Itinerary optimized for best visiting times and travel efficiency.');
  };

  const calculateTotalTime = () => {
    const totalMinutes = itinerary.reduce((total, poi) => total + poi.walkTime + poi.observationTime, 0);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h ${minutes}m`;
  };

  const calculateTotalCost = () => {
    let totalCost = 0;
    const parkingCosts = new Set<string>();

    itinerary.forEach(poi => {
      if (poi.admission !== 'Free') {
        const cost = parseInt(poi.admission.replace('$', ''));
        totalCost += cost;
      }
      if (poi.parking !== 'Free' && poi.parking !== 'Street parking') {
        parkingCosts.add(poi.parking);
      }
    });

    parkingCosts.forEach(parking => {
      const cost = parseInt(parking.replace('$', '').split('/')[0]);
      totalCost += cost;
    });

    return totalCost;
  };

  return { itinerary, addPOI, removePOI, optimizeItinerary, calculateTotalTime, calculateTotalCost };
};
