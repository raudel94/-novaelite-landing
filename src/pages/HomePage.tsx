import { Helmet } from "react-helmet-async";
import CorporateHero from "../components/CorporateHero";
import Stats from "../components/Stats";
import WhatWeDo from "../components/WhatWeDo";
import Problem from "../components/Problem";
import HowItWorks from "../components/HowItWorks";
import IndustriesGrid from "../components/IndustriesGrid";
import WhyUs from "../components/WhyUs";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>NovaElite Corporation — Qualified Appointments & Lead Generation Systems</title>
        <meta
          name="description"
          content="NovaElite Corporation builds modern lead-generation systems for U.S. service businesses. Exclusive, pre-qualified appointments. Performance-based. Industry-specialized."
        />
        <link rel="canonical" href="https://novaelitecorporation.com/" />
      </Helmet>

      <CorporateHero />
      <Stats />
      <WhatWeDo />
      <Problem />
      <HowItWorks />
      <IndustriesGrid />
      <WhyUs />
      <Testimonials />
      <Faq />
    </>
  );
}
