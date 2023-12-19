import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../component/Navbar";
import "./Detail.css";
import tt from "../../assets/thumble.png";

function Detailhijaiyah() {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "50px",
  };

  const videoContainerStyle = {
    marginBottom: "20px",
  };

  return (
    <div className="container" style={containerStyle}>
      <div>
        <h2 style={{ textAlign: "center" }}>Judul</h2>
      </div>
      <div className="video-container" style={videoContainerStyle}>
        <video width="764" height="430" controls>
          <source src="URL_VIDEO" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div>
        <h3 style={{ textAlign: "center" }}>Selanjutnya</h3>
        <ul className="video-list">
          <li>
            <div className="video-item">
              <img src={tt} alt="Thumbnail Video 1" className="thumbnail" />
              <span className="video-title">Judul Video 1</span>
            </div>
          </li>
          <li>
            <div className="video-item">
              <img src={tt} alt="Thumbnail Video 2" className="thumbnail" />
              <span className="video-title">Judul Video 2</span>
            </div>
          </li>
        </ul>
      </div>
      <div className="centered-containerr">
        <Link to="/pengenalan" className="button-containerr">
          <div>Selesai</div>
        </Link>
      </div>
    </div>
  );
}

export default Detailhijaiyah;
