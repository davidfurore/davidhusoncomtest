import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./soleaheader.css";
import laveletateaser from "../img/video/laveletateaser.mp4";

export default function ComoElVientoHeader() {
  return (
    <>
      <div className="backgroundcontainer position-relative">
        <div className="videocontainer">
          <video loop muted controls autoPlay>
            <source src={laveletateaser} type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
}
