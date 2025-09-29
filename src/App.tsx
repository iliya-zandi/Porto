import React from "react";
import { FiAlignCenter, FiSearch, FiMoon } from "react-icons/fi";
import LineGrid from "./assets/images/line-grid.png";
import Thumbnail from "./assets/images/thumbnail.jpg";

import Featured1 from "./assets/images/featured-1.jpg";
import Featured2 from "./assets/images/featured-2.jpg";
import Featured3 from "./assets/images/featured-3.jpg";
import Featured4 from "./assets/images/featured-4.jpg";

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
                    <button
                      className="px-8 py-3 ml-4 text-zinc-100 bg-zinc-950 rounded-3xl"
                      type="button"
                    >
                      <span>Subscribe</span>
                    </button>
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
            <a
              href=""
              className="bg-zinc-950 rounded-full text-zinc-200 font-medium text-center inline-block px-8 py-3.5"
            >
              View all Showcases
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
