import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./login.css";

function Login() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("user");
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [ustadz, setUstadz] = useState({
    username: "",
    password: "",
  });

  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleUstadzChange = (e) => {
    const { name, value } = e.target;
    setUstadz((prevUstadz) => ({
      ...prevUstadz,
      [name]: value,
    }));
  };

  const handleUserLogin = async (e) => {
    if (user.username == "" || user.password == "") {
      alert("Mohon lengkapi username dan pasword");
    } else {
      e.preventDefault();
      try {
        const response = await axios.post(
          `http://localhost:8080/user/login`,
          user
        );
        console.log("User Login Response:", response.data);
        // Lakukan penanganan respons dari API sesuai kebutuhan aplikasi

        navigate('/Pengenalan');
        
      } catch (error) {
        console.error("User Login Error:", error);
        // Handle error jika terjadi kesalahan dalam proses login
      }
    }
  };

  const handleUstadzLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
         `http://localhost:8080/ustadz/login`,
        ustadz
      );
      console.log("Ustadz Login Response:", response.data);
      // Lakukan penanganan respons dari API sesuai kebutuhan aplikasi

      navigate('/Pengenalan');

    } catch (error) {
      console.error("Ustadz Login Error:", error);
      // Handle error jika terjadi kesalahan dalam proses login
    }
  };

  return (
    <div>
      <div className="overlay">
        <div className="login-container">
          <h2>Login</h2>
          <div className="tab">
            <button
              className={activeTab === "user" ? "active" : ""}
              onClick={() => setActiveTab("user")}
            >
              User
            </button>
            <button
              className={activeTab === "ustadz" ? "active ustadz" : "ustadz"}
              onClick={() => setActiveTab("ustadz")}
            >
              Ustadz
            </button>
          </div>
          {activeTab === "user" ? (
            <form onSubmit={handleUserLogin}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={user.username}
                  onChange={handleUserChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={user.password}
                  onChange={handleUserChange}
                />
              </div>
              <button type="submit">Login</button>
            </form>
          ) : (
            <form onSubmit={handleUstadzLogin}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={ustadz.username}
                  onChange={handleUstadzChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={ustadz.password}
                  onChange={handleUstadzChange}
                />
              </div>
              <button type="submit">Login</button>
            </form>
          )}
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

export default Login;
