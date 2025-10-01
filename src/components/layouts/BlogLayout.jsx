import React from 'react';
import { ThemeProvider } from '../theme-provider';

export default function BlogLayout({ children }) {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        {children}
      </div>
    </ThemeProvider>
  );
}