import React from "react";

const WorkTogether = () => {
  return (
    <div className="box">
      <div className="container mx-auto max-w-screen-xl py-16">
        <h3 className="box-title text-3xl sm:text-4xl lg:text-6xl text-zinc-950 text-center font-medium mb-12">
          Let’s work together
        </h3>

        <div className="featured-cards py-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-baseline justify-between gap-y-8 lg:gap-x-12">
            <section className="flex flex-col items-start bg-zinc-100 rounded-2xl p-8 lg:p-16 gap-y-4 w-full lg:w-auto">
              <h4 className="text-2xl font-medium text-zinc-900">
                Full portfolio website
                <span className="text-zinc-500 ml-2 -mt-2 text-lg">$2,700</span>
              </h4>
              <p className="leading-8 text-zinc-700">
                Transform your concepts into captivating digital experiences
                with bespoke single-page website meticulously designed and
                developed in Themeforest
              </p>
              <a
                href="/"
                className="border border-zinc-300 bg-white py-3 px-8 rounded-full text-zinc-900 font-normal"
              >
                Discover Work
              </a>
            </section>

            <section className="relative flex flex-col items-start bg-zinc-50 rounded-2xl p-8 lg:p-16 gap-y-4 w-full lg:w-auto">
              <div className="relative block w-full">
                <span className="order-2 text-xs lg:text-sm text-zinc-300 bg-zinc-950 px-2 py-1 lg:px-4 lg:py-1.5 rounded-full absolute right-0 mt-1.5 md:mt-0">
                  Special Offer!
                </span>
                <h4 className="text-2xl font-medium text-zinc-900">
                  Envato landing page
                  <span className="text-zinc-500 ml-2 -mt-2 text-lg">
                    $1,970
                  </span>
                </h4>
              </div>
              <p className="leading-8 text-zinc-700">
                Transform your concepts into captivating digital experiences
                with bespoke single-page website meticulously designed and
                developed in Themeforest
              </p>
              <a
                href="/"
                className="border border-zinc-300 bg-white py-3 px-8 rounded-full text-zinc-900 font-normal"
              >
                Discover Work
              </a>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkTogether;
