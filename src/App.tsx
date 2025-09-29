import React from "react";
import { FiAlignCenter, FiSearch, FiMoon } from "react-icons/fi";
import LineGrid from "./assets/images/line-grid.png";
import Thumbnail from "./assets/images/thumbnail.jpg";

import Featured1 from "./assets/images/featured-1.jpg";
import Featured2 from "./assets/images/featured-2.jpg";
import Featured3 from "./assets/images/featured-3.jpg";
import Featured4 from "./assets/images/featured-4.jpg";

import { RiInstagramLine, RiGithubLine } from "react-icons/ri";
import Button from "./components/Button";

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        {/*  */}
        <nav className="app-navbar block">
          <div className="container py-12 flex items-center justify-between">
            <h1 className="text-3xl app-logo">
              <a href="/" className="text-zinc-900 font-extrabold">
                <span>PROTO</span>
              </a>
            </h1>
            <div className="flex items-center gap-x-3">
              <button className="inline-block px-3 py-3 rounded-full text-zinc-800">
                <FiAlignCenter size={26} strokeWidth={1.4} />
                <span className="hidden">(search)</span>
              </button>
              <button className="inline-block px-3 py-3 rounded-full text-zinc-800">
                <FiSearch size={26} strokeWidth={1.4} />
                <span className="hidden">(search)</span>
              </button>
              <button className="inline-block px-3 py-3 rounded-full text-zinc-800">
                <FiMoon size={26} strokeWidth={1.4} />
                <span className="hidden">(search)</span>
              </button>
            </div>
          </div>
        </nav>
        {/*  */}
        <div className="app-hero relative py-8">
          <div className="container">
            {/*  */}
            <img src={LineGrid} className="absolute top-0 -z-10" />
            {/*  */}
            <div className="image-box overflow-hidden inline-block">
              <img src={Thumbnail} className="max-w-full h-auto rounded-3xl" />
            </div>
            {/*  */}
            <div className="title-box my-10">
              <h2 className="font-semibold text-zinc-900 leading-20 text-[54px]">
                <span>Driven by imagination and innovation,</span>
                <br />
                <span>I’m growing as a web designer every day.</span>
              </h2>
            </div>
            {/*  */}
            <div className="flex items-baseline justify-between">
              <section>
                <h5 className="text-zinc-700 font-normal leading-7">
                  <span>Be the first to get it for only $5 just leave</span>
                  <br /> <span>your email below!</span>
                </h5>
                <form method="post" className="newsletter-header mt-6">
                  <div className="input-group gap-x-4 items-center">
                    <input
                      type="email"
                      placeholder="Email address"
                      className="border border-zinc-400/50 rounded-full px-8 font-normal placeholder:text-zinc-600 text-zinc-800 min-w-xs py-3"
                    />
                    <Button className="ml-4" type="submit">
                      <span>Subscribe</span>
                    </Button>
                  </div>
                </form>
              </section>
              <section className="max-w-lg">
                <p className="text-lg leading-9 text-zinc-700 font-normal">
                  As a freelancer, I’m driven by a passion for crafting eye
                  catching designs that leave a lasting impact.
                </p>
                <span className="text-zinc-700 font-light block mt-5 leading-9">
                  With every project, I aim to blend creativity.
                </span>
              </section>
            </div>
          </div>
        </div>
      </header>
      <section className="app-featured py-24">
        <div className="container mx-auto max-w-screen-xl">
          <h3 className="box-title text-9xl text-zinc-950 text-center font-medium">
            Featured work©
          </h3>
          <div className="featured-cards pt-22 pb-12">
            <div className="grid grid-cols-2 justify-between gap-x-15 gap-y-5">
              <article className="featured-item">
                <div className="inline-block">
                  <a href="/" className="block">
                    <img
                      src={Featured1}
                      className="max-w-full overflow-hidden rounded-4xl"
                    />
                  </a>
                  <div className="flex items-center justify-between py-6 px-2">
                    <a href="/" className="text-zinc-800">
                      <h4 className="text-2xl font-medium">Rando Honda</h4>
                    </a>
                    <span className="text-lg font-normal">/2025</span>
                  </div>
                </div>
              </article>
              <article className="featured-item">
                <div className="inline-block">
                  <a href="/" className="block">
                    <img
                      src={Featured2}
                      className="max-w-full overflow-hidden rounded-4xl"
                    />
                  </a>
                  <div className="flex items-center justify-between py-6 px-2">
                    <a href="/" className="text-zinc-800">
                      <h4 className="text-2xl font-medium">Rando Honda</h4>
                    </a>
                    <span className="text-lg font-normal">/2025</span>
                  </div>
                </div>
              </article>
              <article className="featured-item">
                <div className="inline-block">
                  <a href="/" className="block">
                    <img
                      src={Featured3}
                      className="max-w-full overflow-hidden rounded-4xl"
                    />
                  </a>
                  <div className="flex items-center justify-between py-6 px-2">
                    <a href="/" className="text-zinc-800">
                      <h4 className="text-2xl font-medium">Rando Honda</h4>
                    </a>
                    <span className="text-lg font-normal">/2025</span>
                  </div>
                </div>
              </article>
              <article className="featured-item">
                <div className="inline-block">
                  <a href="/" className="block">
                    <img
                      src={Featured4}
                      className="max-w-full overflow-hidden rounded-4xl"
                    />
                  </a>
                  <div className="flex items-center justify-between py-6 px-2">
                    <a href="/" className="text-zinc-800">
                      <h4 className="text-2xl font-medium">Rando Honda</h4>
                    </a>
                    <span className="text-lg font-normal">/2025</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Button className="px-8 py-3.5">View all Showcases</Button>
          </div>
        </div>
      </section>
      <section className="app-featured py-12">
        <div className="container mx-auto max-w-screen-xl">
          <h3 className="box-title text-6xl text-zinc-950 text-center font-medium">
            Let’s work together
          </h3>
          <div className="featured-cards py-14">
            <div className="flex items-baseline justify-between gap-x-12">
              <section className="flex flex-col items-start bg-zinc-100 rounded-2xl p-16 gap-y-4">
                <h4 className="text-2xl font-medium text-zinc-900">
                  Full portfolio website
                  <span className="text-zinc-500 ml-2 -mt-2 text-lg">
                    $2,700
                  </span>
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
              <section className="relative flex flex-col items-start bg-zinc-50 rounded-2xl p-16 gap-y-4">
                <div className="relative block w-full">
                  <span className="order-2 text-zinc-300 bg-zinc-950 px-4 py-1.5 rounded-full text-sm absolute right-0">
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
      </section>
      <section className="app-featured py-12">
        <div className="container mx-auto max-w-screen-xl">
          <div className="flex flex-col items-start">
            <div className="block">
              <h4 className="text-5xl tracking-wide font-medium text-zinc-950">
                Get in touch with me
              </h4>
              <p className="max-w-xl text-zinc-600 leading-7 mt-4">
                Let's bring your ideas to life. With my expertise in Envato
                design and development, we can create something truly remarkable
              </p>
            </div>
            <div className="block mt-4">
              <form method="post" className="get-it-touch-form">
                <div className="flex flex-row flex-wrap gap-y-6">
                  <div className="max-w-1/2 w-full flex flex-col pr-14">
                    <label className="text-zinc-900 mb-2.5 font-normal">
                      What’s your name?
                    </label>
                    <input
                      type="name"
                      placeholder="Orion Paul"
                      className="border border-zinc-300 rounded-full px-5 py-2.5 text-normal text-zinc-800 placeholder:text-zinc-700 placeholder:font-light placeholder:text-sm"
                    />
                  </div>
                  <div className="flex flex-col max-w-1/2 w-full">
                    <label className="text-zinc-900 mb-2.5 font-normal">
                      Enter your email address
                    </label>
                    <input
                      className="border border-zinc-300 rounded-full px-5 py-2.5 text-normal text-zinc-800 placeholder:text-zinc-700 placeholder:font-light placeholder:text-sm"
                      type="email"
                      placeholder="Orion2345@gmail.com"
                    />
                  </div>
                  <div className="flex flex-col max-w-1/2 w-full pr-14">
                    <label className="text-zinc-900 mb-2.5 font-normal">
                      What service are you interested in?
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="border border-zinc-300 rounded-full px-5 py-2.5 text-normal text-zinc-800 placeholder:text-zinc-700 placeholder:font-light placeholder:text-sm"
                      placeholder="Personal Portfolio"
                    />
                  </div>
                  <div className="flex flex-col max-w-1/2 w-full">
                    <label className="text-zinc-900 mb-2.5 font-normal">
                      What's your ballpark budget?
                    </label>
                    <input
                      type="text"
                      className="border border-zinc-300 rounded-full px-5 py-2.5 text-normal text-zinc-800 placeholder:text-zinc-700 placeholder:font-light placeholder:text-sm"
                      name="name"
                      placeholder="$2,600"
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label className="text-zinc-900 mb-2.5 font-normal">
                      Do you already have a website?
                    </label>
                    <input
                      type="text"
                      className="border border-zinc-300 rounded-full px-5 py-2.5 text-normal text-zinc-800 placeholder:text-zinc-700 placeholder:font-light placeholder:text-sm"
                      name="name"
                      placeholder="iliyazandi.com"
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label className="text-zinc-900 mb-2.5 font-normal">
                      How can I help you?
                    </label>
                    <textarea
                      className="border border-zinc-300 rounded-2xl px-5 py-2.5 text-normal text-zinc-800 placeholder:text-zinc-700 placeholder:font-light placeholder:text-sm min-h-[120px]"
                      placeholder="Hey! Could you help me ......"
                    ></textarea>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <footer className="block py-24 relative overflow-hidden">
        <div className="container mx-auto max-w-screen-xl">
          <img src={LineGrid} className="absolute top-0 " />
          <h3 className="text-zinc-950 text-center font-semibold text-9xl mb-12">
            Warm thanks!
          </h3>
          <div className="flex flex-col items-center gap-y-4">
            <h6 className="text-lg text-zinc-800 font-normal">
              Have a beautiful and restful Sunday!
            </h6>
            <div className="inline-flex flex-row items-center gap-x-4">
              <Button className="order-2" link="/">
                Get in Touch
              </Button>

              <ul className="flex items-center gap-x-4">
                <li>
                  <a href="">
                    <RiInstagramLine size={28} style={{ strokeWidth: 0 }} />
                  </a>
                </li>
                <li>
                  <a href="">
                    <RiGithubLine size={28} style={{ strokeWidth: 0 }} />
                  </a>
                </li>
              </ul>
            </div>
            <span className="text-sm mt-10 text-zinc-700">
              © 2025 Proto (iliyazandi). All rights reserved by Themepure.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
