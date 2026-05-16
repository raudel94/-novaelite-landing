import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Problem from "./components/Problem";
import Niches from "./components/Niches";
import HowItWorks from "./components/HowItWorks";
import RoiCalculator from "./components/RoiCalculator";
import RiskReversal from "./components/RiskReversal";
import Platform from "./components/Platform";
import Integrations from "./components/Integrations";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <div className="relative min-h-screen bg-surface-0 text-white">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Problem />
        <Niches />
        <HowItWorks />
        <RoiCalculator />
        <RiskReversal />
        <Platform />
        <Integrations />
        <Testimonials />
        <Faq />
        <ContactForm />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
