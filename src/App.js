import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import BrowserRouter
import Halaman from "./component/Halaman";
import Login from "./page/login/login";
import Register from "./page/register/register";
import Tentang from "./page/tentang/tentang";
import Pengenalan from "./page/pengenalan/pengenalan";
import Babhijaiyah from "./page/Pembelajaran/BabHijaiyah";
import Tandabaca from "./page/Pembelajaran/Tandabaca";
import Iqra1 from "./page/Pembelajaran/iqra 1-3";
import Tajwid1 from "./page/Pembelajaran/Tajwid1";
import Iqra4 from "./page/Pembelajaran/Iqra4-6";
import Tajwid2 from "./page/Pembelajaran/Tajwid2";
import Tajwid3 from "./page/Pembelajaran/Tajwid3";
import Detailhijaiyah from "./page/DetailPembelajaran/Detailhijaiyah";
import Detailiqra1 from "./page/DetailPembelajaran/DetailIqra1";
import Detailiqra4 from "./page/DetailPembelajaran/Detailiqra4";
import Detailtajwid1 from "./page/DetailPembelajaran/Detailtajwid1";
import Detailtajwid3 from "./page/DetailPembelajaran/Detailtajwid3";
import Detailtandabaca from "./page/DetailPembelajaran/Detailtandabaca";
import Detailtajwid2 from "./page/DetailPembelajaran/Detailtajwid2";
import AdminPage from "./admin/page/admin";
import Dashboard from "./admin/page/dashboard";
import User from "./admin/page/user";
import Ustadz from "./admin/page/ustadz";
import Materividio from "./admin/page/materi-vidio";
import Materipenjelasan from "./admin/page/materi-penjelasan";
import Log from "./admin/page/login/login";
import Quran from "./page/Quran/Qur'an";
import Tambah from "./page/Quran/tambah";
import EditQuran from "./page/Quran/edit";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Halaman />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route path="/Pengenalan" element={<Pengenalan />} />
          <Route path="/Babhijaiyah" element={<Babhijaiyah />} />
          <Route path="/Tandabaca" element={<Tandabaca />} />
          <Route path="/Iqra" element={<Iqra1 />} />
          <Route path="/Tajwid1" element={<Tajwid1 />} />
          <Route path="/Iqra4" element={<Iqra4 />} />
          <Route path="/Tajwid2" element={<Tajwid2 />} />
          <Route path="/Tajwid3" element={<Tajwid3 />} />
          <Route path="/Hijaiyah" element={<Detailhijaiyah />} />
          <Route path="/Iqra1-3" element={<Detailiqra1 />} />
          <Route path="/Tajwid1D" element={<Detailtajwid1 />} />
          <Route path="/Tajwid2D" element={<Detailtajwid2 />} />
          <Route path="/Iqra4-6" element={<Detailiqra4 />} />
          <Route path="/Tajwid3D" element={<Detailtajwid3 />} />
          <Route path="/Tandabaca1" element={<Detailtandabaca />} />
          <Route path="/Admin" element={<AdminPage />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/User" element={<User />} />
          <Route path="/Ustadz" element={<Ustadz />} />
          <Route path="/materividio" element={<Materividio />} />
          <Route path="/materipenjelasan" element={<Materipenjelasan />} />
          <Route path="/loginadmin" element={<Log />} />
          <Route path="/quran" element={<Quran />} />
          <Route path="/tambah" element={<Tambah />} />
          <Route path="/edit" element={<EditQuran />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
