import React from "react";
import TestimonialCarousel from "./TestimonialComponent";

function TestimonialSection() {
  return (
    <section className="testimonial__section">
      <div className="max-w-5xl mx-auto py-10 lg:py-20">
        <div className="testimonial-headline flex flex-col items-center gap-y-2">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-[1.15] text-black text-center">
            What our investors say
          </h3>
          <div className="w-full">
            <TestimonialCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
