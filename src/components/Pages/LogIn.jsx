import React from "react";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="flex w-full max-w-4xl bg-gray-800 rounded-lg overflow-hidden shadow-lg">
        {/* Left Image Section */}
        <div className="w-1/2 bg-cover bg-center bg-banner">
          <div className="p-8 text-gray-400">
            <h2 className="text-4xl font-bold mb-4">
              Pen isn't mightier then a sword. Pen's do no do battle nor swords
              poetry. Mightier is the hand that knows when pick up the pen or
              pick up the sword
            </h2>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="w-1/2 bg-gray-900 p-8">
          <h2 className="text-2xl text-white font-semibold mb-6">
            REGISTRATION
          </h2>
          <form>
            {/* Email Input */}
            <div className="mb-4">
              <label
                className="block text-gray-400 text-sm mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full px-4 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                id="email"
                placeholder="Enter your Email"
              />
            </div>
            {/* Password Input */}
            <div className="mb-4 relative">
              <label
                className="block text-gray-400 text-sm mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="w-full px-4 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="password"
                id="password"
                placeholder="Enter Your Password"
              />
              <button
                type="button"
                className="absolute right-4 top-9 text-gray-400 hover:text-white"
              ></button>
            </div>

            {/* Registration Button */}
            <button
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded font-semibold transition duration-300"
              type="submit"
            >
              REGISTER
            </button>

            {/* Social Media Buttons */}
            <p className="text-center text-gray-400 my-4 text-sm">
              or Register With
            </p>
            <div className="flex justify-center space-x-4">
              <button
                className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded font-semibold transition duration-300"
                type="submit"
              >
                REGISTER WITH GOOGLE
              </button>
            </div>

            {/* Login Link */}
            <p className="text-gray-400 text-sm mt-4 text-center">
              Have an account?{" "}
              <Link to="/register" className="text-blue-500 hover:underline">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
