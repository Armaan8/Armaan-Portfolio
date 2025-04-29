import { create } from "zustand";

interface AudioState {
  backgroundMusic: HTMLAudioElement | null;
  hitSound: HTMLAudioElement | null;
  successSound: HTMLAudioElement | null;
  isMuted: boolean;
  
  // Setter functions
  setBackgroundMusic: (music: HTMLAudioElement) => void;
  setHitSound: (sound: HTMLAudioElement) => void;
  setSuccessSound: (sound: HTMLAudioElement) => void;
  
  // Control functions
  toggleMute: () => void;
  playHit: () => void;
  playSuccess: () => void;
}

export const useAudio = create<AudioState>((set, get) => ({
  backgroundMusic: null,
  hitSound: null,
  successSound: null,
  isMuted: true, // Always muted
  
  // Empty functions that do nothing
  setBackgroundMusic: (music) => {},
  setHitSound: (sound) => {},
  setSuccessSound: (sound) => {},
  
  toggleMute: () => {
    // Always remain muted
    set({ isMuted: true });
  },
  
  playHit: () => {
    // Do nothing - sounds are disabled
  },
  
  playSuccess: () => {
    // Do nothing - sounds are disabled
  }
}));
