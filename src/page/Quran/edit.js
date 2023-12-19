// EditQuran.js

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function EditQuran() {
  const { id } = useParams();
  const [quran, setQuran] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8080/Quran/${id}`)
      .then((response) => {
        setQuran(response.data);
      })
      .catch((error) => {
        console.error("Error fetching Quran data:", error);
      });
  }, [id]);

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:8080/update-Quran/${id}`, quran);
      alert("Data Surah Berhasil Di update");
      window.location.href = '/Quran';
      // Redirect or show success message
    } catch (error) {
      console.error("Error updating Quran:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuran({ ...quran, [name]: value });
  };

  return (
    <div>
      <h1>Edit Quran</h1>
      <form>
        <div>
          <label>Surat:</label>
          <input
            type="text"
            name="Surat"
            value={quran.Surat || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Jumlah Ayat:</label>
          <input
            type="text"
            name="Ayat"
            value={quran.Ayat || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Keterangan:</label>
          <input
            type="text"
            name="Keterangan"
            value={quran.Keterangan || ""}
            onChange={handleChange}
          />
        </div>
        <button type="button" onClick={handleUpdate}>
          Update
        </button>
      </form>
    </div>
  );
}

export default EditQuran;
