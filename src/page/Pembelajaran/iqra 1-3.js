import React from "react";
import { Link } from "react-router-dom";
import "./pembelajaran.css";
import Navbar from "../../component/Navbar";
import I1 from "../../assets/i1.png";
import I2 from "../../assets/i2.png";
import I3 from "../../assets/i3.png";
import I4 from "../../assets/i4.png";
import I5 from "../../assets/i5.png";
import I6 from "../../assets/i6.png";
import I7 from "../../assets/i7.png";
import I8 from "../../assets/i8.png";


function Iqra1() {
  return (
    <div>
      <Navbar />
      <div className="container-pembelajaran">
        <h2 className="judul">Iqra 1 - 3</h2>
        <div className="containerv">
          <div className="materi">
            <div className="video">
              <Link to="/Iqra1-3">
                <img src={I1} alt="materiv" className="materiv" />
              </Link>
            </div>
            <div className="video">
              <Link to="/Iqra1-3">
                <img src={I2} alt="materiv" className="materiv" />
              </Link>
            </div>
            <div className="video">
              <Link to="/Iqra1-3">
                <img src={I3} alt="materiv" className="materiv" />
              </Link>
            </div>
            <div className="video">
              <Link to="/Iqra1-3">
                <img src={I4} alt="materiv" className="materiv" />
              </Link>
            </div>
            <div className="video">
              <Link to="/Iqra1-3">
                <img src={I5} alt="materiv" className="materiv" />
              </Link>
            </div>
            <div className="video">
              <Link to="/Iqra1-3">
                <img src={I6} alt="materiv" className="materiv" />
              </Link>
            </div>
          </div>
        </div>
        <div className="judul">
          <h2 className="judul">Penjelasan Materi</h2>
        </div>
        <div className="materip">
          <div className="videop">
            <img src={I7} alt="materip" className="materip" />
          </div>
          <div className="videop">
            <img src={I8} alt="materip" className="materip" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Iqra1;
