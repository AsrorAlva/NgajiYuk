import React from "react";
import { Link } from "react-router-dom";
import "./pembelajaran.css";
import Navbar from "../../component/Navbar";
import T1 from "../../assets/t1.png";
import T2 from "../../assets/t2.png";
import T3 from "../../assets/t3.png";
import T4 from "../../assets/t4.png";
import T5 from "../../assets/t5.png";
import T6 from "../../assets/t6.png";
import T7 from "../../assets/t7.png";
import T8 from "../../assets/t8.png";

function Tajwid1() {
  return (
    <div>
      <Navbar />
      <div className="container-pembelajaran">
        <h2 className="judul">Tajwid Bab 1</h2>
        <div className="containerv">
          <div className="materi">
            <div className="video">
              <Link to="/Tajwid1D">
                <img src={T1} alt="materiv" className="materiv" />
              </Link>
            </div>
            <div className="video">
              <Link to="/Tajwid1D">
                <img src={T2} alt="materiv" className="materiv" />
              </Link>
            </div>
            <div className="video">
              <Link to="/Tajwid1D">
                <img src={T3} alt="materiv" className="materiv" />
              </Link>
            </div>
            <div className="video">
              <Link to="/Tajwid1D">
                <img src={T4} alt="materiv" className="materiv" />
              </Link>
            </div>
            <div className="video">
              <Link to="/Tajwid1D">
                <img src={T5} alt="materiv" className="materiv" />
              </Link>
            </div>
            <div className="video">
              <Link to="/Tajwid1D">
                <img src={T6} alt="materiv" className="materiv" />
              </Link>
            </div>
          </div>
        </div>
        <div className="judul">
          <h2 className="judul">Penjelasan Materi</h2>
        </div>
        <div className="materip">
          <div className="videop">
            <img src={T7} alt="materip" className="materip" />
          </div>
          <div className="videop">
            <img src={T8} alt="materip" className="materip" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tajwid1;
