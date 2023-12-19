import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const LazyImage = ({ image }) => (
  <div>
    <LazyLoadImage
      alt={image.alt}
      effect="blur"
      height={image.height}
      src={image.src} // use normal <img> attributes as props
      width={image.width}
    />
  </div>
);

export default LazyImage;
