import React, { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const sections = ["home", "about", "skills", "projects", "contact"];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll handler to highlight active section
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);

    for (const section of sections) {
      const el = document.getElementById(section);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section);
          break;
        }
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // trigger on mount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
    setIsMobileMenuOpen(false);
  }, []);

  const handleNavClick = useCallback(
    (sectionId: string) => {
      setActiveSection(sectionId);
      const isPortfolioPage =
        location.pathname === "/portfolio/" ||
        location.pathname === "/portfolio";

      if (isPortfolioPage) {
        scrollToSection(sectionId);
      } else {
        // Navigate to portfolio home, then scroll
        window.location.href = `/portfolio/#${sectionId}`;
      }
    },
    [location.pathname, scrollToSection]
  );

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <button
              type="button"
              onClick={() => handleNavClick("home")}
              className="nav-link logo-button"
              aria-label="Sudhanshu Chaudhary - Home"
            >
              <h2>Sudhanshu Chaudhary</h2>
            </button>
          </div>

          <nav className={`nav ${isMobileMenuOpen ? "nav-open" : ""}`}>
            <ul className="nav-list">
              {sections.map((section) => (
                <li key={section}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(section)}
                    className={
                      activeSection === section ? "nav-link active" : "nav-link"
                    }
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                </li>
              ))}

              {!location.pathname.includes("blog") && (
                <li>
                  <button
                    type="button"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      navigate("/portfolio/blog/");
                    }}
                    className="nav-link"
                  >
                    Blog
                  </button>
                </li>
              )}
            </ul>
          </nav>

          <div className="header-actions">
            <ThemeToggle />
            <button
              className={`mobile-menu-btn ${isMobileMenuOpen ? "active" : ""}`}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
