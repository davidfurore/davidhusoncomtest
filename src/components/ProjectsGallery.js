import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import ComoElViento from "./gallerycomponents/ComoElViento";
import SoleaFilm from "./gallerycomponents/SoleaFilm";
import OmarmFilm from "./gallerycomponents/OmarmFilm";
import "./projectgallery.css";
import soleafilmcover from "../img/soleasquare.jpg";

export default function ProjectsGallery() {
  return (
    <>
      {/* //modals */}
      <div className="gallery-container">
        <div className="photo-gallery">
          <div className="photoitem">
            <SoleaFilm />
          </div>
          <div className="photoitem">
            <ComoElViento />
          </div>
          <div className="photoitem">
            <OmarmFilm />
          </div>

          <div className="photoitem">
            <SoleaFilm />
          </div>
          <div className="photoitem">
            <ComoElViento />
          </div>
          <div className="photoitem">
            <OmarmFilm />
          </div>

          <div className="photoitem">
            <SoleaFilm />
          </div>
          <div className="photoitem">
            <ComoElViento />
          </div>
          <div className="photoitem">
            <OmarmFilm />
          </div>
        </div>
      </div>
    </>
  );
}
