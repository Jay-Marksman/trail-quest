// NavigationTabs.tsx
import React from 'react';

interface NavigationTabsProps {
  currentView: string;
  setCurrentView: (view: string) => void;
}

const NavigationTabs: React.FC<NavigationTabsProps> = ({ currentView, setCurrentView }) => {
  return (
    <div className="flex mb-6 bg-white rounded-lg p-1 shadow-sm">
      <button
        className={`flex-1 py-2 px-4 rounded ${currentView === 'planning' ? 'bg-green-500 text-white' : 'text-gray-600'}`}
        onClick={() => setCurrentView('planning')}
      >
        Trip Planning
      </button>
      <button
        className={`flex-1 py-2 px-4 rounded ${currentView === 'itinerary' ? 'bg-green-500 text-white' : 'text-gray-600'}`}
        onClick={() => setCurrentView('itinerary')}
      >
        My Itinerary
      </button>
      <button
        className={`flex-1 py-2 px-4 rounded ${currentView === 'settings' ? 'bg-green-500 text-white' : 'text-gray-600'}`}
        onClick={() => setCurrentView('settings')}
      >
        Settings & AI
      </button>
    </div>
  );
};

export default NavigationTabs;
