import React, { useEffect, useState } from "react";
import {
  LazyLoadImage,
  LazyLoadComponent,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import AOS from "aos";
import "aos/dist/aos.css";

import still1 from "../img/soleagallery/solea10.jpg";
import still1_low from "../img/soleagallery/solea1_low.jpg";
import still2 from "../img/soleagallery/solea7.jpg";
import still2_low from "../img/soleagallery/solea2_low.jpg";

import still4 from "../img/soleagallery/solea11.jpg";
import still4_low from "../img/soleagallery/solea4_low.jpg";

import still6 from "../img/soleagallery/solea8.jpg";
import still6_low from "../img/soleagallery/solea6_low.jpg";
function Gallery({ scrollPosition }) {
  useEffect(() => {
    AOS.init();
  });
  const [scrollPositionObj, setScrollPositionObj] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setScrollPositionObj((prevState) => ({ ...prevState, y: scrollPosition }));
  }, [scrollPosition]);

  return (
    <>
      <div className="gallery">
        <div
          data-aos="fade"
          data-aos-duration="2000"
          className="gallery-item long"
        >
          <LazyLoadImage
            alt={still6}
            effect="blur"
            placeholderSrc={still6_low}
            key={still6}
            scrollPosition={scrollPositionObj}
            src={still6}
            className="gallery-item long"
          />
        </div>
        <div
          data-aos="fade"
          data-aos-duration="2000"
          className="gallery-item header-item soleaheader"
        >
          <h5
            data-aos="zoom-in"
            data-aos-anchor-placement="top"
            className="text-center m-5 mx-3 display-5"
          >
            Soleá
          </h5>
        </div>
        <div className="gallery-item header-item">
          <h5 className="text-center m-5 mx-3 display-5">
            a flamenco fusion dance film
          </h5>
        </div>
        <div
          data-aos="fade"
          data-aos-duration="2000"
          data-aos-anchor-placement="top"
          className="gallery-item long"
        >
          <LazyLoadImage
            alt={still1}
            effect="blur"
            placeholderSrc={still1_low}
            key={still1}
            scrollPosition={scrollPositionObj}
            src={still1}
          />
        </div>
        <div className="gallery-item long">
          <LazyLoadImage
            alt={still4}
            effect="blur"
            placeholderSrc={still4_low}
            key={still4}
            scrollPosition={scrollPositionObj}
            src={still4}
          />
        </div>
        <div
          data-aos="fade"
          data-aos-duration="2000"
          className="gallery-item subheader-item"
        >
          <div className="text-start p-5 gildafont">
            {/* <p>
                      Soleá (2023) is a short dance film about a young woman
                      looking for love within the superficial hookup culture of
                      Amsterdam. One day she is captivated by an old flamenco
                      rhythm, the “Soleá”, that loosely translates to
                      “loneliness”. This rhythm sparks a series of events that
                      take her and a mysterious stranger on a journey through
                      flamenco, the city of Amsterdam, and her emotions.
                    </p> */}
            <p>
              Soleá (2023) is a short dance film about a young woman looking for
              love in Amsterdam. One day she is captivated by an old flamenco
              rhythm, the “Soleá”, that loosely translates to “loneliness”. This
              rhythm sparks a series of events that take her and a mysterious
              stranger on a journey through flamenco, the city of Amsterdam, and
              her emotions.
            </p>
          </div>
        </div>
        <div
          data-aos="fade"
          data-aos-duration="2000"
          className="gallery-item subheader-item"
        >
          <div className="text-start p-5 animate__animated animate__fadeInRight gildafont">
            <p>
              Production by{" "}
              <a
                href="https://www.merelvanmarkenlichtenbelt.com/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Merel van Marken Lichtenbelt{" "}
              </a>{" "}
              &{" "}
              <a
                href="https://www.instagram.com/davidhuson_/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                David Huson
              </a>
              <br />
              <br />
              Directed by
              <a
                href="https://manobeeftink.com/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Mano Beeftink
              </a>
              <br />
              <br />
              Music by Color grade by{" "}
              <a
                href="https://www.instagram.com/davidhuson_/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                David Huson
              </a>
              <br />
              Cinematography by{" "}
              <a
                href="https://nielslokhorst.com/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Niels Lokhorst
              </a>
              <br />
              Choreography by{" "}
              <a
                href="https://www.merelvanmarkenlichtenbelt.com/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Merel van Marken Lichtenbelt{" "}
              </a>{" "}
              &
              <a href="https://goyeska.com/" target="_blank" rel="noreferrer">
                {" "}
                Henry Labrada Rodriguez
              </a>
              <br />
              Color grade by{" "}
              <a
                href="https://www.instagram.com/coloriage_studio/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Luke Linssen{" "}
              </a>{" "}
              <br />
              <br />
              Set photographer by
              <a
                href="https://www.koekoekphoto.com/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Jasper Koekoek
              </a>
            </p>
          </div>
        </div>
        <div
          data-aos="fade"
          data-aos-duration="2000"
          className="gallery-item long"
        >
          <LazyLoadImage
            alt={still2}
            effect="blur"
            placeholderSrc={still2_low}
            key={still2}
            scrollPosition={scrollPositionObj}
            src={still2}
          />
        </div>
      </div>
    </>
  );
}

export default Gallery;
