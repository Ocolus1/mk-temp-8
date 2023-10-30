import React from "react";
import { BsArrowRight } from "react-icons/bs";
import heroImage from "../../src/assets/hero-main-image.png";
import heroTestimonialImage from "../../src/assets/hero-testimonial-images.png";
import Navbar from "../Navbar";
import company1 from "../assets/company-1.svg";
import company2 from "../assets/company-2.svg";
import company3 from "../assets/company-3.svg";
import company4 from "../assets/company-4.svg";
function Herosection() {
  return (
    <div className="hero">
      {/* Hero Section */}
      <div className="hero-section border-0">
        <Navbar />
        <div className="max-w-6xl mx-auto flex gap-x-2 flex-col lg:flex-row items-center lg:items-end justify-between py-10 px-10">
          <div className="w-full lg:w-1/3">
            <h2 className="font-bold text-4xl">
              Grow your market reach in a{" "}
              <span className="text-red-500">flash</span>
            </h2>
          </div>
          <div className="w-full lg:w-2/3 flex flex-col gap-y-5 gap-x-3 lg:flex-row items-center lg:items-end justify-between py-10 lg:py-0">
            <div className="flex items-end w-full lg:w-1/3 px-2">
              <div className="flex flex-col items-start w-full lg:w-4/5">
                <p className="text-red-500 text-sm font-semibold">
                  Try for free
                </p>
                <p className="text-sm text-slate-500/70 font-medium">
                  No credti card required
                </p>
              </div>
              <div className="w-full lg:w-1/5 pr-2 flex items-center justify-center">
                <div className="bg-red-500 p-2.5 rounded-full ">
                  <BsArrowRight className="text-white" />
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col gap-y-2 lg:w-2/3">
              <img className="w-1/2" src={heroTestimonialImage} alt="" />
              <p className="text-sm text-slate-500/70">
                Some amazing people who joined us
              </p>
              <p className="text-sm lg:text-base text-slate-500/90">
                Squaree helps users to go from Zero to Hero with Pockets flow’s
                simple platform that helps creators like you sell their digital
                products online.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section Video */}
      <div className="pb-10 lg:py-10">
        <div className="hero-video max-w-5xl mx-auto bg-[#FBEDDF] p-14 pb-0 lg:rounded-xl">
          <div className="image-container">
            <img className="rounded-t-xl shadow-md" src={heroImage} alt="" />
          </div>
        </div>
      </div>
      <div className="testimonial-company flex flex-col gap-y-5 lg:gap-y-10 items-center justify-center py-5 lg:py-20">
        <p className="text-base text-center text-slate-600/70 lg:text-xl font-medium px-20">
          We have the fast-paced growing companies with us
        </p>
        <div className="company-logo flex items-center max-w-4xl mx-auto justify-center gap-x-10 lg:gap-x-32">
          <img className="h-6 w-6 lg:h-auto lg:w-auto" src={company1} alt="" />
          <img className="h-6 w-6 lg:h-auto lg:w-auto" src={company2} alt="" />
          <img className="h-6 w-6 lg:h-auto lg:w-auto" src={company3} alt="" />
          <img className="h-6 w-6 lg:h-auto lg:w-auto" src={company4} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Herosection;
