import React, { useEffect } from "react";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import soleafilmcover from "../../img/soleasquare.jpg";
import "./soleafilm.css";

import still1 from "../../img/stills/still1.webp";
import still2 from "../../img/stills/still2.webp";
import still3 from "../../img/stills/still3.webp";

export default function SoleaFilm() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [, setIsBouncingSpotify] = useState(false);
  const [, setIsBouncingApple] = useState(false);
  const [, setIsBouncingYoutube] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsBouncingSpotify(true);
    }, 3000);
    setTimeout(() => {
      setIsBouncingSpotify(false);
    }, 3500);

    setTimeout(() => {
      setIsBouncingApple(true);
    }, 3100);
    setTimeout(() => {
      setIsBouncingApple(false);
    }, 3500);

    setTimeout(() => {
      setIsBouncingYoutube(true);
    }, 3200);
    setTimeout(() => {
      setIsBouncingYoutube(false);
    }, 3500);
  }, []);
  // const handleIconHover = () => {
  //   setIsBouncing(true);

  //   // Remove the bounce class after the animation completes
  //   setTimeout(() => {
  //     setIsBouncing(false);
  //   }, 1000); // Adjust the duration based on your animation's duration
  // };

  return (
    <>
      <Modal
        className="modalstyle d-flex justify-content-center"
        show={show}
        onHide={handleClose}
      >
        <Modal.Header className="border-0" closeButton></Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="row justify-content-center m-auto">
              <div className="col-12 col-md-6 text-start">
                <h5 className="display-6">
                  <b>Soleá</b>
                </h5>
                <p>Short film, premiere 7th of october 2023</p>

                <i>
                  <p>
                    <ul>
                      <li>
                        Production by Merel van Marken Lichtenbelt & David Huson
                      </li>
                      <li>Directed by Mano Beeftink</li>
                      <li>Cinematography by Niels Lokhorst</li>
                      <li>
                        Choreography by Merel van Marken Lichtenbelt & Henry
                        Labrada Rodriguez
                      </li>
                      <li>Music by David Huson</li>
                      <li>Set photographer by Jasper Koekoek</li>
                    </ul>
                  </p>
                </i>

                <p></p>
              </div>

              <div className="col-12 col-md-6 text-center">
                <div className="container">
                  <Carousel>
                    <Carousel.Item>
                      <img
                        src={still1}
                        text="First slide"
                        alt="solea still 1"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        src={still2}
                        text="Second slide"
                        alt="solea still 2"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        src={still3}
                        text="Third slide"
                        alt="solea still 3"
                      />
                    </Carousel.Item>
                  </Carousel>
                </div>
                {/* <img className="img-fluid" src={comoelvientocover}></img> */}
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <div role="button" onClick={handleShow}>
        <img
          className="rounded float-start img-thumbnail grow"
          src={soleafilmcover}
          alt="..."
        />
      </div>
    </>
  );
}
