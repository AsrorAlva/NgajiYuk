import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./register.css";

class Register extends Component {
  state = {
    nama: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    noTlpn: "",
    userType: "",
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleUserTypeChange = (e) => {
    this.setState({ userType: e.target.value });
  };

  handleRegisterUser = async (e) => {
    e.preventDefault();

    const {
      nama,
      username,
      email,
      password,
      confirmPassword,
      userType,
    } = this.state;

    if (password !== confirmPassword) {
      alert("Password dan konfirmasi password tidak cocok");
      return;
    }

    try {
      const response = await axios.post(`http://localhost:8080/registeranjay`, {
        nama,
        username,
        email,
        password,
        userType,
      });

      console.log("Response from user registration API:", response.data);
      // Handle the response here (redirect, display a success message, etc.)
    } catch (error) {
      console.error("Error during user registration:", error);
      // Handle errors (display an error message, etc.)
    }
  };

  handleRegisterUstadz = async (e) => {
    e.preventDefault();

    const {
      nama,
      username,
      email,
      password,
      confirmPassword,
      noTlpn,
      userType,
    } = this.state;

    if (password !== confirmPassword) {
      alert("Password dan konfirmasi password tidak cocok");
      return;
    }

    try {
      const response = await axios.post(`http://localhost:8080/registeranjay`, {
        nama,
        username,
        email,
        password,
        userType,
        noTlpn,
      });

      console.log("Response from ustadz registration API:", response.data);
      // Handle the response here (redirect, display a success message, etc.)
    } catch (error) {
      console.error("Error during ustadz registration:", error);
      // Handle errors (display an error message, etc.)
    }
  };

  render() {
    // ... (Your render method code)

    const {
      nama,
      username,
      email,
      password,
      confirmPassword,
      noTlpn,
      userType,
    } = this.state;


    return (
      <div>
        <div className="overlay-reg">
          <div className="reg-container">
            <h2>Daftar Akun</h2>
            <form onSubmit={this.handleRegister}>
              <div className="form-group-reg">
                <label htmlFor="nama">Nama</label>
                <input
                  type="text"
                  id="nama"
                  name="nama"
                  value={nama}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="form-group-reg">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={username}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="form-group-reg">
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="form-group-reg">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="form-group-reg">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="form-group-reg">
                <label>Jenis Pendaftaran:</label>
                <label>
                  <input
                    type="radio"
                    name="userType"
                    value="user"
                    checked={userType === "user"}
                    onChange={this.handleUserTypeChange}
                  />
                  Pengguna
                </label>
                <label>
                  <input
                    type="radio"
                    name="userType"
                    value="ustadz"
                    checked={userType === "ustadz"}
                    onChange={this.handleUserTypeChange}
                  />
                  Ustadz
                </label>
              </div>
              {userType === "ustadz" && (
                <div className="form-group-reg">
                  <label htmlFor="noTlpn">Nomor Telepon</label>
                  <input
                    type="text"
                    id="noTlpn"
                    name="noTlpn"
                    value={noTlpn}
                    onChange={this.handleInputChange}
                  />
                </div>
              )}
              <button type="submitt">Daftar</button>
            </form>
            <p className="reg">
              Sudah punya akun? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
