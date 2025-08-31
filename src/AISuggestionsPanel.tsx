// AISuggestionsPanel.tsx
import React from 'react';
import { Sparkles, Clock, History } from 'lucide-react';
import { AISuggestion, UserPreferences } from './types';

interface AISuggestionsPanelProps {
  userPreferences: UserPreferences;
  setUserPreferences: (prefs: UserPreferences) => void;
  aiSuggestions: AISuggestion[];
}

const AISuggestionsPanel: React.FC<AISuggestionsPanelProps> = ({
  userPreferences,
  setUserPreferences,
  aiSuggestions
}) => {
  const interestsList = ['Architecture', 'Military History', 'Political History', 'Natural History', 'Art & Culture', 'Local Legends'];

  const toggleInterest = (interest: string) => {
    setUserPreferences(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold mb-4 flex items-center">
        <Sparkles className="mr-2 text-purple-600" />
        AI Trip Suggestions
      </h2>
      
      {/* User Preferences */}
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-3">Your Interests</h3>
        <div className="grid grid-cols-2 gap-2">
          {interestsList.map(interest => (
            <label key={interest} className="flex items-center space-x-2">
              <input 
                type="checkbox" 
                className="rounded" 
                checked={userPreferences.interests.includes(interest)}
                onChange={() => toggleInterest(interest)}
              />
              <span className="text-sm">{interest}</span>
            </label>
          ))}
        </div>
      </div>

      {/* AI Suggestions */}
      {aiSuggestions.length > 0 && (
        <div>
          <h3 className="text-lg font-medium mb-3">Recommended Itineraries</h3>
          <div className="space-y-3">
            {aiSuggestions.map(suggestion => (
              <div key={suggestion.id} className="border rounded-lg p-4 hover:bg-purple-50">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-purple-800">{suggestion.title}</h4>
                  <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">
                    {suggestion.difficulty}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{suggestion.description}</p>
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <span className="flex items-center">
                    <Clock className="mr-1" size={12} />
                    {suggestion.estimatedTime}
                  </span>
                  <span className="flex items-center">
                    <History className="mr-1" size={12} />
                    {suggestion.theme}
                  </span>
                </div>
                <button className="mt-2 bg-purple-600 text-white px-3 py-1 text-xs rounded hover:bg-purple-700">
                  Apply Suggestion
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Historical Timeline View */}
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h3 className="font-semibold text-blue-800 mb-2 flex items-center">
          <History className="mr-2" size={16} />
          Historical Timeline Planning
        </h3>
        <p className="text-sm text-blue-700 mb-3">
          Organize visits chronologically to understand historical progression
        </p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm">
          Generate Timeline Route
        </button>
      </div>
    </div>
  );
};

export default AISuggestionsPanel;
