import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./soleaheader.css";
import soleateaser from "../img/video/soleateaser.mp4";

export default function SoleaHeader() {
  return (
    <>
      <div className="backgroundcontainer position-relative">
        <div className="videocontainer">
          <video loop muted controls autoPlay>
            <source src={soleateaser} type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
}
