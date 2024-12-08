import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LogIn = () => {
  const { setUser, loginWithGoogle, loginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    const email = e.target.email.value.trim();
    const password = e.target.password.value;

    // Validation
    if (!email || !password) {
      toast.error("Both email and password are required!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
      });
      setLoading(false);
      return;
    }

    try {
      const userCredential = await loginUser(email, password);
      const user = userCredential.user;
      setUser(user);
      console.log(user);

      // Show success toast
      toast.success("Login successful! Welcome back!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
      });

      navigate("/");
    } catch (error) {
      console.error("Login Error:", error.message);

      // Show error toast
      toast.error("Invalid email or password. Please try again!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
      });
    } finally {
      setLoading(false); // End loading
    }
  };

  const googleRegister = async () => {
    try {
      const userCredential = await loginWithGoogle();
      const user = userCredential.user;
      setUser(user);
      console.log(user);

      // Show success toast
      toast.success("Logged in with Google successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
      });

      navigate("/");
    } catch (error) {
      console.error("Google Sign-in Error:", error.message);

      // Show error toast
      toast.error("Google login failed. Please try again!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* Toast Container */}
      <ToastContainer />

      <div className="flex w-full max-w-4xl rounded-lg overflow-hidden shadow-lg">
        {/* Left Image Section */}
        <div className="w-1/2 bg-cover bg-center bg-banner"></div>

        {/* Right Form Section */}
        <div className="w-1/2 p-8">
          <h2 className="text-2xl text-white font-semibold mb-6">LOGIN</h2>
          <form onSubmit={handleLogin}>
            {/* Email Input */}
            <div className="mb-4">
              <label className="block text-gray-400 text-sm mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your Email"
                className="w-full px-4 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Password Input */}
            <div className="mb-4 relative">
              <label className="block text-gray-400 text-sm mb-2" htmlFor="password">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Enter Your Password"
                className="w-full px-4 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-9 text-gray-400 hover:text-white"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {/* Login Button */}
            <button
              disabled={loading}
              className={`w-full ${
                loading ? "bg-gray-600" : "bg-blue-500 hover:bg-blue-600"
              } text-white py-2 rounded font-semibold transition duration-300 my-4`}
              type="submit"
            >
              {loading ? "Logging in..." : "LOGIN"}
            </button>
          </form>

          {/* Social Media Buttons */}
          <div className="flex justify-center space-x-4 my-4">
            <button
              onClick={googleRegister}
              className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded font-semibold transition duration-300"
            >
              LOGIN WITH GOOGLE
            </button>
          </div>

          {/* Register Link */}
          <p className="text-gray-400 text-sm mt-4 text-center">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-500 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
