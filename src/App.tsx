import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import WaterPage from "./pages/WaterPage";

// Reset scroll on route change
function RouteScrollReset() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <RouteScrollReset />
        <div className="relative min-h-screen bg-surface-0 text-white">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/water" element={<WaterPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}
