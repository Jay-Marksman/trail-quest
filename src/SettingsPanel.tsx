// SettingsPanel.tsx
import React from 'react';
import { Shield, Download } from 'lucide-react';
import { UserPreferences } from './types';

interface SettingsPanelProps {
  privacyMode: boolean;
  setPrivacyMode: (mode: boolean) => void;
  voiceEnabled: boolean;
  setVoiceEnabled: (enabled: boolean) => void;
  userPreferences: UserPreferences;
  setUserPreferences: (prefs: UserPreferences) => void;
  offlineMode: boolean;
  downloadOfflineContent: () => void;
}

const SettingsPanel: React.FC<SettingsPanelProps> = ({
  privacyMode,
  setPrivacyMode,
  voiceEnabled,
  setVoiceEnabled,
  userPreferences,
  setUserPreferences,
  offlineMode,
  downloadOfflineContent
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold mb-4 flex items-center">
        <Shield className="mr-2 text-blue-600" />
        Privacy & Accessibility
      </h2>
      
      {/* Privacy Settings */}
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-3">Privacy Controls</h3>
        <div className="space-y-3">
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={privacyMode}
              onChange={(e) => setPrivacyMode(e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">
              Privacy Mode (Location data stored locally only)
            </span>
          </label>
          <label className="flex items-center space-x-3">
            <input type="checkbox" className="rounded" />
            <span className="text-sm">Anonymous usage analytics</span>
          </label>
          <label className="flex items-center space-x-3">
            <input type="checkbox" defaultChecked className="rounded" />
            <span className="text-sm">Cache maps for offline use</span>
          </label>
        </div>
      </div>

      {/* Accessibility Settings */}
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-3">Accessibility</h3>
        <div className="space-y-3">
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={voiceEnabled}
              onChange={(e) => setVoiceEnabled(e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">Voice guidance enabled</span>
          </label>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mobility Level
            </label>
            <select 
              value={userPreferences.mobilityLevel}
              onChange={(e) => setUserPreferences({...userPreferences, mobilityLevel: e.target.value as 'high' | 'moderate' | 'low'})}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="high">High mobility (challenging trails)</option>
              <option value="moderate">Moderate mobility (standard trails)</option>
              <option value="low">Limited mobility (accessible paths only)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Offline Mode */}
      <div className="p-4 bg-green-50 rounded-lg">
        <h3 className="font-semibold text-green-800 mb-2">Offline Capabilities</h3>
        <p className="text-sm text-green-700 mb-3">
          Download content for offline use in remote areas
        </p>
        <button
          onClick={downloadOfflineContent}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center"
        >
          <Download className="mr-2" size={16} />
          {offlineMode ? 'Offline Ready ✓' : 'Download Offline Content'}
        </button>
      </div>
    </div>
  );
};

export default SettingsPanel;
