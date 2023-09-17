import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import albumcover from "../img/albumcover.jpg";
import ComoElViento from "./gallerycomponents/ComoElViento";

export default function ProjectsGallery() {
  return (
    <>
      {/* //modals */}

      <div className="container">
        <div className="row m-5">
          <div className="col-sm">
            <ComoElViento />
          </div>
          <div className="col-sm">
            <img
              src={albumcover}
              className="rounded float-start img-thumbnail grow"
              alt="..."
            />
          </div>
          <div className="col-sm">
            <img
              src={albumcover}
              className="rounded float-start img-thumbnail grow"
              alt="..."
            />
          </div>
        </div>
      </div>
    </>
  );
}
