import React, { useState } from "react";
import COVER_IMAGE from "./images/pixelcut-export.jpeg";
import axios from "axios";

const Login = ({ setAuth }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!username) validationErrors.username = "Username is required";
    if (!password) validationErrors.password = "Password is required";

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }
    try {
      const response = await axios.post("http://localhost:8000/login", {
        username,
        password,
      });
      localStorage.setItem("token", response.data.token);
      setAuth(true, username);
    } catch (error) {
      if (error.response && error.response.data) {
        const { message } = error.response.data;
        if (message.includes("username")) {
          setErrors({ username: "Incorrect username" });
        } else if (message.includes("password")) {
          setErrors({ password: "Incorrect password" });
        }
      } else {
        console.error(error);
      }
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    if (errors.username) {
      setErrors((prevErrors) => ({ ...prevErrors, username: '' }));
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (errors.password) {
      setErrors((prevErrors) => ({ ...prevErrors, password: '' }));
    }
  };

  const handleShowPasswordChange = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="w-full h-screen flex flex-col md:flex-row items-start">
      {/* Left side image section, hidden on small screens */}
      <div className="relative hidden md:flex md:w-1/2 h-full flex-col">
        <div className="absolute top-[25%] left-[10%] flex flex-col px-4 md:px-0">
          <h1 className="text-4xl text-white font-bold my-4">
            Turn Your Ideas into Reality
          </h1>
          <p className="text-xl text-white font-normal">
            Start for free and get attractive offers from the community
          </p>
        </div>
        <img src={COVER_IMAGE} className="w-full h-full object-cover" />
      </div>

      {/* Right side form section */}
      <div className="w-full md:w-1/2 h-full bg-[#f5f5f5] flex flex-col p-8 md:p-20 justify-center items-center">
        <h1 className="w-full max-w-[500px] mx-auto text-lg md:text-xl text-[#060606] font-extrabold mr-auto mb-6">
          Our Saviour Community Garden
        </h1>
        <div className="w-full flex flex-col max-w-[500px]">
          <div className="w-full flex flex-col mb-2">
            <h3 className="text-2xl md:text-3xl font-semibold mb-2">Login</h3>
            <p className="text-sm md:text-base mb-2">
              Welcome Back! Please Enter your details.
            </p>
          </div>
          <div className="w-full flex flex-col">
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
              placeholder="Username"
              required
              className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
            />
            {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}

            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={handlePasswordChange}
              placeholder="Password"
              required
              className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>

          <div className="w-full flex items-center justify-between">
            <div className="w-full flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 mr-2"
                checked={showPassword}
                onChange={handleShowPasswordChange}
              />
              <p className="text-sm">Show Password</p>
            </div>
          </div>
          <div className="w-full flex flex-col my-4">
            <button
              onClick={handleSubmit}
              className="w-full text-white my-2 font-semibold bg-[#060606] rounded-md p-4 text-center flex items-center justify-center cursor-pointer"
            >
              Log in
            </button>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <p className="text-sm  text-[#060606] font-semibold text-center">
            Plot against hunger{" "}
            <span className="font-semibold underline-offset-2">
              and grow just green 🍂
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
