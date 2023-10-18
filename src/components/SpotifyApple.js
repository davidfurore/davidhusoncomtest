import React from "react";
import spotifylogo from "../img/spotifylogogreensmall.png";
import applelogo from "../img/applelogo.png";
import "./spotifyapple.css";

export default function SpotifyApple() {
  return (
    <>
      <div className="row m-3 mt-5">
        <div className="col">
          <a
            href="https://music.apple.com/nl/album/let-me-bend-it-for-you-ep/1705138058"
            target="_blank"
          >
            <img className="img-fluid w-75 zoom-in" src={applelogo} />
          </a>
        </div>
        <div className="col">
          <a
            href="https://open.spotify.com/album/3Vs1DcVKH9kGMKktfuqY7E?si=P1JVbmhxSM6wlE6hckK7nQ"
            target="_blank"
          >
            <img className="img-fluid w-75 zoom-in" src={spotifylogo} />
          </a>
        </div>
      </div>
    </>
  );
}
