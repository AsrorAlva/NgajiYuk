import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

function Footer() {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <div className="footer-left">
          <img src={Logo} alt="lF" className="LF" />
          <p>Jln. Merdeka 79 Kec. Ciseeng Kab. Bogor Prov. Jawa Barat 16120 </p>
          <p>
            Jln. Anggrek 80 Perum Kahuripan Kec. Kayu Manis Kota Bogor Prov.
            Jawa Barat{" "}
          </p>
        </div>
        <div className="footer-right">
          <ul className="footer-links">
            <li>
              <Link to="/tentang">Tentang Kami</Link>
            </li>
            <li>
              <Link to="/bantuan">Bantuan</Link>
            </li>
            <li>
              <Link to="/kebijakan-privasi">Kebijakan Privasi</Link>
            </li>
            <li>
              <Link to="/syarat-ketentuan">Syarat dan Ketentuan</Link>
            </li>
          </ul>
          <div className="social-icons">
            <Link to="#" className="icon-link">
              <i className="fab fa-facebook"></i>
            </Link>
            <Link to="#" className="icon-link">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link to="#" className="icon-link">
              <i className="fab fa-instagram"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="copyright">Hak Cipta © 2023 Asror</div>
    </footer>
  );
}

export default Footer;
