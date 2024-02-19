import React, { useState, useEffect } from "react";
import "./LoginForm.css";
import { FaUser, FaLock } from "react-icons/fa";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export default function LoginForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });
  const onSubmit = (e) => {
    e.preventDefault();
    if (formData.userName !== "" && formData.password !== "") {
      localStorage.setItem("token", "9msnnsds78787dsbdhhb");
      navigate("/dashboard");
    } else {
      if (formData.userName == "") {
        toast.error("Please enter your username.");
      } else if (formData.password == "") {
        toast.error("Please enter your password.");
      }
    }
  };
  return (
    <div className="wrapper">
      <div className="wrapper1">
        <form action="" onSubmit={onSubmit}>
          <h1>Login</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              required
              onChange={(e) =>
                setFormData({ ...formData, userName: e.target.value })
              }
            />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input
              type="Password"
              placeholder="Password"
              required
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            <FaLock className="icon" />
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a heref="#">Forgot password?</a>
          </div>
          <button type="submit">Login</button>
          {/* <div className="register-link">
          <p>
            Don't have an account? <a herf="#">Register</a>
          </p>
        </div> */}
        </form>
      </div>
    </div>
  );
}
