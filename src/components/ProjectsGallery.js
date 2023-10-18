import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import ComoElViento from "./gallerycomponents/ComoElViento";
import SoleaFilm from "./gallerycomponents/SoleaFilm";
import OmarmFilm from "./gallerycomponents/OmarmFilm";

export default function ProjectsGallery() {
  return (
    <>
      {/* //modals */}

      <div className="container">
        <div className="row ">
          <div className="col">
            <SoleaFilm />
          </div>
          <div className="col">
            <ComoElViento />
          </div>
          <div className="col">
            <OmarmFilm />
          </div>
        </div>
        <div className="row ">
          <div className="col">
            <SoleaFilm />
          </div>
          <div className="col">
            <ComoElViento />
          </div>
          <div className="col">
            <OmarmFilm />
          </div>
        </div>
      </div>
    </>
  );
}
