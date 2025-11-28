import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
<<<<<<< HEAD

import Navbar from "./components/Navbar";
import ErrorBoundary from "./components/ErrorBoundary";

=======
import Navbar from "./components/Navbar";
import ErrorBoundary from "./components/ErrorBoundary";
>>>>>>> fe0077a4e069fc6e8c4b18ea8ae6f30cb38d7da6
import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
import Playground from "./pages/Playground";
import Contact from "./pages/Contact";
import ProjectDetail from "./pages/ProjectDetail";
import CrystalVision from "./pages/CrystalVision";

<<<<<<< HEAD
function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
=======
// ScrollToTop Component
function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

>>>>>>> fe0077a4e069fc6e8c4b18ea8ae6f30cb38d7da6
  return null;
}

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <Router>
          <ScrollToTop />
          <div className="bg-black min-h-screen text-white">
            <Navbar />
<<<<<<< HEAD

            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/works" element={<Works />} />

              {/* NEW SLUG ROUTES */}
              <Route path="/works/:slug" element={<ProjectDetail type="works" />} />
              <Route path="/pastworks/:slug" element={<ProjectDetail type="pastworks" />} />
              <Route path="/playground/:slug" element={<ProjectDetail type="playground" />} />

              <Route path="/playground" element={<Playground />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>

=======
            <Routes>
              <Route
                path="/"
                element={<Home />}
              />
              <Route
                path="/home"
                element={<Home />}
              />
              <Route
                path="/#"
                element={<Home />}
              />
              <Route
                path="/about"
                element={<About />}
              />
              <Route
                path="/works"
                element={<Works />}
              />
              <Route
                path="/project/:id"
                element={<ProjectDetail />}
              />
              <Route
                path="/playground"
                element={<Playground />}
              />
              <Route
                path="/contact"
                element={<Contact />}
              />
              <Route
                path="/crystalvision"
                element={<CrystalVision />}
              />
            </Routes>
>>>>>>> fe0077a4e069fc6e8c4b18ea8ae6f30cb38d7da6
          </div>
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;
