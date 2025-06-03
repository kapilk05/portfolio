import React, { useState, useEffect } from "react";
import Loader from "./components/Loader"; // import your loader component
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Publications from "./components/publications";
import Achievements from "./components/achievements";
import PoR from "./components/PoR";
import Skills from "./components/skills";
import WorkExp from "./components/Work-Exp";
import Contact from "./components/Contact";
import SocialLinks from "./components/SocialLinks";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // 3 seconds loader
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Publications />
      <Achievements />
      <PoR />
      <Skills />
      <WorkExp />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
