// PlanningPanel.tsx
import React from 'react';
import { Navigation, Cloud, AlertTriangle } from 'lucide-react';
import { Weather } from './types';

interface PlanningPanelProps {
  selectedRegion: string;
  setSelectedRegion: (region: string) => void;
  selectedDate: string;
  setSelectedDate: (date: string) => void;
  startingPoint: string;
  setStartingPoint: (point: string) => void;
  weather: Weather | null;
  children?: React.ReactNode;
}

const PlanningPanel: React.FC<PlanningPanelProps> = ({
  selectedRegion,
  setSelectedRegion,
  selectedDate,
  setSelectedDate,
  startingPoint,
  setStartingPoint,
  weather,
  children
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold mb-4 flex items-center">
        <Navigation className="mr-2 text-green-600" />
        Plan Your Adventure
      </h2>
      
      {/* Region Selection */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select Region
        </label>
        <select
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="">Choose a region...</option>
          {/* Assuming regions are passed or imported if needed, but since in App, we use props */}
        </select>
      </div>

      {/* Date Selection */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Trip Date
        </label>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Starting Point */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Starting Point
        </label>
        <input
          type="text"
          value={startingPoint}
          onChange={(e) => setStartingPoint(e.target.value)}
          placeholder="Enter your starting location"
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Weather Alert */}
      {weather && (
        <div className="mb-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <h3 className="font-semibold text-blue-800 flex items-center mb-2">
            <Cloud className="mr-2" size={16} />
            Weather Conditions
          </h3>
          <p className="text-sm text-blue-700 mb-2">
            {weather.condition} | {weather.temperature} | Rain: {weather.precipitation}
          </p>
          {weather.alerts.map((alert, index) => (
            <div key={index} className="flex items-center text-sm text-orange-700 mb-1">
              <AlertTriangle size={14} className="mr-1" />
              {alert}
            </div>
          ))}
        </div>
      )}

      {children}
    </div>
  );
};

export default PlanningPanel;
