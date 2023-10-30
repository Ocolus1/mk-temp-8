import React from "react";
import Herosection from "./Hero/Herosection";
import Services from "./Services/Services";
import FeaturedSection from "./Benefits/FeaturedSection";
import Pricingsection from "./Pricing/Pricingsection";
import TestimonialSection from "./Testimonial/TestimonialSection";
import Footer from "./Footer/Footer";
import CtaSection from "./Cta/CtaSection";

function App() {
  return (
    <div className="home">
      <Herosection />
      <Services />
      <FeaturedSection />
      <Pricingsection />
      <TestimonialSection />
      <CtaSection />
      <Footer />
    </div>
  );
}

export default App;
