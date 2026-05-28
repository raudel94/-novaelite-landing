import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import WaterCheck from "../components/WaterCheck";
import WaterSystems from "../components/WaterSystems";
import WhyTestMatters from "../components/WhyTestMatters";
import SavingsCalculator from "../components/SavingsCalculator";
import WaterMarketCharts from "../components/WaterMarketCharts";
import WaterKpis from "../components/WaterKpis";
import TestIncludes from "../components/TestIncludes";
import WhyFreeTest from "../components/WhyFreeTest";
import AfterBooking from "../components/AfterBooking";
import TrustStrip from "../components/TrustStrip";
import ContactForm from "../components/ContactForm";
import WaterFaq from "../components/WaterFaq";
import StickyCtaBar from "../components/StickyCtaBar";
import FloatingCallWidget from "../components/FloatingCallWidget";

export default function WaterPage() {
  return (
    <>
      <Helmet>
        <title>NovaElite Water — Premium Whole-Home Water Treatment in Miami</title>
        <meta
          name="description"
          content="Cleaner, softer, healthier water for your Miami home. Free in-home water test, certified systems, lifetime support."
        />
      </Helmet>

      <Hero />
      <TrustStrip />
      <WaterCheck />
      <WaterSystems />
      <WhyTestMatters />
      <SavingsCalculator />
      <WaterMarketCharts />
      <WaterKpis />
      <TestIncludes />
      <WhyFreeTest />
      <AfterBooking />
      <ContactForm />
      <WaterFaq />

      <StickyCtaBar />
      <FloatingCallWidget />
    </>
  );
}
