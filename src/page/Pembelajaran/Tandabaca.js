import React from "react";
import { Link } from "react-router-dom";
import "./pembelajaran.css";
import Navbar from "../../component/Navbar";
import P1 from "../../assets/p1.png";
import P2 from "../../assets/p2.png"
import P3 from "../../assets/p3.png";
import P4 from "../../assets/p4.png";
import P5 from "../../assets/p5.png";
import P6 from "../../assets/p6.png";
import P7 from "../../assets/p7.png"
import P8 from "../../assets/p8.png"

function Tandabaca() {
  return (
    <div>
      <Navbar />
      <div className="container-pembelajaran">
        <h2 className="judul">Mari Mengenal Tanda Baca Dalam Huruf Hijaiyah</h2>
        <div className="containerv">
          <div className="materi">
            <div className="video">
              <Link to="/Tandabaca1">
                <img src={P1} alt="materiv" className="materiv" />
              </Link>
            </div>
            <div className="video">
              <Link to="/Tandabaca1">
                <img src={P2} alt="materiv" className="materiv" />
              </Link>
            </div>
            <div className="video">
              <Link to="/Tandabaca1">
                <img src={P3} alt="materiv" className="materiv" />
              </Link>
            </div>
            <div className="video">
              <Link to="/Tandabaca1">
                <img src={P4} alt="materiv" className="materiv" />
              </Link>
            </div>
            <div className="video">
              <Link to="/Tandabaca1">
                <img src={P5} alt="materiv" className="materiv" />
              </Link>
            </div>
            <div className="video">
              <Link to="/Tandabaca1">
                <img src={P6} alt="materiv" className="materiv" />
              </Link>
            </div>
          </div>
        </div>
        <div className="judul">
          <h2 className="judul">Penjelasan Materi</h2>
        </div>
        <div className="materip">
          <div className="videop">
            <img src={P7} alt="materip" className="materip" />
          </div>
          <div className="videop">
            <img src={P8} alt="materip" className="materip" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tandabaca;
