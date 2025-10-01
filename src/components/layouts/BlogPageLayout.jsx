import React from 'react';
import { ThemeProvider } from '../theme-provider';
import { useLocation } from 'wouter';

export default function BlogPageLayout({ children }) {
  const [, navigate] = useLocation();

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4">
          <button
            onClick={() => navigate('/blogs')}
            className="fixed top-4 left-4 text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back to Blogs
          </button>
          {children}
        </div>
      </div>
    </ThemeProvider>
  );
}