import React, { useRef } from "react";
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
  return (
    <>
      <div
        className="
     parentcontainer"
      >
        <div className="snapstart animate__animated animate__fadeIn">
          <h4 className="content-header m-3 p-3" id="about">
            David Huson
          </h4>
        </div>

        <main>
          <div className="container content d-flex align-items-center justify-content-center">
            {/* <h1 className="content-header" id="home">
              home
            </h1> */}
            <div class="row mx-auto text-center">
              <div class="col-12 col-md-6 ">
                <AlbumCover />
              </div>
              <div class="col-12 col-md-6 animate__animated animate__fadeIn">
                <h1 className="display-6">let me bend it for you</h1>
                <p>a brand-new EP full of genre-bending spanish guitar music</p>
                <div class="container">
                  <SpotifyApple />
                </div>
              </div>
            </div>
          </div>
          <div className="content snapstart">
            <h4 className="content-header m-3 p-3" id="portfolio">
              Portfolio
            </h4>
            <div className="container">
              <ProjectsGallery />
            </div>
          </div>{" "}
          <div className="content snapstart">
            <h4 className="content-header m-3 p-3" id="about">
              About
            </h4>
          </div>
        </main>
        <BackgroundAnimation />
      </div>
    </>
  );
}
