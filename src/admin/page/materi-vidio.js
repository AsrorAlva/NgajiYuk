import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import Sidebar from "../component/sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./admin.css";

const AdminPage = () => {
  const [materiVidioList, setMateriVidioList] = useState([]);

  useEffect(() => {
    const fetchMateriVidioData = async () => {
      try {
        const response = await fetch("http://localhost:3001/materi_vidio");
        if (response.ok) {
          const data = await response.json();
          setMateriVidioList(data);
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching materi vidio data:", error);
      }
    };

    fetchMateriVidioData();
  }, []);

  const handleDelete = (materiID) => {
    // Logika untuk menghapus materi vidio dengan materiID tertentu
    // Lakukan permintaan DELETE ke API atau lakukan manipulasi state seperti:
    // const updatedMateriVidioList = materiVidioList.filter(materi => materi.materiID !== materiID);
    // setMateriVidioList(updatedMateriVidioList);
  };

  const handleEdit = (materiID) => {
    // Logika untuk mengedit materi vidio dengan materiID tertentu
    // Lakukan pembaruan data materi vidio atau navigasi ke halaman edit materi vidio
  };

  const handleUpload = () => {
    // Logika untuk mengelola proses unggah video
    // Mungkin Anda perlu menggunakan library atau mengirim permintaan ke endpoint API
  };

  return (
    <div className="admin-page">
      <Sidebar />
      <div className="admin-content">
        <h2>Materi Video Management</h2>
        <Button variant="primary" onClick={handleUpload}>Upload Video</Button>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Judul Materi</th>
              <th>Deskripsi</th>
              <th>Tanggal Upload</th>
              <th>Uploader</th>
              <th>Actions</th>
              {/* Tambahkan kolom lain jika diperlukan */}
            </tr>
          </thead>
          <tbody>
            {materiVidioList.map((materi) => (
              <tr key={materi.materiID}>
                <td>{materi.materiID}</td>
                <td>{materi.judulMateri}</td>
                <td>{materi.deskripsi}</td>
                <td>{materi.tanggalUpload}</td>
                <td>{materi.yangUpload}</td>
                <td>
                  <Button variant="danger" onClick={() => handleDelete(materi.materiID)}>Delete</Button>{' '}
                  <Button variant="warning" onClick={() => handleEdit(materi.materiID)}>Edit</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default AdminPage;
