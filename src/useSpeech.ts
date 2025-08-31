// useSpeech.ts
import { useRef, useEffect } from 'react';

export const useSpeech = (voiceEnabled: boolean) => {
  const speechSynthesis = useRef<SpeechSynthesis | null>(null);

  useEffect(() => {
    if ('speechSynthesis' in window) {
      speechSynthesis.current = window.speechSynthesis;
    }
  }, []);

  const speak = (text: string) => {
    if (voiceEnabled && speechSynthesis.current) {
      const utterance = new SpeechSynthesisUtterance(text);
      speechSynthesis.current.speak(utterance);
    }
  };

  return speak;
};
