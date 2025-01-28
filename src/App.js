import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks";
import WorkExp from "./components/Work-Exp";
import Publications from "./components/publications";
import Skills from "./components/skills"; // Import Skills component instead of Experience
import Achievements from "./components/achievements"; // Import Achievements component
import PoR from "./components/PoR"; // Import PoR component

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Publications />
      <Achievements /> {/* Render Achievements component here */}
      <PoR /> {/* Render PoR component here */}
      <Skills /> {/* Render Skills component here */}
      <WorkExp />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
