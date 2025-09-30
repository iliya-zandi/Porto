/**
 * Hero Component
 * Displays the main hero section with a thumbnail image, title,
 * newsletter subscription form, and a short description.
 */

import Thumbnail from "./assets/images/thumbnail.jpg";
import LineGrid from "./assets/images/line-grid.png";
import Button from "./components/Button";

/**
 * Main Hero component
 */
const Hero: React.FC = () => {
  return (
    <div className="app-hero relative py-8">
      <div className="container relative">
        {/* Background grid image */}
        <img src={LineGrid} className="absolute top-0 -z-10" />

        {/* Main thumbnail image */}
        <div className="image-box overflow-hidden inline-block w-full lg:w-auto">
          <img src={Thumbnail} className="max-w-full h-auto rounded-3xl" />
        </div>

        {/* Hero title */}
        <div className="title-box my-10">
          <h2 className="font-semibold text-zinc-900 leading-[1.2] text-3xl sm:text-4xl lg:text-[54px]">
            <span>Driven by imagination and innovation,</span>
            <br />
            <span>I’m growing as a web designer every day.</span>
          </h2>
        </div>

        {/* Newsletter and description section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-baseline justify-between gap-y-8 lg:gap-y-0 lg:gap-x-12">
          {/* Newsletter subscription form */}
          <section className="w-full lg:w-auto">
            <h5 className="text-zinc-700 font-normal leading-7 text-base lg:text-lg">
              <span>Be the first to get it for only $5 just leave</span>
              <br />
              <span>your email below!</span>
            </h5>
            <form method="post" className="newsletter-header mt-6">
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <input
                  type="email"
                  placeholder="Email address"
                  className="border border-zinc-400/50 rounded-full px-6 lg:px-8 py-3 font-normal placeholder:text-zinc-600 text-zinc-800 w-full sm:w-auto min-w-xs"
                />
                <Button className="ml-0 sm:ml-4 w-full sm:w-auto" type="submit">
                  <span>Subscribe</span>
                </Button>
              </div>
            </form>
          </section>

          {/* Short description */}
          <section className="max-w-lg w-full">
            <p className="text-zinc-700 font-normal text-base lg:text-lg leading-7 lg:leading-9">
              As a freelancer, I’m driven by a passion for crafting eye-catching
              designs that leave a lasting impact.
            </p>
            <span className="text-zinc-700 font-light block mt-5 leading-7 lg:leading-9 text-sm lg:text-base">
              With every project, I aim to blend creativity.
            </span>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Hero;
/**
 * Exporting Hero component as default.
 */
