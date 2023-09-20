import React, { useRef, useEffect } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./App.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import albumcover from "./img/albumcover.jpg";
import spotifylogo from "./img/spotifylogogreensmall.png";
import applelogo from "./img/applelogo.png";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import BackgroundAnimation from "./components/BackgroundAnimation";
import AlbumCover from "./components/AlbumCover";
import ProjectsGallery from "./components/ProjectsGallery";
import About from "./components/About";
import comoelvientocover from "./img/comoelviento.jpg";
import Modal from "react-bootstrap/Modal";
import SpotifyApple from "./components/SpotifyApple";
import Button from "react-bootstrap/Button";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import "animate.css";
import "./fonts/fonts.css";

//
// colors used for background: #FAF9F6 ("pearl")
// for layer 1: #F9F6EE ("bone")
// for laye 2: #FAF9F6 ("offwhite")
// Little helpers ...

export default function App() {
  const homeRef = useRef(null);
  const portfolioRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    const moveGradient = (event) => {
      const winWidth = window.innerWidth;
      const winHeight = window.innerHeight;
      const mouseX = Math.round((event.pageX / winWidth) * 100);
      const mouseY = Math.round((event.pageY / winHeight) * 100);

      if (homeRef) {
        homeRef.current.style.setProperty("--mouse-x", mouseX.toString() + "%");
        homeRef.current.style.setProperty("--mouse-y", mouseY.toString() + "%");
      }
    };

    document.addEventListener("mousemove", moveGradient);

    return function cleanup() {
      document.removeEventListener("mousemove", moveGradient);
    };
  }, [homeRef, portfolioRef, aboutRef]);

  return (
    <>
      <div
        className="
     parentcontainer 
     "
      >
        <main ref={homeRef}>
          <div className="content snapstart animate__animated animate__fadeIn homebackground">
            <h4 className="content-header p-4" id="home">
              David Huson
            </h4>
            <div className="container">
              <div className="container content d-flex align-items-center justify-content-center">
                <div class="row mx-auto text-center">
                  <div class="col-12 col-md-6 ">
                    <AlbumCover />
                  </div>
                  <div class="col-12 col-md-6 animate__animated animate__fadeIn">
                    <h1 className="display-6">let me bend it for you</h1>
                    <p>
                      a brand-new EP full of genre-bending spanish guitar music
                    </p>
                    <div class="container">
                      <SpotifyApple />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="content snapstart portfoliobackground"
            ref={portfolioRef}
          >
            <h4 className="content-header p-4 text-white" id="portfolio">
              Portfolio
            </h4>
            <div className="container">
              <ProjectsGallery />
            </div>
          </div>

          <div className="content snapstart aboutbackground" ref={aboutRef}>
            <h4 className="content-header p-4" id="about">
              About
            </h4>
            <div className="container content d-flex align-items-center justify-content-center">
              <About />
            </div>
          </div>
        </main>

        <BackgroundAnimation />
      </div>
    </>
  );
}
