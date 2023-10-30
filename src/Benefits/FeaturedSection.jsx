import React from "react";
import benefitImage from "../../src/assets/benefit-image.png";
import slack from "../../src/assets/slack.svg";
import gmail from "../../src/assets/gmail.svg";
import subtract from "../../src/assets/subtract.svg";

const icon = {
  slack: slack,
  gmail: gmail,
  subtract: subtract,
};

const FeaturedSection = () => (
  <div className="featured-section pt-12 pb-4 px-0 lg:px-14 lg:py-16">
    <div className="max-w-5xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-x-20">
      <div className="featured-left-part w-full px-10 py-2 lg:p-0 lg:w-1/2 max-w-2xl mx-auto">
        <div className="featured-headline flex flex-col gap-y-5">
          <h3 className="text-3xl lg:text-[44px] font-bold leading-[1.15] text-black">
            You will be notified the way to want
          </h3>
          <p>
            To cancel a booking request which has not yet been accepted by the
            advertiser, go to the top of your conversation with the advertiser
            and click "Cancel request". There is nothing more for you to do
            after this
          </p>
          <div className="flex items-center justify-start gap-x-5">
            {Object.keys(icon).map((iconName, index) => (
              <div key={index} className="bg-gray-100 p-5 rounded-lg w-fit">
                <img src={icon[iconName]} alt={iconName} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="featured-right-part w-full p-8 px-10 lg:p-0 lg:w-1/2 mx-auto">
        <img
          className="rounded-xl mx-auto lg:mx-0 "
          src={benefitImage}
          alt=""
        />
      </div>
    </div>
  </div>
);

export default FeaturedSection;
