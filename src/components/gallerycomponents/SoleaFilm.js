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
      <a href="/solea">
        <img className="grow3" src={soleafilmcover} alt="..." />
      </a>
    </>
  );
}
