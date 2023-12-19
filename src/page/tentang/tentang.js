import React from "react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";

function Tentang() {
  return (
    <div>
      <Navbar />
      <div className="content">
        <h2>Tentang Aplikasi Ngaji Yuk</h2>
        <p>
          Selamat datang di Aplikasi Kami! Kami adalah tim yang bersemangat
          untuk memberikan pendidikan berkualitas tentang Tajwid dan mengaji.
          Aplikasi ini dirancang untuk membantu Anda memahami Tajwid dengan
          lebih baik melalui berbagai sumber belajar yang interaktif.
        </p>
        <p>
          Tim kami terdiri dari para pengajar yang berpengalaman dalam bidang
          pengajaran Tajwid dan mengaji. Kami percaya bahwa pemahaman yang baik
          tentang Tajwid dapat memperkaya pengalaman Anda dalam membaca Al-Quran
          dengan baik dan benar.
        </p>
        <p>
          Kami berharap Anda menikmati pengalaman belajar di Aplikasi Kami. Jika
          Anda memiliki pertanyaan atau masukan, jangan ragu untuk menghubungi
          kami.
        </p>
      </div>
      <div style={{ paddingTop: "20px" }}>
        <Footer />
      </div>
    </div>
  );
}

export default Tentang;
