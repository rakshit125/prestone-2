'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const defaultTheme: ThemeContextType = {
  theme: 'dark',
  toggleTheme: () => {},
};

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') {
    return 'dark';
  }
  
  try {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme;
    }
  } catch (e) {
    // localStorage might not be available
  }
  
  try {
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    return systemTheme;
  } catch (e) {
    return 'dark';
  }
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Get initial theme
    const initialTheme = getInitialTheme();
    setTheme(initialTheme);
    setMounted(true);
    
    // Apply to HTML (body gradient comes from globals.css via data-theme)
    const root = document.documentElement;
    if (initialTheme === 'dark') {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const root = document.documentElement;
    
    // Update HTML class and data-theme (body gradient from globals.css)
    if (theme === 'dark') {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
    }
    
    // Save to localStorage
    try {
      localStorage.setItem('theme', theme);
    } catch (e) {
      // localStorage might not be available
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(prev => {
      const newTheme = prev === 'dark' ? 'light' : 'dark';
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    // Return default during SSR
    return defaultTheme;
  }
  return context;
}
