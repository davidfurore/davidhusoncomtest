import React from "react";
import spotifylogo from "../img/spotifylogogreensmall.png";
import applelogo from "../img/applelogo.png";

export default function SpotifyApple() {
  return (
    <>
      <div className="row my-5 px-5">
        <div className="col">
          <a href="" target="_blank">
            <img className="img-fluid w-75" src={applelogo} />
          </a>
        </div>
        <div className="col">
          <a href="" target="_blank">
            <img className="img-fluid w-75" src={spotifylogo} />
          </a>
        </div>
      </div>
    </>
  );
}
