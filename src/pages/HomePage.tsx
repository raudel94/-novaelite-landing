import { Helmet } from "react-helmet-async";
import CorporateHero from "../components/CorporateHero";
import Stats from "../components/Stats";
import WhatWeDo from "../components/WhatWeDo";
import Problem from "../components/Problem";
import HowItWorks from "../components/HowItWorks";
import WhyItWorks from "../components/WhyItWorks";
import Guarantee from "../components/Guarantee";
import IndustriesGrid from "../components/IndustriesGrid";
import WhyUs from "../components/WhyUs";
import FoundersStory from "../components/FoundersStory";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
import FinalCtaBand from "../components/FinalCtaBand";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>NovaElite Corporation — Exclusive Pre-Qualified Appointments for Home-Service Businesses</title>
        <meta
          name="description"
          content="NovaElite books exclusive, pre-qualified appointments for U.S. home-service businesses. No shared leads. No junk forms. Just booked jobs on your calendar."
        />
        <link rel="canonical" href="https://novaelitecorporation.com/" />
      </Helmet>

      <CorporateHero />
      <Stats />
      <WhatWeDo />
      <Problem />
      <HowItWorks />
      <WhyItWorks />
      <Guarantee />
      <IndustriesGrid />
      <WhyUs />
      <FoundersStory />
      <Testimonials />
      <Faq />
      <FinalCtaBand />
    </>
  );
}
