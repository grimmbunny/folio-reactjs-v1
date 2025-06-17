import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import PortfolioDetails from "./pages/PortfolioDetails";
import initLegacy from "./legacy/legacy-home";

import { useEffect } from "react";

export function LegacyManager() {
  const { pathname } = useLocation();
  useEffect(() => {
    // roda no próximo tick, após o React já ter pintado toda a árvore de componentes
    const handle = setTimeout(() => initLegacy(), 0);
    return () => clearTimeout(handle);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <LegacyManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:slug" element={<PortfolioDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
