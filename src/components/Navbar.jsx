import { useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "./theme-provider";
import { useLocation } from "wouter";
import { Button } from './ui/button';


export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [, navigate] = useLocation();

  // Map section to route or scroll
  const handleNavClick = (section) => {
    let sectionId = section;
    if (section === "por") sectionId = "positions";
    if (section === "blogs") sectionId = "blogs";
    if (section === "connect" || section === "contact") sectionId = "contact";

    const element = document.getElementById(sectionId);
    if (section === "connect" || section === "contact") {
      // Always scroll to contact section for connect
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else if (section === "blogs") {
      // Always scroll to blogs section if present, else navigate
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/blogs");
      }
    } else {
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/90 backdrop-blur-md border-b border-border z-40 mt-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-xl font-bold bg-gradient-to-r from-purple-500 via-accent-cyan to-pink-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200 cursor-pointer font-mono tracking-wider"
            >
              &lt;Kapil.dev/&gt;
            </button>
          </div>

          {/* Desktop Menu */}

          <div className="hidden md:flex space-x-4">
            {["about", "experience", "education", "projects", "skills", "achievements", "por", "blogs"].map((section) => (
              <button
                key={section}
                onClick={() => handleNavClick(section)}
                className="hover:text-accent-cyan transition-colors duration-200"
              >
                {section === "por" ? "Position of Responsibility" : section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
            <a
              href="/Profile_1753463227998.pdf"
              download="Kapil_Kashyap_Resume.pdf"
              className="hover:text-accent-cyan transition-colors duration-200"
            >
              Resume
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              onClick={() => handleNavClick("contact")}
              variant="outline"
              className="border-accent-cyan text-accent-cyan hover:bg-accent-cyan hover:text-black font-medium"
            >
              Connect
            </Button>
            <Button
              onClick={toggleTheme}
              variant="ghost"
              size="icon"
              className="hover:bg-secondary"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            
            {/* Mobile menu button */}
            <Button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              variant="ghost"
              size="icon"
              className="md:hidden"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
          <div className="px-4 py-2 space-y-2">
            {["about", "experience", "education", "projects", "skills", "achievements", "por", "blogs"].map((section) => (
              <button
                key={section}
                onClick={() => handleNavClick(section)}
                className="block w-full text-left py-2 hover:text-accent-cyan transition-colors duration-200"
              >
                {section === "por" ? "Position of Responsibility" : section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
            <a
              href="/Profile_1753463227998.pdf"
              download="Kapil_Kashyap_Resume.pdf"
              className="block w-full text-left py-2 hover:text-accent-cyan transition-colors duration-200"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;