// POIList.tsx
import React from 'react';
import { Clock, DollarSign, Car, Plus } from 'lucide-react';
import { POI } from './types';

interface POIListProps {
  pois: POI[];
  addToItinerary: (poi: POI) => void;
}

const POIList: React.FC<POIListProps> = ({ pois, addToItinerary }) => {
  if (pois.length === 0) return null;

  return (
    <div>
      <h3 className="text-lg font-semibold mb-3">Available Points of Interest</h3>
      <div className="space-y-3 max-h-60 overflow-y-auto">
        {pois.map(poi => (
          <div key={poi.id} className="border rounded-lg p-3 hover:bg-gray-50">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-medium text-gray-900">{poi.name}</h4>
              <button
                onClick={() => addToItinerary(poi)}
                className="bg-green-500 text-white p-1 rounded-full hover:bg-green-600"
              >
                <Plus size={16} />
              </button>
            </div>
            <p className="text-sm text-gray-600 mb-2">{poi.description}</p>
            <div className="text-xs text-blue-700 mb-2 bg-blue-50 p-2 rounded">
              <strong>Historical Context:</strong> {poi.historicalSignificance}
              <br />
              <strong>Period:</strong> {poi.historicalPeriod}
              <br />
              <strong>Best Time:</strong> {poi.bestTimeToVisit}
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs text-gray-500">
              <span className="flex items-center">
                <Clock className="mr-1" size={12} />
                {poi.walkTime + poi.observationTime}min total
              </span>
              <span className="flex items-center">
                <DollarSign className="mr-1" size={12} />
                {poi.admission}
              </span>
              <span className="flex items-center">
                <Car className="mr-1" size={12} />
                Parking: {poi.parking}
              </span>
              <span className="text-green-600 font-medium">{poi.type}</span>
            </div>
            <div className="mt-2 text-xs text-purple-600">
              <strong>Accessibility:</strong> {poi.accessibility}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default POIList;
