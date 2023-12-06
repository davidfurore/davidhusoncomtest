import React from "react";
import still1 from "../img/stills/still1.png";
import still2 from "../img/stills/still2.png";
import still3 from "../img/stills/still3.png";
import "./soleapage.css";

export default function SoleaPage() {
  return (
    <div className="" id="grained">
      <div
        className="
         parentcontainer soleabackground
         "
      >
        <div className="container">
          <div className="animate__animated animate__fadeInLeft mt-5">
            <button type="button " class="btn btn-link">
              <a className="link-dark" href="/">
                <i class="bi bi-chevron-left"></i>
              </a>
            </button>
          </div>
          <div className="row justify-content-center mb-5">
            <div className="col-12 col-md-6">
              <h5
                className="text-end mb-5 mx-3 animate__animated animate__fadeInRight display-1
             "
              >
                Soleá
              </h5>
              <div className="animate__animated animate__fadeInLeft mx-3">
                <ul>
                  <li>Short film, 2023</li>
                </ul>
                <ul>
                  <li>
                    Production by Merel van Marken Lichtenbelt & David Huson
                  </li>
                  <li>Directed by Mano Beeftink</li>
                  <li>Cinematography by Niels Lokhorst</li>
                  <li>
                    Choreography by Merel van Marken Lichtenbelt & Henry Labrada
                    Rodriguez
                  </li>
                  <li>Music by David Huson</li>
                  <li>Set photographer by Jasper Koekoek</li>
                </ul>
              </div>
            </div>
            <div className="container animate__animated animate__fadeIn mt-5">
              <div className="gallery">
                <div className="gallery-item">
                  <img src={still1} />
                </div>
                <div className="gallery-item">
                  <img src={still3} />
                </div>
                <div className="gallery-item">
                  <img src={still1} />
                </div>
                <div className="gallery-item">
                  <img src={still2} />
                </div>
                <div className="gallery-item">
                  <img src={still3} />
                </div>
                <div className="gallery-item">
                  <img src={still1} />
                </div>
                <div className="gallery-item">
                  <img src={still2} />
                </div>
                <div className="gallery-item">
                  <img src={still3} />
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
