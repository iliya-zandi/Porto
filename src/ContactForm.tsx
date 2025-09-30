import React from "react";

const ContactForm = () => {
  return (
    <div className="box">
      <div className="container mx-auto max-w-screen-xl py-16">
        <div className="flex flex-col items-start gap-y-8">
          <div className="block">
            <h4 className="text-3xl sm:text-4xl lg:text-5xl tracking-wide font-medium text-zinc-950">
              Get in touch with me
            </h4>
            <p className="max-w-full lg:max-w-xl text-zinc-600 leading-7 mt-4 text-base lg:text-lg">
              Let's bring your ideas to life. With my expertise in Envato design
              and development, we can create something truly remarkable
            </p>
          </div>

          <form method="post" className="w-full">
            <div className="flex flex-col gap-y-6">
              <div className="flex flex-col lg:flex-row gap-6 w-full">
                <div className="flex flex-col w-full lg:w-1/2">
                  <label className="text-zinc-900 mb-2.5 font-normal">
                    What’s your name?
                  </label>
                  <input
                    type="text"
                    placeholder="Orion Paul"
                    className="border border-zinc-300 rounded-full px-5 py-2.5 text-zinc-800 placeholder:text-zinc-700 placeholder:font-light placeholder:text-sm w-full"
                  />
                </div>

                <div className="flex flex-col w-full lg:w-1/2">
                  <label className="text-zinc-900 mb-2.5 font-normal">
                    Enter your email address
                  </label>
                  <input
                    type="email"
                    placeholder="Orion2345@gmail.com"
                    className="border border-zinc-300 rounded-full px-5 py-2.5 text-zinc-800 placeholder:text-zinc-700 placeholder:font-light placeholder:text-sm w-full"
                  />
                </div>
              </div>

              <div className="flex flex-col lg:flex-row gap-6 w-full">
                <div className="flex flex-col w-full lg:w-1/2">
                  <label className="text-zinc-900 mb-2.5 font-normal">
                    What service are you interested in?
                  </label>
                  <input
                    type="text"
                    placeholder="Personal Portfolio"
                    className="border border-zinc-300 rounded-full px-5 py-2.5 text-zinc-800 placeholder:text-zinc-700 placeholder:font-light placeholder:text-sm w-full"
                  />
                </div>

                <div className="flex flex-col w-full lg:w-1/2">
                  <label className="text-zinc-900 mb-2.5 font-normal">
                    What's your ballpark budget?
                  </label>
                  <input
                    type="text"
                    placeholder="$2,600"
                    className="border border-zinc-300 rounded-full px-5 py-2.5 text-zinc-800 placeholder:text-zinc-700 placeholder:font-light placeholder:text-sm w-full"
                  />
                </div>
              </div>

              <div className="flex flex-col w-full">
                <label className="text-zinc-900 mb-2.5 font-normal">
                  Do you already have a website?
                </label>
                <input
                  type="text"
                  placeholder="iliyazandi.com"
                  className="border border-zinc-300 rounded-full px-5 py-2.5 text-zinc-800 placeholder:text-zinc-700 placeholder:font-light placeholder:text-sm w-full"
                />
              </div>

              <div className="flex flex-col w-full">
                <label className="text-zinc-900 mb-2.5 font-normal">
                  How can I help you?
                </label>
                <textarea
                  placeholder="Hey! Could you help me ......"
                  className="border border-zinc-300 rounded-2xl px-5 py-2.5 text-zinc-800 placeholder:text-zinc-700 placeholder:font-light placeholder:text-sm w-full min-h-[120px]"
                ></textarea>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
