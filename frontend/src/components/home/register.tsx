import "../css/register.css";
import { register } from "./auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    number: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await register(
        formData.username,
        formData.email,
        formData.number,
        formData.password
      );
      alert(response.data.message);
      navigate("/");
    } catch (err: any) {
      console.error(err.response.data.message);
      alert(err.response.data.message);
    }
  };
  return (
    <>
      <nav id="home-nav">
        <ul id="nav-list">
          <li>
            <img src="logo.png" height="40px" width="120%" />
          </li>
          <li id="right-item">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="reg-page">
        <div className="form">
          <h2 id="reg">REGISTER NOW</h2>
          <form className="login-form">
            <input
              type="text"
              value={formData.username}
              placeholder="Username"
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
            />
            <input
              type="email"
              value={formData.email}
              placeholder="Email"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <input
              type="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              placeholder="Password"
            />
            <button onClick={handleSubmit}>Register</button>
            <p className="message">
              Already registered? <a href="/">Sign In</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
