import React from "react";
import { useEffect, useState, useRef } from "react";
import GalleryComoElViento from "../components/GalleryComoElViento";
import "./soleapage.css";

export default function ComoElVientoPage() {
  const containerRef = useRef();
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(containerRef.current.scrollTop);
    };
    const container = containerRef.current;
    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="" id="grained">
      <div className="parentcontainer soleabackground " ref={containerRef}>
        <div className="backbutton" style={{ top: scrollPosition }}>
          <button type="button" class="btn btn-link">
            <a className="link-dark" href="/">
              <i class="bi bi-chevron-left"></i>
            </a>
          </button>
        </div>
        <div className="soleacontainer position-relative">
          <div className="row justify-content-center">
            <div className="container p-0 m-0">
              <GalleryComoElViento scrollPosition={scrollPosition} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
