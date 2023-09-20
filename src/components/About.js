import React from "react";
import "./about.css";
import guitarprofile from "../img/profiledavid2.jpg";

export default function About() {
  return (
    <>
      <div className="row mx-5 text-center">
        <div className="col-12 col-md-6 typewriter">
          <p className="display-6">What is this about?</p>
          <p>
            Hola! I'm a guitarist, composer and producer. I create music, film
            and art projects in which I combine my background in flamenco guitar
            with a wide variety of other genres, including Hip-Hop, Electronic
            and Latin-American music. In addition, I compose and produce music
            for short films and documentaries.
          </p>
          <div className="h4 my-3">
            <ul class="list-inline ">
              <li class="list-inline-item zoom-in">
                <a
                  className="link-dark"
                  href="https://www.youtube.com/@davidhuson/videos"
                  target="_blank"
                >
                  <i class="bi bi-youtube m-3"></i>
                </a>
              </li>
              <li class="list-inline-item zoom-in">
                <a
                  className="link-dark"
                  href="https://www.instagram.com/davidhuson_/"
                  target="_blank"
                >
                  <i class="bi bi-instagram m-3"></i>
                </a>
              </li>
              <li class="list-inline-item zoom-in">
                <a
                  className="link-dark"
                  href="https://open.spotify.com/artist/3WtmEcFEABtGaCyfoyIWEA?si=wTDpLLNBSmWHKZAnCRh0MQ"
                  target="_blank"
                >
                  <i class="bi bi-spotify m-3"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-12 col-md-6  ">
          <div className="container">
            <img
              className="img-fluid rounded mx-auto d-block w-50"
              src={guitarprofile}
            />
          </div>
        </div>
      </div>
    </>
  );
}
