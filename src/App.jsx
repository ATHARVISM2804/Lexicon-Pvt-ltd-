import { useEffect } from "react";
import { scrollToElement, startSmoothScroll } from "./lib/motion.js";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import ScrollProgress from "./components/layout/ScrollProgress.jsx";
import PageTransition from "./components/layout/PageTransition.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Sector from "./pages/Sector.jsx";
import Media from "./pages/Media.jsx";
import Contact from "./pages/Contact.jsx";
import Privacy from "./pages/Privacy.jsx";
import NotFound from "./pages/NotFound.jsx";

/* Handles in-page anchors such as /portfolio#automotive. Resetting scroll
   on a plain route change is left to PageTransition, which does it behind
   the curtain so the jump is never seen. */
function HashScroll() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) return undefined;
    const timer = window.setTimeout(() => {
      const el = document.querySelector(hash);
      if (el) scrollToElement(el);
    }, 560);
    return () => window.clearTimeout(timer);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  useEffect(() => startSmoothScroll(), []);

  return (
    <>
      <a className="skipLink" href="#main">
        Skip to content
      </a>
      <ScrollProgress />
      <HashScroll />
      <Header />
      <main id="main">
        <PageTransition>
          {(displayLocation) => (
            <Routes location={displayLocation}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/leadership" element={<Navigate to="/about#team" replace />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/portfolio/:id" element={<Sector />} />
              <Route path="/media" element={<Media />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          )}
        </PageTransition>
      </main>
      <Footer />
    </>
  );
}
