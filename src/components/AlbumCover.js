import React, { useState } from "react";

import albumcover from "../img/albumcover.jpg";
import albumback from "../img/albumback.jpg";
import { a } from "@react-spring/web";
import { useSpring, animated } from "@react-spring/web";

const AlbumCover = () => {
  const [flipped, set] = useState(false);

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(90px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  const cardStyles = {
    position: "absolute",
    // maxWidth: "500px",
    // maxHeight: "500px",
    width: "40%",
    height: "40%",
    cursor: "pointer",

    willChange: "transform, opacity",
  };

  const frontBackStyles = {
    backgroundSize: "cover",
  };

  const backStyles = {
    backgroundImage: `url(${albumback})`,
  };

  const frontStyles = {
    backgroundImage: `url(${albumcover})`,
    transform: "rotateX(180deg)",
  };

  const containerStyles = {
    display: "flex",
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
  };

  return (
    <div
      style={Object.assign({}, containerStyles)}
      onClick={() => set((state) => !state)}
    >
      <a.div
        style={Object.assign({}, cardStyles, frontBackStyles, backStyles, {
          opacity: opacity.to((o) => 1 - o),
          transform,
        })}
      />
      <a.div
        style={Object.assign({}, cardStyles, frontBackStyles, frontStyles, {
          opacity,
          transform,
        })}
      />
    </div>
  );

  // <div className="container vibe">
  //   <animated.div
  //     style={{
  //       ...fade,
  //       //   width: "100px",
  //       //   height: "100px",
  //       //   backgroundColor: "red",
  //       //   borderRadius: "50%",
  //     }}
  //     onClick={() => set((state) => !state)}
  //   >
  //     <img src={albumcover} className="albumimage" />
  //   </animated.div>
  // </div>
};

export default AlbumCover;
