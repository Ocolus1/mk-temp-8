import worldmap from "../assets/world-map.svg";
import gift from "../assets/gift.svg";
import bag from "../assets/bag.svg";
import cart from "../assets/cart.svg";

import React from "react";

const servicesData = [
  {
    title: "STARTUP",
    description: "We provide the most comprehensive approach to every user",
    image: gift,
  },
  {
    title: "BUSINESS",
    description: "We provide the most comprehensive approach to every user",
    image: bag,
  },
  {
    title: "ECOMMERCE",
    description: "We provide the most comprehensive approach to every user",
    image: cart,
  },
];

const ServiceFeature = ({ title, description, image }) => {
  return (
    <div className="rounded-xl flex items-center gap-x-6">
      <div className="p-4 flex items-center justify-center bg-[#FBEDDF] rounded-lg">
        <img className="h-auto w-5 lg:w-14" src={image} alt="" />
      </div>
      <div className="card-content flex flex-col">
        <h3 className="text-sm font-semibold">{title}</h3>
        <p className="text-xs text-[#7c7c7c] max-w-lg lg:max-w-md mx-0 font-medium">
          {description}
        </p>
      </div>
    </div>
  );
};

function Services() {
  return (
    <section className="max-w-5xl mx-auto">
      <div className="services-headline flex flex-col lg:flex-row lg:items-center lg:justify-between py-10 px-10 lg:px-20 xl:px-0 gap-x-10">
        <div className="left-service-part lg:w-1/3 flex flex-col justify-start items-start">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold max-w-xs sm:max-w-4xl lg:max-w-sm sm:mx-auto md:mr-0 md:ml-0 leading-[1.15]">
            Our Services made for you
          </h3>
        </div>
        <div className="right-service-part pt-5 lg:w-2/3">
          <p className="text-base text-[#242424]/60">
            The expectation that productivity should always lead to tangible
            results or accomplishments & notion that certain types of work or
            activities are more valuable or productive than others.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row px-10 xl:px-0 gap-x-5 gap-y-5 pb-10">
        {servicesData.map((service, index) => (
          <ServiceFeature key={index} {...service} />
        ))}
      </div>

      <div className="flex flex-col gap-y-10 items-center justify-center">
        <h2 className="font-bold text-black text-2xl md:text-3xl lg:text-4xl">
          Monitor from all over the world
        </h2>
        <img src={worldmap} alt="" />
      </div>
    </section>
  );
}

export default Services;
