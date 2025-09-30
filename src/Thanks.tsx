import React from "react";
import LineGrid from "./assets/images/line-grid.png";
import { RiInstagramLine, RiGithubLine } from "react-icons/ri";
import Button from "./components/Button";

const Thanks = () => {
  return (
    <div className="relative py-16 block py-24 relative overflow-hidden">
      <div className="container mx-auto max-w-screen-xl relative">
        <img src={LineGrid} className="absolute top-0 -z-10 w-full" />
        <h3 className="text-zinc-950 text-center font-semibold text-5xl sm:text-6xl lg:text-9xl mb-12">
          Warm thanks!
        </h3>

        <div className="flex flex-col items-center gap-y-4">
          <h6 className="text-lg text-zinc-800 font-normal text-center">
            Have a beautiful and restful Sunday!
          </h6>

          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <Button className="order-2 w-full sm:w-auto" link="/">
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

          <span className="text-sm mt-10 text-zinc-700 text-center">
            © 2025 Proto (iliyazandi). All rights reserved by Themepure.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Thanks;
