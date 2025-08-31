// App.tsx
import React, { useState, useEffect } from 'react';
import { useSpeech } from './useSpeech';
import { useItinerary } from './useItinerary';
import { useAISuggestions } from './useAISuggestions';
import { regions, samplePOIs, mockWeather } from './sampleData';
import { Weather, UserPreferences } from './types';
import NavigationTabs from './NavigationTabs';
import PlanningPanel from './PlanningPanel';
import POIList from './POIList';
import MapPanel from './MapPanel';
import ItineraryPanel from './ItineraryPanel';
import SettingsPanel from './SettingsPanel';
import AISuggestionsPanel from './AISuggestionsPanel';

//interface NavigationTabsProps {
//  currentView: 'planning' | 'itinerary' | 'settings';
//  setCurrentView: (view: 'planning' | 'itinerary' | 'settings') => void;
//}

const AdventureApp = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>('');
  const [startingPoint, setStartingPoint] = useState<string>('');
  const [weather, setWeather] = useState<Weather | null>(null);
  const [currentView, setCurrentView] = useState<'planning' | 'itinerary' | 'settings'>('planning');
  const [privacyMode, setPrivacyMode] = useState<boolean>(false);
  const [offlineMode, setOfflineMode] = useState<boolean>(false);
  const [voiceEnabled, setVoiceEnabled] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [userPreferences, setUserPreferences] = useState<UserPreferences>({
    interests: [],
    mobilityLevel: 'moderate',
    timePreference: 'flexible'
  });

  const speak = useSpeech(voiceEnabled);

  const availablePOIs = selectedRegion ? samplePOIs[selectedRegion] || [] : [];
  const aiSuggestions = useAISuggestions(selectedRegion, availablePOIs, userPreferences);
  const { itinerary, addPOI, removePOI, optimizeItinerary: optimize, calculateTotalTime, calculateTotalCost } = useItinerary();

  const downloadOfflineContent = () => {
    setOfflineMode(true);
    speak('Offline content downloaded. Maps and site information available without internet.');
  };

  useEffect(() => {
    setWeather(mockWeather);
  }, []);

  const optimizeItinerary = () => optimize(speak);

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gradient-to-br from-green-50 to-blue-50 min-h-screen">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-green-800 mb-2">🏔️ TrailQuest</h1>
        <p className="text-gray-600">Plan your perfect outdoor historical adventure</p>
      </header>

      <NavigationTabs currentView={currentView} setCurrentView={setCurrentView} />

      {currentView === 'planning' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <PlanningPanel
            selectedRegion={selectedRegion}
            setSelectedRegion={setSelectedRegion}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            startingPoint={startingPoint}
            setStartingPoint={setStartingPoint}
            weather={weather}
          >
            <POIList pois={availablePOIs} addToItinerary={addPOI} />
          </PlanningPanel>
          <MapPanel />
        </div>
      )}

      {currentView === 'itinerary' && (
        <ItineraryPanel
          itinerary={itinerary}
          removePOI={removePOI}
          optimizeItinerary={optimizeItinerary}
          calculateTotalTime={calculateTotalTime}
          calculateTotalCost={calculateTotalCost}
          speak={speak}
        />
      )}

      {currentView === 'settings' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SettingsPanel
            privacyMode={privacyMode}
            setPrivacyMode={setPrivacyMode}
            voiceEnabled={voiceEnabled}
            setVoiceEnabled={setVoiceEnabled}
            userPreferences={userPreferences}
            setUserPreferences={setUserPreferences}
            offlineMode={offlineMode}
            downloadOfflineContent={downloadOfflineContent}
          />
          <AISuggestionsPanel
            userPreferences={userPreferences}
            setUserPreferences={setUserPreferences}
            aiSuggestions={aiSuggestions}
          />
        </div>
      )}
    </div>
  );
};

export default AdventureApp;
