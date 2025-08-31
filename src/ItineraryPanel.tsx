// ItineraryPanel.tsx
import React from 'react';
import { MapPin, Clock, DollarSign, Car, Sparkles, Navigation, Volume2, X } from 'lucide-react';
import { ItineraryItem } from './types';

interface ItineraryPanelProps {
  itinerary: ItineraryItem[];
  removePOI: (poiId: number) => void;
  optimizeItinerary: () => void;
  calculateTotalTime: () => string;
  calculateTotalCost: () => number;
  speak: (text: string) => void;
}

const ItineraryPanel: React.FC<ItineraryPanelProps> = ({
  itinerary,
  removePOI,
  optimizeItinerary,
  calculateTotalTime,
  calculateTotalCost,
  speak
}) => {
  if (itinerary.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Your Day Trip Itinerary</h2>
        <div className="text-center py-8 text-gray-500">
          <MapPin size={48} className="mx-auto mb-4 text-gray-300" />
          <p>No destinations added yet. Go to Trip Planning to add points of interest.</p>
        </div>
      </div>
    );
  }

  const handleSpeak = () => {
    speak(`Your itinerary includes ${itinerary.length} destinations with a total time of ${calculateTotalTime()}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Your Day Trip Itinerary</h2>
      
      {/* Trip Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 p-4 bg-green-50 rounded-lg">
        <div className="text-center">
          <div className="text-2xl font-bold text-green-700">{itinerary.length}</div>
          <div className="text-sm text-green-600">Destinations</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-700">{calculateTotalTime()}</div>
          <div className="text-sm text-green-600">Total Time</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-700">${calculateTotalCost()}</div>
          <div className="text-sm text-green-600">Estimated Cost</div>
        </div>
      </div>

      {/* Itinerary Items */}
      <div className="space-y-4">
        {itinerary.map((poi, index) => (
          <div key={poi.id} className="border-l-4 border-green-500 bg-gray-50 p-4 rounded-r-lg">
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center">
                <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-lg">{poi.name}</h3>
                  <p className="text-gray-600 text-sm">{poi.description}</p>
                </div>
              </div>
              <button
                onClick={() => removePOI(poi.id)}
                className="text-red-500 hover:text-red-700"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="flex items-center text-gray-700">
                <Clock className="mr-1" size={14} />
                Walk: {poi.walkTime}min
              </div>
              <div className="flex items-center text-gray-700">
                <Clock className="mr-1" size={14} />
                Visit: {poi.observationTime}min
              </div>
              <div className="flex items-center text-gray-700">
                <DollarSign className="mr-1" size={14} />
                Entry: {poi.admission}
              </div>
              <div className="flex items-center text-gray-700">
                <Car className="mr-1" size={14} />
                Parking: {poi.parking}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex flex-wrap gap-4">
        <button 
          onClick={optimizeItinerary}
          className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 flex items-center"
        >
          <Sparkles className="mr-2" size={16} />
          Optimize Route
        </button>
        <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 flex items-center">
          <Navigation className="mr-2" size={16} />
          Start Navigation
        </button>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
          Export Itinerary
        </button>
        <button 
          onClick={handleSpeak}
          className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 flex items-center"
        >
          <Volume2 className="mr-2" size={16} />
          Read Aloud
        </button>
      </div>
    </div>
  );
};

export default ItineraryPanel;
