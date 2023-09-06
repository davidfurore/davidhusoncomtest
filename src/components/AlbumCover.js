import React from "react";
import albumcover from "../img/albumcover.jpg";
import { useSpring, animated } from "@react-spring/web";

const AlbumCover = () => {
  return (
    <div className="container">
      <img src={albumcover} className="albumimage" />
    </div>
  );
};

export default AlbumCover;
