import React, { useEffect, useState } from "react";
import "./albumcover.css";
import albumfront from "../img/frontcover_small.jpg";
import albumback from "../img/backcover_small.jpg";
import { a, useSpringRef } from "@react-spring/web";
import { useSpring, animated } from "@react-spring/web";

const AlbumCover = () => {
  const [flipped, setFlipped] = useState(false);
  const [hover, setHover] = useState(false);
  const [imageState, setImageState] = useState(true);

  const handleClick = () => {
    setImageState((prevState) => {
      return !prevState;
    });
  };
  const fadeRef = useSpringRef();

  useEffect(() => {
    fadeRef.start();
  }, [imageState]);

  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 2000 },
  });

  const bounce = useSpring({
    ref: fadeRef,
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
    backgroundImage: `url(${albumfront})`,
    transform: "rotateX(180deg)",
  };

  const containerStyles = {
    display: "flex",
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
  };

  return (
    <div className="container">
      <animated.div
        style={{
          ...fade,
          // maxWidth: "500px",
          // maxWidth: "400px",
          // marginRight: "50%",
          //   backgroundColor: "red",
          //   borderRadius: "50%",
        }}
        onClick={() => setFlipped((state) => !state)}
      >
        <div className="position-relative">
          <img
            src={imageState ? albumfront : albumback}
            className="albumimage grow2 rounded"
            onClick={handleClick}
          />
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
