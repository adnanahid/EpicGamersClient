import React from "react";
import { Link } from "react-router-dom";

const AddReview = () => {
  const handleSubmit = () => {
    alert("ok");
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-2xl bg-gray-800 rounded-lg overflow-hidden shadow-lg">
        <div className="bg-gray-900 p-8">
          <h2 className="text-2xl text-white font-semibold mb-6">REVIEW</h2>
          <form onSubmit={handleSubmit}>
            {/* Game Cover IMG URL Input */}
            <div className="mb-4">
              <label
                className="block text-gray-400 text-sm mb-2"
                htmlFor="photo"
              >
                Photo URL
              </label>
              <input
                type="text"
                name="photo"
                id="photo"
                placeholder="Game Cover Image"
                className="w-full px-4 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* Game's Name Input */}
            <div className="mb-4">
              <label
                className="block text-gray-400 text-sm mb-2"
                htmlFor="name"
              >
                Game's Name
              </label>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Enter Game's Name"
                className="w-full px-4 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* Description Input */}
            <div className="mb-4">
              <label
                className="block text-gray-400 text-sm mb-2"
                htmlFor="name"
              >
                Review
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Write your review here"
                className="w-full px-4 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* Published year */}
            <div className="mb-4">
              <label
                className="block text-gray-400 text-sm mb-2"
                htmlFor="name"
              >
                Published Year
              </label>
              <input
                type="text"
                name="year"
                id="year"
                placeholder="Published Year"
                className="w-full px-4 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* Genres */}
            <div className="mb-4">
              <label
                className="block text-gray-400 text-sm mb-2"
                htmlFor="name"
              >
                Genres
              </label>
              <input
                type="text"
                name="genres"
                id="genres"
                placeholder="which genres?"
                className="w-full px-4 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* Email Input */}
            <div className="mb-4">
              <label
                className="block text-gray-400 text-sm mb-2"
                htmlFor="email"
              >
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
            {/* Name Input */}
            <div className="mb-4">
              <label
                className="block text-gray-400 text-sm mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Enter Game's Name"
                className="w-full px-4 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Registration Button */}
            <button
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded font-semibold transition duration-300"
              type="submit"
            >
              REGISTER
            </button>

            {/* Login Link */}
            <p className="text-gray-400 text-sm mt-4 text-center">
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

export default AddReview;
