import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="App">
          <Header />
          <main>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/portfolio/" element={<Home />} />
                <Route path="/portfolio/blog/" element={<Blog />} />
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
