import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import Sidebar from "../component/sidebar";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./admin.css";

const AdminPage = () => {
  const [adminList, setAdminList] = useState([]);

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/adminlogin`);
        if (response.status === 200) {
          setAdminList(response.data);
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching admin data:", error);
      }
    };

    fetchAdminData();
  }, []);

  const handleDelete = async (adminID) => {
    const shouldDelete = window.confirm('Are you sure you want to delete this admin?');

    if (shouldDelete) {
      try {
        await axios.delete(`http://localhost:8080/admins/${adminID}`);
        setAdminList(prevAdminList => prevAdminList.filter(admin => admin.adminID !== adminID));
      } catch (error) {
        console.error('Error deleting admin:', error);
      }
    }
  };

  const handleEdit = (adminID) => {
    // Logika untuk mengedit admin dengan adminID tertentu
    // Lakukan pembaruan data admin atau navigasi ke halaman edit admin
  };

  return (
    <div className="admin-page">
      <Sidebar />
      <div className="admin-content">
        <h2>Admin Management</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nama</th>
              <th>Email</th>
              <th>Password</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {adminList.map((admin) => (
              <tr key={admin.adminID}>
                <td>{admin.adminID}</td>
                <td>{admin.namaAdmin}</td>
                <td>{admin.email}</td>
                <td>{admin.password}</td>
                <td>
                  <Button variant="danger" onClick={() => handleDelete(admin.adminID)}>Delete</Button>
                  <Button variant="warning" onClick={() => handleEdit(admin.adminID)}>Edit</Button>
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
