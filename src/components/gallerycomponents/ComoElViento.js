import React, { useEffect } from "react";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import comoelvientocover from "../../img/comoelviento.jpg";
import "./comoelviento.css";

export default function ComoElViento() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [isBouncingSpotify, setIsBouncingSpotify] = useState(false);
  const [isBouncingApple, setIsBouncingApple] = useState(false);
  const [isBouncingYoutube, setIsBouncingYoutube] = useState(false);

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
        className="modalstyle d-flex justify-content-center "
        show={show}
        onHide={handleClose}
      >
        <Modal.Header className="border-0" closeButton></Modal.Header>
        <Modal.Body>
          <div className="container ">
            <div className="row justify-content-center m-auto ">
              <div className="col-12 col-md-6 text-start">
                <h5 className="display-6">
                  <b>Como El Viento</b>
                </h5>
                <p>
                  A flamenco x jazz x drill project by flamenco guitarist David
                  Huson & trumpet player Antonio Moreno Glazkov
                </p>

                <i>
                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;Trumpet: Antonio Moreno Glazkov{" "}
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;Guitars & production: David Huson{" "}
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;Vocals on track 1: Emma Segura
                  </p>
                </i>
                <p>Released November 24, 2022</p>
                <p>
                  <h3>
                    <span
                      className={`icon ${
                        isBouncingSpotify
                          ? "animate__animated animate__fadeIn"
                          : ""
                      }`}
                      onMouseEnter={() => setIsBouncingSpotify(true)}
                      onMouseLeave={() =>
                        setTimeout(() => setIsBouncingSpotify(false), 1000)
                      }
                    >
                      <a
                        href="https://open.spotify.com/album/6lgLW1Kg42WEnpBcBcxrDe?si=ijpVqA1YSUaPJhuIY7E_eQ"
                        target="_blank"
                        class="link-dark"
                      >
                        <i class="bi me-3 bi-spotify bi-2x"></i>
                      </a>
                    </span>
                    <span
                      className={`icon ${
                        isBouncingApple
                          ? "animate__animated animate__fadeIn"
                          : ""
                      }`}
                      onMouseEnter={() => setIsBouncingApple(true)}
                      onMouseLeave={() =>
                        setTimeout(() => setIsBouncingApple(false), 1000)
                      }
                    >
                      <a
                        href="https://music.apple.com/nl/album/como-el-viento-single/1653900342"
                        target="_blank"
                        class="link-dark"
                      >
                        <i class="bi me-3 bi-apple bi-2x"></i>
                      </a>
                    </span>
                    <span
                      className={`icon ${
                        isBouncingYoutube
                          ? "animate__animated animate__fadeIn"
                          : ""
                      }`}
                      onMouseEnter={() => setIsBouncingYoutube(true)}
                      onMouseLeave={() =>
                        setTimeout(() => setIsBouncingYoutube(false), 1000)
                      }
                    >
                      <a
                        href="https://www.youtube.com/watch?v=DlORO7Z-GbU"
                        target="_blank"
                        class="link-dark"
                      >
                        <i class="bi me-3 bi-youtube bi-2x"></i>
                      </a>
                    </span>
                  </h3>
                </p>
              </div>

              <div className="col-12 col-md-6 text-center  ">
                <iframe
                  style={{ border: "0", width: "300px", height: "300px" }}
                  src="https://bandcamp.com/EmbeddedPlayer/album=399467419/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"
                  seamless
                >
                  <a href="https://davidhuson.bandcamp.com/album/como-el-viento">
                    Como El Viento by David Huson, Antonio Moreno Glazkov
                  </a>
                </iframe>
                {/* <img className="img-fluid" src={comoelvientocover}></img> */}
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <div role="button" onClick={handleShow}>
        <img
          className="rounded float-start img-thumbnail grow"
          src={comoelvientocover}
          alt="..."
        />
      </div>
    </>
  );
}
