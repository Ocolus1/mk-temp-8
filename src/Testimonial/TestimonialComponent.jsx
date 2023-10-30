import React, { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import testimonialprofile1 from "../assets/testimonial-image-1.jpg";

const testimonials = [
  {
    id: 1,
    content:
      "From website design and development to social media management, SEO, and digital advertising, digital services can provide businesses with the tools they need to engage with their customers.",
    author: "Emanuel Greek",
    position: "Manager @ Trello",
    profile: testimonialprofile1,
  },
  {
    id: 2,
    content:
      "Good design and development are the pillars of exceptional digital experiences. They merge creativity and functionality seamlessly, crafting intuitive interfaces and powerful functionalities. With attention to detail and a user-centric approach.",
    author: "Harry Doe",
    position: "Manager @ Trello",
    profile: testimonialprofile1,
  },
  {
    id: 3,
    content:
      "From website design and development to social media management, SEO, and digital advertising, digital services can provide businesses with the tools they need to engage with their customers.",
    author: "John Doe",
    position: "Manager @ Trello",
    profile: testimonialprofile1,
  },
];

const TestimonialCarousel = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const totalCards = testimonials.length;

  const nextCard = () => {
    setCurrentCard((currentCard + 1) % totalCards);
  };

  const previousCard = () => {
    setCurrentCard((currentCard - 1 + totalCards) % totalCards);
  };

  const currentTestimonial = testimonials[currentCard];

  return (
    <div className="w-full max-w-5xl mx-auto py-5 lg:py-20">
      <div className="p-7 md:p-10 xl:p-0">
        <div className="testimonial-card bg-[#FBEDDF] px-6 rounded-xl">
          <div className="testimonial-content flex flex-col gap-y-10 lg:flex-row items-center justify-center transition-all duration-500">
            <div className="testimonial-image w-1/3">
              <img src={currentTestimonial.profile} alt="Testimonial" />
            </div>
            <div className="testimonial-text w-full lg:w-2/3">
              <h2 className="text-[#0A071B] text-lg lg:text-xl font-bold mb-4">
                {currentTestimonial.content}
              </h2>
              <p className="text-[#0A071B] text-sm lg:text-base font-bold">
                {currentTestimonial.author}
              </p>
              <p className="text-[#0A071B]/50 text-xs lg:text-sm font-bold pb-10 lg:pb-0">
                {currentTestimonial.position}
              </p>
            </div>
          </div>
        </div>

        <div className="testimonial-buttons flex justify-end items-center -mt-7 mr-5 md:mr-7 lg:-mt-12 gap-x-5">
          <button onClick={previousCard}>
            <BsArrowLeft className="text-[#0A071B] font-bold lg:text-3xl" />
          </button>
          <button onClick={nextCard}>
            <BsArrowRight className="text-[#0A071B] font-bold lg:text-3xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
