import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import Sidebar from "../component/sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./admin.css";

const AdminPage = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("http://localhost:3001/users");
        if (response.ok) {
          const data = await response.json();
          setUserList(data);
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleDelete = (userID) => {
    // Logika untuk menghapus user dengan userID tertentu
    // Lakukan permintaan DELETE ke API atau lakukan manipulasi state seperti:
    // const updatedUserList = userList.filter(user => user.userID !== userID);
    // setUserList(updatedUserList);
  };

  const handleEdit = (userID) => {
    // Logika untuk mengedit user dengan userID tertentu
    // Lakukan pembaruan data user atau navigasi ke halaman edit user
  };

  return (
    <div className="admin-page">
      <Sidebar />
      <div className="admin-content">
        <h2>User Management</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nama</th>
              <th>Username</th>
              <th>Password</th>
              <th>Email</th>
              
              <th>Actions</th>
              {/* Tambahkan kolom lain jika diperlukan */}
            </tr>
          </thead>
          <tbody>
            {userList.map((user) => (
              <tr key={user.userID}>
                <td>{user.userID}</td>
                <td>{user.nama}</td>
                <td>{user.username}</td>
                <td>{user.password}</td>
                <td>{user.email}</td>
                
                <td>
                  <Button variant="danger" onClick={() => handleDelete(user.userID)}>Delete</Button>{' '}
                  <Button variant="warning" onClick={() => handleEdit(user.userID)}>Edit</Button>
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
