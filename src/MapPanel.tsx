// MapPanel.tsx
import React from 'react';
import { MapPin } from 'lucide-react';

const MapPanel: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-lg font-semibold mb-4 flex items-center">
        <MapPin className="mr-2 text-green-600" />
        Route Map
      </h3>
      <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-lg h-96 flex items-center justify-center text-gray-600">
        <div className="text-center">
          <MapPin size={48} className="mx-auto mb-4 text-green-500" />
          <p className="text-lg font-medium">Interactive Map</p>
          <p className="text-sm">Route visualization with elevation profile</p>
          <p className="text-xs mt-2">Select POIs to see them plotted on the map</p>
        </div>
      </div>
    </div>
  );
};

export default MapPanel;
