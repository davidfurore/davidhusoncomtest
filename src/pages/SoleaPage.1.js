import React from "react";
import { useEffect } from "react";
import still1 from "../img/soleagallery/solea1.jpg";
import still1_low from "../img/soleagallery/solea1_low.jpg";
import still2 from "../img/soleagallery/solea2.jpg";
import still4 from "../img/soleagallery/solea4.jpg";
import still6 from "../img/soleagallery/solea6.jpg";
import AOS from "aos";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function SoleaPage() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="" id="grained">
      <div className="parentcontainer soleabackground">
        <div className="soleacontainer position-relative">
          {/* <img class="soleaimage w-100 h-100" src={still1}></img> */}
          <div className="animate__animated animate__fadeInLeft mt-5 position-absolute">
            <button type="button " class="btn btn-link">
              <a className="link-dark" href="/">
                <i class="bi bi-chevron-left"></i>
              </a>
            </button>
          </div>
          <div className="row justify-content-center mb-5">
            <div className="container animate__animated animate__fadeIn p-0 m-0">
              <div className="gallery">
                <div className="gallery-item long">
                  <LazyLoadImage
                    alt={still6}
                    effect="blur"
                    placeholderSrc={still1_low}
                    key={2}
                    scrollPosition={scrollPosition}
                    src={still6}
                  />
                </div>
                <div className="gallery-item header-item soleaheader">
                  <h5 className="text-center m-5 mx-3 animate__animated animate__fadeInRight display-5">
                    Soleá
                  </h5>
                </div>
                <div className="gallery-item header-item">
                  <h5 className="text-center m-5 mx-3 display-5">
                    a flamenco fusion dance film
                  </h5>
                </div>
                <div className="gallery-item long">
                  <LazyLoadImage
                    alt={still1}
                    effect="blur"
                    placeholderSrc={still1_low}
                    key={still1}
                    scrollPosition={scrollPosition}
                    src={still1}
                  />
                </div>
                <div className="gallery-item long">
                  <img src={still4} />
                </div>
                <div className="gallery-item subheader-item">
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
                      Soleá (2023) is a short dance film about a young woman
                      looking for love in Amsterdam. One day she is captivated
                      by an old flamenco rhythm, the “Soleá”, that loosely
                      translates to “loneliness”. This rhythm sparks a series of
                      events that take her and a mysterious stranger on a
                      journey through flamenco, the city of Amsterdam, and her
                      emotions.
                    </p>
                  </div>
                </div>

                <div className="gallery-item subheader-item">
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
                      & David Huson
                      <br />
                      <br />
                      Music by David Huson
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
                      <a
                        href="https://goyeska.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {" "}
                        Henry Labrada Rodriguez
                      </a>
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
                <div className="gallery-item long">
                  <img src={still2} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
