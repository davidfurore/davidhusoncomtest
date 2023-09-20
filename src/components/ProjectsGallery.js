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
        <div className="row m-5">
          <div className="col-sm">
            <SoleaFilm />
          </div>
          <div className="col-sm">
            <ComoElViento />
          </div>
          <div className="col-sm">
            <OmarmFilm />
          </div>
        </div>
      </div>
    </>
  );
}
