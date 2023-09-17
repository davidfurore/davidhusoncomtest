import React from "react";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import comoelvientocover from "../../img/comoelviento.jpg";
import "./comoelviento.css";

export default function ComoElViento() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal
        className="modalstyle d-flex justify-content-center "
        show={show}
        onHide={handleClose}
      >
        <Modal.Header className="border-0" closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container h-100">
            <div className="row justify-content-center h-100">
              <div className="col-12 col-md-6 text-start px-3">
                <p>
                  A flamenco x jazz x drill project by flamenco guitarist David
                  Huson & trumpet player Antonio Moreno Glazkov
                </p>

                <p>
                  Trumpet: Antonio Moreno Glazkov <br />
                  Guitars & production: David Huson <br />
                  Vocals on track 1: Emma Segura
                </p>
                <p>Released November 24, 2022</p>
                <p>
                  <i class="bi bi-spotify"></i>
                </p>
              </div>

              <div className="col-12 col-md-6 text-center px-3">
                <iframe
                  style={{ border: "0", width: "100%", height: "300px" }}
                  src="https://bandcamp.com/EmbeddedPlayer/album=399467419/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"
                  seamless
                >
                  <a href="https://davidhuson.bandcamp.com/album/como-el-viento">
                    Como El Viento by David Huson, Antonio Moreno Glazkov
                  </a>
                </iframe>
                {/* <img className="img-fluid" src={comoelvientocover}></img> */}
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <div role="button" onClick={handleShow}>
        <img
          className="rounded float-start img-thumbnail grow"
          src={comoelvientocover}
          alt="..."
        />
      </div>
    </>
  );
}
