import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import Sidebar from "../component/sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./admin.css";

const AdminPage = () => {
  const [ustadzList, setUstadzList] = useState([]);

  useEffect(() => {
    const fetchUstadzData = async () => {
      try {
        const response = await fetch("http://localhost:3001/ustadz");
        if (response.ok) {
          const data = await response.json();
          setUstadzList(data);
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching ustadz data:", error);
      }
    };

    fetchUstadzData();
  }, []);

  const handleDelete = (ustadzID) => {
    // Logika untuk menghapus ustadz dengan ustadzID tertentu
    // Lakukan permintaan DELETE ke API atau lakukan manipulasi state seperti:
    // const updatedUstadzList = ustadzList.filter(ustadz => ustadz.ustadzID !== ustadzID);
    // setUstadzList(updatedUstadzList);
  };

  const handleEdit = (ustadzID) => {
    // Logika untuk mengedit ustadz dengan ustadzID tertentu
    // Lakukan pembaruan data ustadz atau navigasi ke halaman edit ustadz
  };

  return (
    <div className="admin-page">
      <Sidebar />
      <div className="admin-content">
        <h2>Ustadz Management</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nama</th>
              <th>Username</th>
              <th>Email</th>
              <th>Password</th>
              <th>No Telepon</th>
              <th>Actions</th>
              {/* Tambahkan kolom lain jika diperlukan */}
            </tr>
          </thead>
          <tbody>
            {ustadzList.map((ustadz) => (
              <tr key={ustadz.ustadzID}>
                <td>{ustadz.ustadzID}</td>
                <td>{ustadz.namaUstadz}</td>
                <td>{ustadz.username}</td>
                <td>{ustadz.password}</td>
                <td>{ustadz.email}</td>
                <td>{ustadz.noTlpn}</td>
                <td>
                  <Button variant="danger" onClick={() => handleDelete(ustadz.ustadzID)}>Delete</Button>{' '}
                  <Button variant="warning" onClick={() => handleEdit(ustadz.ustadzID)}>Edit</Button>
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
