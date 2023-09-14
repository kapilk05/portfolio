import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks";
import WorkExp from "./components/Work-Exp";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Experience />
      <WorkExp />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
