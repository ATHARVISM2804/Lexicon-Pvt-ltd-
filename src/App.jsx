import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import ScrollProgress from "./components/layout/ScrollProgress.jsx";
import PageTransition from "./components/layout/PageTransition.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Leadership from "./pages/Leadership.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Media from "./pages/Media.jsx";
import Contact from "./pages/Contact.jsx";

/* Handles in-page anchors such as /portfolio#automotive. Resetting scroll
   on a plain route change is left to PageTransition, which does it behind
   the curtain so the jump is never seen. */
function HashScroll() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) return undefined;
    const timer = window.setTimeout(() => {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ block: "start", behavior: "smooth" });
    }, 560);
    return () => window.clearTimeout(timer);
  }, [pathname, hash]);

  return null;
}

export default function App() {
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
              <Route path="/leadership" element={<Leadership />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/media" element={<Media />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Home />} />
            </Routes>
          )}
        </PageTransition>
      </main>
      <Footer />
    </>
  );
}
