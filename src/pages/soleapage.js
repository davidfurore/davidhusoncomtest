import React from "react";

import still1 from "../img/soleagallery/solea1.jpg";
import still2 from "../img/soleagallery/solea2.jpg";
import still3 from "../img/soleagallery/solea3.jpg";
import still4 from "../img/soleagallery/solea4.jpg";
import still5 from "../img/soleagallery/solea5.jpg";
import still6 from "../img/soleagallery/solea6.jpg";
import "./soleapage.css";

export default function SoleaPage() {
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
                <div className="gallery-item">
                  <img src={still6} />
                </div>
                <div className="gallery-item header-item soleaheader">
                  <h5 className="text-center m-5 mx-3 animate__animated animate__fadeInRight display-5">
                    Soleá
                  </h5>
                </div>
                <div className="gallery-item header-item">
                  <h5 className="text-center m-5 mx-3 animate__animated animate__fadeInRight display-5">
                    a flamenco fusion dance film
                  </h5>
                </div>
                <div className="gallery-item">
                  <img src={still1} />
                </div>
                <div className="gallery-item">
                  <img src={still4} />
                </div>
                <div className="gallery-item subheader-item">
                  <h5 className="text-center m-5 mx-3 animate__animated animate__fadeInRight gildafont">
                    <p>
                      Soleá (2023) is a short dance film about a young woman
                      looking for love within the superficial hookup culture of
                      Amsterdam. One day she is captivated by an old flamenco
                      rhythm, the “Soleá”, that loosely translates to
                      “loneliness”. This rhythm sparks a series of events that
                      take her and a mysterious stranger on a journey through
                      flamenco, the city of Amsterdam, and her emotions.
                    </p>
                  </h5>
                </div>

                <div className="gallery-item subheader-item">
                  <div className="animate__animated animate__fadeInLeft my-5">
                    <p>
                      Production by Merel van Marken Lichtenbelt & David Huson
                      Music by David Huson Directed by Mano Beeftink
                      Cinematography by Niels Lokhorst Choreography by Merel van
                      Marken Lichtenbelt & Henry Labrada Rodriguez Set
                      photographer by Jasper Koekoek
                    </p>
                  </div>
                </div>
                <div className="gallery-item">
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
