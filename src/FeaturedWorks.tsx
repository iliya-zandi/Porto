import React from "react";

import Featured1 from "./assets/images/featured-1.jpg";
import Featured2 from "./assets/images/featured-2.jpg";
import Featured3 from "./assets/images/featured-3.jpg";
import Featured4 from "./assets/images/featured-4.jpg";
import FeaturedItem from "./components/FeaturedItem";
import Button from "./components/Button";
const featuredData = [
  { image: Featured1, title: "Rando Honda", year: "2025", link: "/" },
  { image: Featured2, title: "Rando Honda", year: "2025", link: "/" },
  { image: Featured3, title: "Rando Honda", year: "2025", link: "/" },
  { image: Featured4, title: "Rando Honda", year: "2025", link: "/" },
];

const FeaturedWorks = () => {
  return (
    <div className="box">
      <div className="container mx-auto max-w-screen-xl">
        <h3 className="box-title text-4xl sm:text-5xl lg:text-9xl text-zinc-950 text-center font-medium mb-12">
          Featured work©
        </h3>

        <div className="featured-cards pt-6 pb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 justify-between gap-x-6 sm:gap-x-8 lg:gap-x-15 gap-y-5">
            {featuredData.map((item, index) => (
              <FeaturedItem
                key={index}
                image={item.image}
                title={item.title}
                year={item.year}
                link={item.link}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center">
          <Button className="px-8 py-3.5">View all Showcases</Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedWorks;
