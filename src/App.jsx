import { useEffect, useRef, useState } from "react";
import Blobs from "./components/Blobs";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectDetail from "./components/ProjectDetail";

export default function App() {
  const [detailId, setDetailId] = useState(null);
  const savedY = useRef(0);
  const pendingHash = useRef(null);

  const openProject = (id) => {
    savedY.current = window.scrollY;
    setDetailId(id);
  };

  const closeProject = () => {
    pendingHash.current = null;
    setDetailId(null);
  };

  const navigate = (hash) => {
    if (detailId) {
      pendingHash.current = hash;
      setDetailId(null);
    } else {
      document.querySelector(hash)?.scrollIntoView();
    }
  };

  // Restore scroll position / jump to section after view switches
  useEffect(() => {
    if (detailId) {
      window.scrollTo({ top: 0, behavior: "instant" });
    } else if (pendingHash.current) {
      document.querySelector(pendingHash.current)?.scrollIntoView();
      pendingHash.current = null;
    } else {
      window.scrollTo({ top: savedY.current, behavior: "instant" });
    }
  }, [detailId]);

  return (
    <>
      <Blobs />
      <Navbar onNavigate={navigate} />
      {detailId ? (
        <ProjectDetail id={detailId} onBack={closeProject} />
      ) : (
        <main>
          <Hero />
          <About />
          <Projects onOpenProject={openProject} />
          <Contact />
        </main>
      )}
      <Footer />
    </>
  );
}
