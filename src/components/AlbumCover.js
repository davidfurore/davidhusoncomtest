import React, { useState } from "react";

import albumcover from "../img/albumcover.jpg";
import albumback from "../img/albumback.jpg";
import { a } from "@react-spring/web";
import { useSpring, animated } from "@react-spring/web";

const AlbumCover = () => {
  const [flipped, setFade] = useState(false);
  const [hover, setHover] = useState(false);

  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  const bounce = useSpring({
    from: {},
    to: {},
    config: {},
  });

  const cardStyles = {
    position: "absolute",
    maxWidth: "300px",
    maxHeight: "300px",
    width: "100%",
    height: "100%",
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
    <div className="container vibe">
      <animated.div
        style={{
          ...fade,
          maxWidth: "500px",
          maxWidth: "400px",
          marginRight: "50%",
          //   backgroundColor: "red",
          //   borderRadius: "50%",
        }}
        onClick={() => setFade((state) => !state)}
      >
        <div className="position-relative">
          <img src={albumcover} className="albumimage" />
        </div>
      </animated.div>
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
