import { create } from 'zustand/react';

interface AuthState {
  accessToken: string | null;
  user: any | null;
  isAuthenticated: boolean;
  setAccessToken: (token: string | null) => void;
  setUser: (user: any) => void;
  resetAuth: () => void;
}

export const useAuthStore = create<AuthState>(set => ({
  accessToken: null,
  user: null,
  isAuthenticated: false,
  setAccessToken: token => set({ accessToken: token, isAuthenticated: !!token }),
  setUser: user => set({ user }),
  resetAuth: () => set({ accessToken: null, user: null, isAuthenticated: false }),
}));
