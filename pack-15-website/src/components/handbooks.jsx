import lionSrc from "../images/rank-lion.jpg";
import tigerSrc from "../images/rank-tiger.jpg";
import wolfSrc from "../images/rank-wolf.jpg";
import bearSrc from "../images/rank-bear.jpg";
import webelosSrc from "../images/rank-webelos.jpg";
import aolSrc from "../images/rank-aol.jpg";

const Handbooks = () => {
  return (
    <>
      <div
        className="subcontenttitle"
        style={{ paddingTop: "10px", paddingBottom: "10px" }}
      >
        Adventure Requirements
      </div>
      <div className="subcontent text-start">
        <ul style={{ paddingLeft: "100px", textAlign: "left" }}>
          <li>
            <div style={{ textAlign: "left", paddingTop: "50px" }}>
              <a
                href="https://www.scouting.org/programs/cub-scouts/adventures/lion/"
                target="_blank"
                rel="noreferrer"
                style={{ display: "inline-block" }}
              >
                <img
                  className="rankImg center-block"
                  src={lionSrc}
                  alt="Lion Cub"
                  style={{ display: "block", margin: "0 auto" }}
                />
                <div style={{ paddingBottom: "35px", textAlign: "center" }}>
                  Tiger
                </div>
              </a>
            </div>
          </li>
          <li>
            <div style={{ textAlign: "left" }}>
              <a
                href="https://www.scouting.org/programs/cub-scouts/adventures/tiger/"
                target="_blank"
                rel="noreferrer"
                style={{ display: "inline-block" }}
              >
                <img
                  className="rankImg center-block"
                  src={tigerSrc}
                  alt="Tiger Cub"
                  style={{ display: "block", margin: "0 auto" }}
                />
                <div style={{ paddingBottom: "35px", textAlign: "center" }}>
                  Tiger
                </div>
              </a>
            </div>
          </li>
          <li>
            <div style={{ textAlign: "left" }}>
              <a
                href="https://www.scouting.org/programs/cub-scouts/adventures/wolf/"
                target="_blank"
                rel="noreferrer"
                style={{ display: "inline-block" }}
              >
                <img
                  className="rankImg center-block"
                  src={wolfSrc}
                  alt="Wolf Cub"
                  style={{ display: "block", margin: "0 auto" }}
                />
                <div style={{ paddingBottom: "35px", textAlign: "center" }}>
                  Wolf
                </div>
              </a>
            </div>
          </li>
          <li>
            <div style={{ textAlign: "left" }}>
              <a
                href="https://www.scouting.org/programs/cub-scouts/adventures/bear/"
                target="_blank"
                rel="noreferrer"
                style={{ display: "inline-block" }}
              >
                <img
                  className="rankImg center-block"
                  src={bearSrc}
                  alt="Bear Cub"
                  style={{ display: "block", margin: "0 auto" }}
                />
                <div style={{ paddingBottom: "35px", textAlign: "center" }}>
                  Bear
                </div>
              </a>
            </div>
          </li>
          <li>
            <div style={{ textAlign: "left" }}>
              <a
                href="https://www.scouting.org/programs/cub-scouts/adventures/webelos/"
                target="_blank"
                rel="noreferrer"
                style={{ display: "inline-block", textAlign: "center" }}
              >
                <img
                  className="rankImg center-block"
                  src={webelosSrc}
                  alt="Webelo Scout"
                  style={{ display: "block", margin: "0 auto" }}
                />
                <div style={{ paddingBottom: "35px" }}>Webelos</div>
              </a>
            </div>
          </li>
          <li>
            <div style={{ textAlign: "left" }}>
              <a
                href="https://www.scouting.org/programs/cub-scouts/adventures/arrow-of-light/"
                target="_blank"
                rel="noreferrer"
                style={{ display: "inline-block" }}
              >
                <img
                  className="rankImg center-block"
                  src={aolSrc}
                  alt="AOL Scout"
                  style={{ display: "block", margin: "0 auto" }}
                />
                <div style={{ paddingBottom: "35px", textAlign: "center" }}>
                  Arrow of Light (AOL)
                </div>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Handbooks;
