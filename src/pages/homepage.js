import React, { useRef, useEffect } from "react";
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import BackgroundAnimation from "../components/BackgroundAnimation";
import AlbumCover from "../components/AlbumCover";
import ProjectsGallery from "../components/ProjectsGallery";
import About from "../components/About";

import SpotifyApple from "../components/SpotifyApple";
import fan2 from "../img/fan2.png";

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
import "../fonts/fonts.css";

//
// colors used for background: #FAF9F6 ("pearl")
// for layer 1: #F9F6EE ("bone")
// for laye 2: #FAF9F6 ("offwhite")
// Little helpers ...

export default function HomePage() {
  /////////////////////////////////////////////////////////////
  // grained.js code

  (function (window, doc) {
    "use strict";

    function grained(ele, opt) {
      var element = null,
        elementId = null,
        selectorElement = null;

      if (typeof ele === "string") {
        element = doc.getElementById(ele.split("#")[1]);
      }

      if (!element) {
        console.error("Grained: cannot find the element with id " + ele);
        return;
      } else {
        elementId = element.id;
      }

      //set style for parent
      if (element.style.position !== "absolute") {
        element.style.position = "relative";
      }
      element.style.overflow = "hidden";

      var prefixes = ["", "-moz-", "-o-animation-", "-webkit-", "-ms-"];

      //default option values
      var options = {
        animate: true,
        patternWidth: 100,
        patternHeight: 100,
        grainOpacity: 0.1,
        grainDensity: 1,
        grainWidth: 1,
        grainHeight: 1,
        grainChaos: 0.5,
        grainSpeed: 20,
      };

      Object.keys(opt).forEach(function (key) {
        options[key] = opt[key];
      });

      var generateNoise = function () {
        var canvas = doc.createElement("canvas");
        var ctx = canvas.getContext("2d");
        canvas.width = options.patternWidth;
        canvas.height = options.patternHeight;
        for (var w = 0; w < options.patternWidth; w += options.grainDensity) {
          for (
            var h = 0;
            h < options.patternHeight;
            h += options.grainDensity
          ) {
            var rgb = (Math.random() * 256) | 0;
            ctx.fillStyle =
              "rgba(" + [rgb, rgb, rgb, options.grainOpacity].join() + ")";
            ctx.fillRect(w, h, options.grainWidth, options.grainHeight);
          }
        }
        return canvas.toDataURL("image/png");
      };

      function addCSSRule(sheet, selector, rules, index) {
        var ins = "";
        if (selector.length) {
          ins = selector + "{" + rules + "}";
        } else {
          ins = rules;
        }

        if ("insertRule" in sheet) {
          sheet.insertRule(ins, index);
        } else if ("addRule" in sheet) {
          sheet.addRule(selector, rules, index);
        }
      }

      var noise = generateNoise();

      var animation = "",
        keyFrames = [
          "0%:-10%,10%",
          "10%:-25%,0%",
          "20%:-30%,10%",
          "30%:-30%,30%",
          "40%::-20%,20%",
          "50%:-15%,10%",
          "60%:-20%,20%",
          "70%:-5%,20%",
          "80%:-25%,5%",
          "90%:-30%,25%",
          "100%:-10%,10%",
        ];

      var pre = prefixes.length;
      while (pre--) {
        animation += "@" + prefixes[pre] + "keyframes grained{";
        for (var key = 0; key < keyFrames.length; key++) {
          var keyVal = keyFrames[key].split(":");
          animation += keyVal[0] + "{";
          animation +=
            prefixes[pre] + "transform:translate(" + keyVal[1] + ");";
          animation += "}";
        }
        animation += "}";
      }

      //add animation keyframe
      var animationAdded = doc.getElementById("grained-animation");
      if (animationAdded) {
        animationAdded.parentElement.removeChild(animationAdded);
      }
      var style = doc.createElement("style");
      style.type = "text/css";
      style.id = "grained-animation";
      style.innerHTML = animation;
      doc.body.appendChild(style);

      //add custimozed style
      var styleAdded = doc.getElementById("grained-animation-" + elementId);
      if (styleAdded) {
        styleAdded.parentElement.removeChild(styleAdded);
      }

      style = doc.createElement("style");
      style.type = "text/css";
      style.id = "grained-animation-" + elementId;
      doc.body.appendChild(style);

      var rule = "background-image: url(" + noise + ");";
      rule +=
        'position: absolute;content: "";height: 300%;width: 300%;left: -100%;top: -100%;';
      pre = prefixes.length;
      if (options.animate) {
        while (pre--) {
          rule += prefixes[pre] + "animation-name:grained;";
          rule += prefixes[pre] + "animation-iteration-count: infinite;";
          rule +=
            prefixes[pre] + "animation-duration: " + options.grainChaos + "s;";
          rule +=
            prefixes[pre] +
            "animation-timing-function: steps(" +
            options.grainSpeed +
            ", end);";
        }
      }

      //selecter element to add grains
      selectorElement = "#" + elementId + "::before";

      addCSSRule(style.sheet, selectorElement, rule);
    }
    window.grained = grained;

    //END
  })(window, document);

  useEffect(() => {
    window.grained("#grained", options);
  }, []);

  var options = {
    animate: true,
    patternWidth: 300,
    patternHeight: 300,
    grainOpacity: 0.089,
    grainDensity: 2,
    grainWidth: 1,
    grainHeight: 1,
    grainChaos: 0.5,
    grainSpeed: 20,
  };

  ///////////////////////////////////////////////////////////
  const homeRef = useRef(null);
  const portfolioRef = useRef(null);
  const aboutRef = useRef(null);

  // useEffect(() => {
  //   const moveGradient = (event) => {
  //     const winWidth = window.innerWidth;
  //     const winHeight = window.innerHeight;
  //     const mouseX = Math.round((event.pageX / winWidth) * 100);
  //     const mouseY = Math.round((event.pageY / winHeight) * 100);

  //     if (homeRef) {
  //       homeRef.current.style.setProperty("--mouse-x", mouseX.toString() + "%");
  //       homeRef.current.style.setProperty("--mouse-y", mouseY.toString() + "%");
  //     }
  //   };

  //   document.addEventListener("mousemove", moveGradient);

  //   return function cleanup() {
  //     document.removeEventListener("mousemove", moveGradient);
  //   };
  // }, [homeRef, portfolioRef, aboutRef]);

  return (
    <>
      <div className="" id="grained">
        <div
          className="
             parentcontainer 
             "
        >
          <main ref={homeRef}>
            <div className="snapstart animate__animated animate__fadeIn homebackground">
              <h4 className="content-header sticky-top p-4" id="home">
                <div className="d-flex justify-content-between align-items-center mx-3">
                  <div className="animate__animated animate__slideInDown">
                    <img className="headerimg" src={fan2} />
                  </div>
                  <div className="animate__animated animate__slideInDown">
                    David Huson
                  </div>
                </div>
              </h4>

              <div className="container d-flex align-items-center justify-content-center">
                <div class="row mx-auto text-center mt-5">
                  <div class="col-12 col-md-6 mb-5">
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
            <div className="snapstart portfoliobackground" ref={portfolioRef}>
              <h4 className="content-header sticky-top p-4 " id="portfolio">
                Portfolio
              </h4>

              <div className="container">
                <ProjectsGallery />
              </div>
            </div>
            <div
              className="container-fluid snapstart aboutbackground"
              ref={aboutRef}
            >
              <h4 className="content-header sticky-top p-4" id="about">
                About
              </h4>
              <div className="container d-flex align-items-center justify-content-center">
                <About />
              </div>
            </div>
          </main>
          <BackgroundAnimation />
        </div>
      </div>
    </>
  );
}
