import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import D1 from "../assets/D1.png";
import Hijaiyah from "../assets/NgajiYuk 5.png";
import Tajwid from "../assets/NgajiYuk 6.png";
import Chat from "../assets/chat.png";
import Quran from "../assets/Quran.png";
import Footer from "./Footer";

function Halaman() {
  return (
    <div>
      <Navbar />
      <div className="dashboard-content">
        <div className="column">
          <div className="image-container">
            <img src={D1} alt="D1" className="D1" />
          </div>
        </div>
        <div className="column">
          <p>
            عن عثمانَ بن عفانَ رضيَ اللَّه عنهُ قال : قالَ رسولُ اللَّهِ صَلّى
            اللهُ عَلَيْهِ وسَلَّم : خَيركُم مَنْ تَعَلَّمَ القُرْآنَ وَعلَّمهُ
            <br />
            <em>Artinya:</em>
            <br />
            Dari Usman bin Affan ra, Rasulullah saw. bersabda, "Sebaik-baik
            kalian adalah yang mempelajari al-Qur'an dan mengajarkannya."
          </p>
        </div>
      </div>
      <div className="text-container">
        <h2>MENGAPA NGAJIYUK?</h2>
        <p>
          Belajar Mengaji dengan mudah di bimbing oleh ustadz yang berpengalaman
          dengan materi yang mudah dipahami oleh pemula
        </p>
      </div>
      <div className="container">
        <div className="column1">
          <div className="card">
            <img src={Hijaiyah} alt="Hijaiyah" className="Hijaiyah" />
            <h1>Pengenalan Huruf Hijaiyah</h1>
            <p>
              Materi ini akan mempelajari huruf hijaiyah sesuai makhorijul huruf
            </p>
          </div>
        </div>
        <div className="column1">
          <div className="card">
            <img src={Tajwid} alt="Tajwid" className="Tajwid" />
            <h1>Pengenalan Tajwid</h1>
            <p>Materi ini membahas Tajwid yang sesuai dengan bla bla bla bla</p>
          </div>
        </div>
        <div className="column1">
          <div className="card">
            <img src={Chat} alt="Chat" className="Chat" />
            <h1>Fitur Chat Ustadz</h1>
            <p>
              Jika anda masih belum paham tentang materi yang anda pelajari,
              maka anda bisa menggunakan fitur ini
            </p>
          </div>
        </div>
        <div className="column1">
          <div className="card">
            <img src={Quran} alt="Quran" className="Quran" />
            <h1>Al-Qur'an</h1>
            <p>Materi ini mencakup Al-Qur'an beserta tafsirnya</p>
          </div>
        </div>
      </div>
      <div className="centered-container">
        <Link to="/pengenalan" className="button-container">
          <div>Mulai untuk belajar mengaji</div>
        </Link>
      </div>
      <div id="video-container">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/6W7GSc2gVhk"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div style={{ paddingTop: "20px" }}>
        <Footer />
      </div>
    </div>
  );
}

export default Halaman;
