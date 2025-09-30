import React, { useState, useEffect } from "react";
import Loader from "./components/Loader"; 
import Navbar from "./components/Navbar";
import { HeroSection } from "./components/heroSection";
import About from "./components/About";
import Skills from "./components/skills";
import WorkExp from "./components/Work-Exp";
import Projects from "./components/Projects";
import Achievements from "./components/achievements";
import PoR from "./components/PoR";
import Contact from "./components/Contact";
import SocialLinks from "./components/SocialLinks";
import Blogs from "./components/blogs";
import { useTheme } from "./components/theme-provider";
import Footer from "./components/footer";

function App() {
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // 3 seconds loader
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div key={theme} style={{ background: 'var(--app-bg)', color: 'var(--app-text)', minHeight: '100vh', transition: 'background 0.3s, color 0.3s' }}>
      <Navbar />
      <HeroSection />
      <About />
      <Skills />
      <WorkExp />
      <Projects />
      <Achievements />
      <PoR />
      <Blogs />
      <Contact />
      <SocialLinks />
      <Footer />
    </div>
  );
}

export default App;
