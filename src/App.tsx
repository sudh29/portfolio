import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { ThemeProvider } from "./contexts/ThemeContext";

const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const Blog = lazy(() => import("./components/Blog"));
const CategoryPage = lazy(() => import("./components/CategoryPage"));
const BlogPostPage = lazy(() => import("./components/BlogPostPage"));

const Home: React.FC = () => (
  <>
    <Suspense fallback={<div>Loading...</div>}>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </Suspense>
  </>
);

const ScrollToHashElement = () => {
  const location = useLocation();

  useEffect(() => {
    const { hash } = location;
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
          });
        }, 100);
      }
    }
  }, [location]);

  return null;
};

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToHashElement />
        <div className="App">
          <Header />
          <main>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/portfolio/" element={<Home />} />
                <Route path="/portfolio/blog/" element={<Blog />} />
                <Route path="/portfolio/blog/:categorySlug" element={<CategoryPage />} />
                <Route path="/portfolio/blog/:categorySlug/:postSlug" element={<BlogPostPage />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
