/**
 * FeaturedItem Component
 * Represents a single featured project or work item with image, title, year, and optional link.
 */

import React from "react";

/**
 * Props type for FeaturedItem component
 */
type FeaturedItemProps = {
  image: string; // Image URL of the featured item
  title: string; // Title of the featured item
  year: string; // Year of the project or work
  link?: string; // Optional link URL; defaults to "/"
};

/**
 * FeaturedItem component
 * Renders an article with a clickable image, title, and year.
 */
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
/**
 * Exporting FeaturedItem as default for use in featured work sections.
 */
