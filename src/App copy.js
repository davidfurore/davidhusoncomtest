import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./App.css";
import albumcover from "./img/albumcover.jpg";
import spotifylogo from "./img/spotifylogogreensmall.png";
import applelogo from "./img/applelogo.png";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import BackgroundAnimation from "./components/BackgroundAnimation";
import AlbumCover from "./components/AlbumCover";
import ProjectsGallery from "./components/ProjectsGallery";
import comoelvientocover from "./img/comoelviento.jpg";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

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
    <>
      <div
        className="modal show"
        style={{ display: "block", position: "initial" }}
      ></div>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>

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
            sticky={{ start: 0, end: 0.8 }}
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
            offset={1}
            speed={0.3}
            sticky={{ start: 1, end: 1.8 }}
            style={{
              display: "flex",
              alignItems: "top",
              justifyContent: "left",
              pointerEvents: "none",
            }}
          >
            <div className="container pt-2">
              <p>Projects</p>
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={1}
            speed={0.3}
            sticky={{ start: 2, end: 2.8 }}
            style={{
              display: "flex",
              alignItems: "top",
              justifyContent: "left",
              pointerEvents: "none",
            }}
          >
            <div className="container pt-2">
              <p>About</p>
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
              marginLeft: "50%",
            }}
          >
            <AlbumCover />
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
            {/* <img src={url("bash")} style={{ width: "40%" }} /> */}
            {/* // cards grid */}
            <div className="container">
              <div className="row m-5">
                <div className="col-sm">
                  <a data-toggle="modal" data-target="#exampleModalCenter">
                    <img
                      className="rounded float-start img-thumbnail grow"
                      src={comoelvientocover}
                      alt="..."
                    />
                  </a>
                </div>
                <div className="col-sm">
                  <img
                    src={albumcover}
                    className="rounded float-start img-thumbnail grow"
                    alt="..."
                  />
                </div>
                <div className="col-sm">
                  <img
                    src={albumcover}
                    className="rounded float-start img-thumbnail grow"
                    alt="..."
                  />
                </div>
              </div>
            </div>
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
        {/* <!-- Modal --> */}
      </div>
    </>
  );
}
