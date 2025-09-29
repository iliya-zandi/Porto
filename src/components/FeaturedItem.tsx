import React from "react";

type FeaturedItemProps = {
  image: string;
  title: string;
  year: string;
  link?: string;
};

const FeaturedItem: React.FC<FeaturedItemProps> = ({
  image,
  title,
  year,
  link = "/",
}) => {
  return (
    <article className="featured-item">
      <div className="inline-block">
        <a href={link} className="block">
          <img src={image} className="max-w-full overflow-hidden rounded-4xl" />
        </a>
        <div className="flex items-center justify-between py-6 px-2">
          <a href={link} className="text-zinc-800">
            <h4 className="text-2xl font-medium">{title}</h4>
          </a>
          <span className="text-lg font-normal">/{year}</span>
        </div>
      </div>
    </article>
  );
};

export default FeaturedItem;
