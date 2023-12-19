import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../component/Navbar";
import "./pengenalan.css";
import Bab1 from "../../assets/Bab Hijaiyah.png";
import Bab2 from "../../assets/Tanda Baca.png"
import Bab3 from "../../assets/Iqra.png"
import Tajwid from "../../assets/tajwid.png"
import GambarPaket from "../../assets/GambarApk.png";
import Footer from "../../component/Footer";

function pengenalan() {
  return (
    <div>
      <Navbar />
      <div className="pengenalan">
        <div className="pengenalan1">
          <h1>Pengenalan</h1>
          <div className="materividio">
            <div className="materi1">
              <div className="cardp">
                <Link to="/babhijaiyah">
                  <img src={Bab1} alt="Quran" className="Quran" />
                  <h3>Bab Hijaiyah</h3>
                </Link>
              </div>
              <div className="cardp">
                <Link to="/Tandabaca">
                  <img src={Bab2} alt="Quran" className="Quran" />
                  <h3>Mengenal Tanda Baca</h3>
                </Link>
              </div>
              <div className="cardp">
                <Link to="/Iqra">
                  <img src={Bab3} alt="Quran" className="Quran" />
                  <h3>Iqra 1-3</h3>
                </Link>
              </div>
              <div className="cardp">
                <Link to="/Tajwid1">
                  <img src={Tajwid} alt="Quran" className="Quran" />
                  <h3>Tajwid bab 1</h3>
                </Link>
              </div>
              <div className="cardp">
                <Link to="/Iqra4">
                  <img src={Bab3} alt="Quran" className="Quran" />
                  <h3>Iqra 4-6</h3>
                </Link>
              </div>
              <div className="cardp">
                <Link to="/Tajwid2">
                  <img src={Tajwid} alt="Quran" className="Quran" />
                  <h3>Tajwid bab 2</h3>
                </Link>
              </div>
              <div className="cardp">
                <Link to="/Tajwid3">
                  <img src={Tajwid} alt="Quran" className="Quran" />
                  <h3>Tajwid bab 3</h3>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="centered-container">
          <Link to="/tentang" className="button-container">
            <div>Penjelasan Aplikasi</div>
          </Link>
        </div>
      </div>
      <div className="deskripsi">
        <div className="deskripsiapk">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
            tellus orci ac auctor augue. Ipsum faucibus vitae aliquet nec
            ullamcorper sit amet. Metus dictum at tempor commodo ullamcorper a
            lacus. Pharetra diam sit amet nisl suscipit adipiscing bibendum est
            ultricies. Condimentum lacinia quis vel eros donec ac odio tempor.
            In dictum non consectetur a erat nam at. Egestas egestas fringilla
            phasellus faucibus scelerisque eleifend donec pretium. Tortor
            posuere ac ut consequat semper viverra nam. Sagittis nisl rhoncus
            mattis rhoncus urna neque viverra justo nec. Sed arcu non odio
            euismod lacinia at quis. Nam aliquam sem et tortor consequat id
            porta. Tincidunt eget nullam non nisi est sit amet facilisis magna.
            Eu sem integer vitae justo eget magna fermentum. Nulla posuere
            sollicitudin aliquam ultrices. Et ultrices neque ornare aenean
            euismod elementum nisi quis. Ornare arcu dui vivamus arcu felis.
            Imperdiet massa tincidunt nunc pulvinar.
          </p>
        </div>
        <div className="gambarapk">
          <img src={GambarPaket} alt="Quran" className="Quran" />
        </div>
      </div>
      <div>
        <div className="centered-container">
          <Link to="/pengenalan" className="button-container">
            <div>Download Sekarang</div>
          </Link>
        </div>
      </div>
      <div style={{ paddingTop: "20px" }}>
        <Footer />
      </div>
    </div>
  );
}
export default pengenalan;
