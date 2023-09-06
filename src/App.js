import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./App.css";
import albumcover from "./img/albumcover.jpg";
import spotifylogo from "./img/spotifylogogreensmall.png";
import applelogo from "./img/applelogo.png";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import BackgroundAnimation from "./components/BackgroundAnimation";
import AlbumCover from "./components/AlbumCover";

//
// colors used for background: #FAF9F6 ("pearl")
// for layer 1: #F9F6EE ("bone")
// for laye 2: #FAF9F6 ("offwhite")
// Little helpers ...
const url = (name, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;

export default function App() {
  const parallax = useRef(null);
  return (
    <div className="parallaxcontainer">
      <BackgroundAnimation />
      <Parallax
        style={{ background: "#00ff0000", opacity: "1" }}
        ref={parallax}
        pages={3}
      >
        <ParallaxLayer offset={1} speed={1} className="layer1" />
        <ParallaxLayer offset={2} speed={1} className="layer2" />

        <ParallaxLayer
          offset={0}
          speed={0.3}
          sticky={{ start: 0, end: 3 }}
          style={{
            display: "flex",
            alignItems: "top",
            justifyContent: "left",
            pointerEvents: "none",
          }}
        >
          <div className="container pt-2">
            <p>David Huson</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0.3}
          style={{
            backgroundSize: "80%",
            backgroundPosition: "center",
            backgroundImage: url("clients", true),
          }}
        />

        <ParallaxLayer
          offset={0}
          speed={4}
          // onClick={() => parallax.current.scrollTo(1)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "left",
            marginLeft: "10%",
            width: "40%",
          }}
        >
          <div className="container p-2">
            <h1 className="display-6">let me bend it for you</h1>
            <p>a brand-new EP full of genre-bending spanish guitar music</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.2}
          speed={6}
          // onClick={() => parallax.current.scrollTo(1)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "8%",
          }}
        >
          <div className="container">
            <a href="spotify">
              <img src={spotifylogo} className="logoimage" />
            </a>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.2}
          speed={5}
          // onClick={() => parallax.current.scrollTo(1)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "20%",
          }}
        >
          <div className="container">
            <a href="apple">
              <img src={applelogo} className="logoimage " />
            </a>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.1}
          speed={2}
          // onClick={() => parallax.current.scrollTo(1)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "left",
            marginLeft: "70%",
          }}
        >
          <AlbumCover classname="posielate" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={0.1}
          // onClick={() => parallax.current.scrollTo(2)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={url("bash")} style={{ width: "40%" }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          // onClick={() => parallax.current.scrollTo(0)}
        >
          <img src={url("clients-main")} style={{ width: "40%" }} />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
