// useAISuggestions.ts
import { useState, useEffect } from 'react';
import { POI, AISuggestion, UserPreferences } from './types';

export const useAISuggestions = (selectedRegion: string, availablePOIs: POI[], userPreferences: UserPreferences) => {
  const [aiSuggestions, setAiSuggestions] = useState<AISuggestion[]>([]);

  useEffect(() => {
    if (selectedRegion && availablePOIs.length > 0) {
      // Simulate AI-powered suggestions (can be enhanced with userPreferences in future)
      const suggestions: AISuggestion[] = [
        {
          id: 'ai-1',
          title: 'Historical Timeline Journey',
          description: 'Visit sites in chronological order to experience history unfolding',
          estimatedTime: '6h 30m',
          difficulty: 'Easy',
          theme: 'Historical Progression'
        },
        {
          id: 'ai-2',
          title: 'Founding Fathers Focus',
          description: 'Explore locations connected to key Revolutionary figures',
          estimatedTime: '4h 15m',
          difficulty: 'Moderate',
          theme: 'Biographical'
        },
        {
          id: 'ai-3',
          title: 'Architecture Through Time',
          description: 'Compare building styles across different historical periods',
          estimatedTime: '5h 45m',
          difficulty: 'Easy',
          theme: 'Architectural'
        }
      ];
      setAiSuggestions(suggestions);
    }
  }, [selectedRegion, availablePOIs, userPreferences]);

  return aiSuggestions;
};
