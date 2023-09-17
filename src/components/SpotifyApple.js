import React from "react";
import spotifylogo from "../img/spotifylogogreensmall.png";
import applelogo from "../img/applelogo.png";

export default function SpotifyApple() {
  return (
    <>
      <div className="row w-75 my-5">
        <div className="col align">
          <img className="img-fluid" src={applelogo} />
        </div>
        <div className="col">
          <img className="img-fluid" src={spotifylogo} />
        </div>
      </div>
    </>
  );
}
