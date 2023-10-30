import React from "react";
import { BsArrowRight } from "react-icons/bs";
import checkMarkOrange from "../../src/assets/checkmark-orange.svg";
import checkMarkRed from "../../src/assets/checkmark-red.svg";
import basic from "../../src/assets/basic.svg";
import pro from "../../src/assets/pro.svg";
import enterprise from "../../src/assets/enterprise.svg";
import Pricingtoggle from "./Pricingtoggle";
import { useState } from "react";

function PricingSection() {
  const [enabled, setEnabled] = useState(false);
  const pricingOptions = [
    {
      name: "Basic",
      for: "For individuals",
      price: "$7",
      yearlyPrice: "$84",
      description:
        "Just using this for yourself? Lite is the way to go for the lites platform.",
      features: [
        "One person team",
        "Exports to files for easy client viewing",
        "2TB of data for your account",
      ],
      backgroundColor: "#FFFFFF",
      buttonColor: "bg-[#EC4747]",
      buttonTextColor: "text-white",
      tagColor: "bg-gray-200",
      tagTextColor: "text-black",
      borderColor: "border-[#EC4747]",
      checkMark: checkMarkOrange,
      plan: basic,
      planBackgroundColor: "bg-[#FBEDDF]",
    },
    {
      name: "Pro",
      for: "For startups",
      recommended: "Popular",
      price: "$19",
      yearlyPrice: "$228",
      description:
        "Just using this for yourself? Lite is the way to go for the lites platform.",
      features: [
        "One person team",
        "Exports to files for easy client viewing",
        "2TB of data for your account",
      ],
      backgroundColor: "#FBEDDF",
      buttonColor: "bg-white",
      buttonTextColor: "text-black",
      tagColor: "bg-[#1F605E]",
      tagTextColor: "text-white",
      borderColor: "border-transparent",
      checkMark: checkMarkRed,
      plan: pro,
      planBackgroundColor: "bg-white",
    },
    {
      name: "Enterprise",
      for: "For big companies",

      price: "$19",
      yearlyPrice: "$228",
      description:
        "Just using this for yourself? Lite is the way to go for the lites platform.",
      features: [
        "One person team",
        "Exports to files for easy client viewing",
        "2TB of data for your account",
      ],
      backgroundColor: "#FFFFFF",
      buttonColor: "bg-[#EC4747]",
      buttonTextColor: "text-white",
      tagColor: "bg-gray-200",
      tagTextColor: "text-black",
      borderColor: "border-[#EC4747]",
      checkMark: checkMarkOrange,
      plan: enterprise,
      planBackgroundColor: "bg-[#FBEDDF]",
    },
  ];

  return (
    <div className="pricing max-w-5xl mx-auto py-10">
      <div className="featured-headline flex flex-col gap-y-2">
        <h3 className="text-3xl sm:text-4xl lg:text-[44px] max-w-xs mx-auto md:max-w-full md:mx-0 text-center font-bold leading-[1.15] text-black">
          Affordable pricing plans
        </h3>
        <div className="flex justify-center mt-14">
          <Pricingtoggle enabled={enabled} setEnabled={setEnabled} />
        </div>
        <div className="pricing-card grid px-10 lg:px-14 xl:px-2 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8 lg:py-12 lg:pb-20 lg:pt-8">
          {pricingOptions.map((option, index) => (
            <div
              key={index}
              className={`card pricing-card-box border ${option.borderColor} rounded-xl flex flex-col `}
              style={{ backgroundColor: option.backgroundColor }}
            >
              <div className="">
                <div className="p-5 flex flex-col gap-y-2">
                  <div className="flex items-start gap-x-2.5">
                    <div
                      className={` ${option.planBackgroundColor} w-fit p-2 rounded-xl`}
                    >
                      <img src={option.plan} alt="" />
                    </div>
                    <div>
                      <p
                        className={` rounded-full px-2.5 py-[1px] w-fit text-base font-medium`}
                      >
                        {option.for}
                      </p>
                      <p
                        className={` rounded-full px-2.5 py-[1px] w-fit text-base font-semibold`}
                      >
                        {option.name}
                      </p>
                    </div>
                    {option.recommended && (
                      <div
                        className={` bg-white rounded-md px-2.5 py-1 w-fit text-sm font-medium text-black`}
                      >
                        {option.recommended}
                      </div>
                    )}
                  </div>

                  <h3 className="mt-5 text-sm font-medium text-slate-500/70">
                    <span className="text-3xl font-bold text-slate-800">
                      {enabled ? option.yearlyPrice : option.price}
                    </span>{" "}
                    {enabled ? "/year" : "/month"}
                  </h3>
                  <p className="text-sm lg:text-base text-[#7c7c7c] font-medium">
                    {option.description}
                  </p>
                </div>
              </div>
              <div className="pricing-features my-2.5 flex flex-col gap-y-5 p-5">
                {option.features.map((feature, index) => (
                  <div key={index} className="flex gap-x-3">
                    <img className="w-5 h-5" src={option.checkMark} alt="" />
                    <p className="text-[#486581] text-sm">{feature}</p>
                  </div>
                ))}
              </div>
              <div className="pb-5 px-5">
                <button
                  className={`my-2 flex text-base lg:text-lg items-center justify-center rounded-full h-12 w-full font-bold  border border-slate-500 hover:shadow-lg hover:drop-shadow-lg transition duration-200 ${option.buttonColor} ${option.buttonTextColor}`}
                >
                  <span
                    className="tracking-tight"
                    style={{ color: option.buttonTextColor }}
                  >
                    Select {option.name}
                  </span>
                  <BsArrowRight className="ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PricingSection;
