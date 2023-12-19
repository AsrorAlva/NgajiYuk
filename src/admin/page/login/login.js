import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./login.css";

function Log() {
  const navigate = useNavigate();

  const [admin, setAdmin] = useState({
    email: "",
    password: "",
  });

  const handleAdminChange = (e) => {
    const { name, value } = e.target;
    setAdmin((prevAdmin) => ({
      ...prevAdmin,
      [name]: value,
    }));
  };

  const handleAdminLogin = async (e) => {
    if (admin.email === "" || admin.password === "") {
      alert("Mohon lengkapi email dan password");
    } else {
      e.preventDefault();
      try {
        const response = await axios.post(
          `http://localhost:8080/adminlogin`,
          admin
        );
        console.log("Admin Login Response:", response.data);
        // Lakukan penanganan respons dari API sesuai kebutuhan aplikasi

        navigate("/Admin");
      } catch (error) {
        console.error("Admin Login Error:", error);
        // Handle error jika terjadi kesalahan dalam proses login
      }
    }
  };

  return (
    <div>
      <div className="overlay">
        <div className="login-container">
          <h2>Login</h2>
          <form onSubmit={handleAdminLogin}>
            <div className="form-group">
              <label htmlFor="email">email</label>
              <input
                type="text"
                id="email"
                name="email"
                value={admin.email}
                onChange={handleAdminChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={admin.password}
                onChange={handleAdminChange}
              />
            </div>
            <button type="submit">Login</button>
          </form>
          <p className="oi">Atau</p>
          <div className="login-with-google">
            <button>Login with Google</button>
          </div>
          <p className="oi">
            Belum punya akun? <Link to="/Register">Daftar</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Log;
