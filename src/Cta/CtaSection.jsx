import React from "react";

function CtaSection() {
  return (
    <section className="cta__section__one max-w-4xl mx-auto py-14 px-5 lg:px-0">
      <div className="p-10 mx-auto flex flex-col gap-y-5 justify-center items-center">
        <h3 className="text-2xl md:text-3xl lg:text-4xl max-w-xl mx-auto font-bold text-primarydark text-center">
          Get free account
        </h3>
        <p className="text-secondarydark font-[520] max-w-lg text-sm lg:text-base mx-auto text-center">
          To generate less space to lead the market to run on its onw, Just
          create an account and do the best you could
        </p>
        <button className="w-fit px-10 py-2 bg-[#EC4747] text-white shadow-small transition-all duration-150 active:translate-x-1 active:translate-y-1 active:shadow-md rounded-full gap-2.5 flex items-center justify-center active:scale-95">
          <span className="text-center text-secondarydark text-base font-bold leading-normal">
            Create account
          </span>
        </button>
      </div>
    </section>
  );
}

export default CtaSection;
