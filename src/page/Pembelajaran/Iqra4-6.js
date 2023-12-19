import React from "react";
import { Link } from "react-router-dom";
import "./pembelajaran.css";
import Navbar from "../../component/Navbar";
import II1 from "../../assets/ii1.png";
import II2 from "../../assets/ii2.png";
import II3 from "../../assets/ii3.png";
import II4 from "../../assets/ii4.png";
import II5 from "../../assets/ii5.png";
import II6 from "../../assets/ii6.png";
import II7 from "../../assets/ii7.png";
import II8 from "../../assets/ii8.png";

function Iqra4() {
  return (
    <div>
      <Navbar />
      <div className="container-pembelajaran">
        <h2 className="judul">Iqra 4 - 6</h2>
        <div className="containerv">
          <div className="materi">
            <div className="video">
              <Link to="/Iqra4-6">
                <img src={II1} alt="materiv" className="materiv" />
              </Link>
            </div>
            <div className="video">
              <Link to="/Iqra4-6">
                <img src={II2} alt="materiv" className="materiv" />
              </Link>
            </div>
            <div className="video">
              <Link to="/Iqra4-6">
                <img src={II3} alt="materiv" className="materiv" />
              </Link>
            </div>
            <div className="video">
              <Link to="/Iqra4-6">
                <img src={II4} alt="materiv" className="materiv" />
              </Link>
            </div>
            <div className="video">
              <Link to="/Iqra4-6">
                <img src={II5} alt="materiv" className="materiv" />
              </Link>
            </div>
            <div className="video">
              <Link to="/Iqra4-6">
                <img src={II6} alt="materiv" className="materiv" />
              </Link>
            </div>
          </div>
        </div>
        <div className="judul">
          <h2 className="judul">Penjelasan Materi</h2>
        </div>
        <div className="materip">
          <div className="videop">
            <img src={II7} alt="materip" className="materip" />
          </div>
          <div className="videop">
            <img src={II8} alt="materip" className="materip" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Iqra4;
