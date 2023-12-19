import React from "react";
import "./pembelajaran.css";
import Navbar from "../../component/Navbar";
import M1 from "../../assets/m1.png";
import M2 from "../../assets/m2.png";
import M3 from "../../assets/m3.png";
import M4 from "../../assets/m4.png";
import M5 from "../../assets/m5.png";
import M6 from "../../assets/m6.png";
import M7 from "../../assets/m7.png";
import M8 from "../../assets/m8.png";
import { Link } from "react-router-dom";
import Footer from "../../component/Footer";

function Babhijaiyah() {
  return (
    <div>
      <Navbar />
      <div className="container-pembelajaran">
        <h2 className="judul">Mengenal Huruf Hijaiyah</h2>
        <div className="containerv">
          <div className="materi">
            <div className="video">
              <Link to="/Hijaiyah">
                <img src={M1} alt="materiv" className="materiv" />
              </Link>
            </div>
            <div className="video">
              <Link to="/Hijaiyah">
                <img src={M2} alt="materiv" className="materiv" />
              </Link>
            </div>
            <div className="video">
              <Link to="/Hijaiyah">
                <img src={M3} alt="materiv" className="materiv" />
              </Link>
            </div>
            <div className="video">
              <Link to="/Hijaiyah">
                <img src={M4} alt="materiv" className="materiv" />
              </Link>
            </div>
            <div className="video">
              <Link to="/Hijaiyah">
                <img src={M5} alt="materiv" className="materiv" />
              </Link>
            </div>
            <div className="video">
              <Link to="/Hijaiyah">
                <img src={M6} alt="materiv" className="materiv" />
              </Link>
            </div>
          </div>
        </div>
        <div className="judul">
          <h2 className="judul">Penjelasan Materi</h2>
        </div>
        <div className="materip">
          <div className="videop">
            <img src={M7} alt="materip" className="materip" />
          </div>
          <div className="videop">
            <img src={M8} alt="materip" className="materip" />
          </div>
        </div>
      </div>
      <div style={{ paddingTop: "20px" }}>
        <Footer />
      </div>
    </div>
  );
}

export default Babhijaiyah;
