import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
} from "@coreui/react";
import { Link } from "react-router-dom";

function Tambah() {
  const [quranData, setQuranData] = useState([]);
  const [formValues, setFormValues] = useState({
    Surat: "",
    Ayat: "",
    Keterangan: "",
  });

  useEffect(() => {
    axios.get(`http://localhost:8080/Quran`)
      .then((response) => {
        setQuranData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`http://localhost:8080/insert-Quran`, formValues);
      const newQuranData = [...quranData, response.data]; // Menambahkan data baru ke dalam array data Al-Qur'an
      setQuranData(newQuranData);
      setFormValues({ // Mengosongkan form setelah data berhasil ditambahkan
        Surat: "",
        Ayat: "",
        Keterangan: "",
      });
      alert('Surat Berhasil Ditambahkan')
      window.location.href = '/Quran'
    } catch (error) {
      console.error('Error adding Quran:', error);
    }
  };

  return (
    <div className="body-flex">
      <div className="flex">
        <div className="col-10 p-5">
          <h1 className="py-1">Data Al-Qur'an</h1>
          <div className="mb-4">
            <Link to="/tambah">
              <CButton color="primary" className="text-white me-2">
                Create
              </CButton>
            </Link>
          </div>
          <CCard>
            <CCardHeader>
              <strong>Tambah Al-Qur'an</strong>
            </CCardHeader>
            <CCardBody>
              <form onSubmit={handleFormSubmit}>
                <div className="mb-3">
                  <label htmlFor="Surat" className="form-label">Surat</label>
                  <input type="text" className="form-control" id="Surat" name="Surat" value={formValues.Surat} onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="Ayat" className="form-label">Jumlah Ayat</label>
                  <input type="text" className="form-control" id="Ayat" name="Ayat" value={formValues.Ayat} onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="Keterangan" className="form-label">Keterangan</label>
                  <input type="text" className="form-control" id="Keterangan" name="Keterangan" value={formValues.Keterangan} onChange={handleInputChange} />
                </div>
                <CButton color="primary" type="submit" className="text-white">
                  Simpan
                </CButton>
              </form>
            </CCardBody>
          </CCard>
        </div>
      </div>
    </div>
  );
}

export default Tambah;
