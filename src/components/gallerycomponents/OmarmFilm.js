import React, { useEffect } from "react";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import omarmcover from "../../img/omarmcover.webp";
import "./soleafilm.css";

export default function OmarmFilm() {
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
                  <b>Omarm</b>
                </h5>
                <p>Short dance film (2023)</p>

                <i>
                  <p>
                    <ul>
                      <li>Directed by Sara Kerklaan</li>
                      <li>Dance by Jiaxin Chen en Gaby Berger</li>
                      <li>Editing by Sara Kerklaan & Sikander Malik</li>
                      <li>Music by David Huson</li>
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
                        src={omarmcover}
                        text="First slide"
                        alt="omarm cover"
                      />
                    </Carousel.Item>
                    {/* <Carousel.Item>
                      <img src={still2} text="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={still3} text="Third slide" />
                    </Carousel.Item> */}
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
          src={omarmcover}
          alt="..."
        />
      </div>
    </>
  );
}
