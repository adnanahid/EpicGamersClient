import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

const Register = () => {
  const { setUser, createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const displayName = e.target.name.value;
    const photoURL = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Password validation: At least one uppercase, one lowercase, and min length of 6
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "error",
        title: "Invalid Password",
      });
      return;
    }

    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateUserProfile({
          displayName,
          photoURL,
        })
          .then(() => {
            setUser({ ...user, displayName, photoURL }); // Update state with user data
          })
          .catch((error) => console.error("Profile update error:", error));
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "success",
          title: "Signed in successfully",
        });
        navigate("/");

        fetch("https://a10-server-side-iota.vercel.app/users", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            displayName,
            email,
            photoURL,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("User saved:", data);
          })
          .catch((error) => {
            console.error("Error saving user:", error);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="md:flex w-full max-w-4xl rounded-lg overflow-hidden shadow-lg">
        {/* Left Image Section */}
        <div className="md:w-1/2 bg-cover bg-center bg-banner"></div>

        {/* Right Form Section */}
        <div className="md:w-1/2 p-8">
          <h2 className="text-2xl font-semibold mb-6">REGISTRATION</h2>
          <form onSubmit={handleSubmit}>
            {/* Name Input */}
            <div className="mb-4">
              <label className="block text-sm mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Enter your Name"
                className="w-full px-4 py-2 bg-[#4a4a4d] text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* Email Input */}
            <div className="mb-4">
              <label className="block text-sm mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your Email"
                className="w-full px-4 py-2 bg-[#4a4a4d] text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* Photo URL Input */}
            <div className="mb-4">
              <label className="block text-sm mb-2" htmlFor="photo">
                Photo URL
              </label>
              <input
                type="photo"
                name="photo"
                id="photo"
                placeholder="Enter your Photo URL"
                className="w-full px-4 py-2 bg-[#4a4a4d] text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Password Input */}
            <div className="mb-4 relative">
              <label className="block text-sm mb-2" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                required
                placeholder="Enter your password"
                className="w-full px-4 py-2 bg-[#4a4a4d]  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-10 text-gray-600"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {/* Registration Button */}
            <button
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded font-semibold transition duration-300"
              type="submit"
            >
              REGISTER
            </button>

            {/* Login Link */}
            <p className="text-sm mt-4 text-center">
              Have an account?
              <Link to="/login" className="text-blue-500 hover:underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
