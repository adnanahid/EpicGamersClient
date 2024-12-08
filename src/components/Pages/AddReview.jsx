import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const AddReview = () => {
  const { user, loading } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const thumbnail = e.target.thumbnail.value.trim();
    const title = e.target.title.value.trim();
    const review = e.target.review.value.trim();
    const rating = e.target.rating.value.trim();
    const year = e.target.year.value.trim();
    const genres = e.target.genres.value.trim();
    const email = e.target.email.value.trim();
    const name = e.target.name.value.trim();

    // Validate inputs
    if (!thumbnail || !title || !review || !rating || !year || !genres) {
      Swal.fire({
        icon: "warning",
        title: "Missing Fields",
        text: "Please fill out all the required fields.",
      });
      return;
    }

    const reviewInfo = {
      thumbnail,
      title,
      review,
      rating,
      year,
      genres,
      email,
      name,
    };

    fetch("https://a10-server-side-iota.vercel.app/reviews", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(reviewInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        e.target.reset();
        Swal.fire({
          icon: "success",
          title: "Review Posted Successfully",
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: "Failed to post the review. Please try again.",
        });
        console.error(err);
      });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="spinner border-t-transparent border-4 border-blue-500 w-16 h-16 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center pt-12">
      <div className="w-full max-w-2xl rounded-lg overflow-hidden shadow-lg">
        <div className="p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            POST YOUR REVIEW
          </h2>
          <form onSubmit={handleSubmit}>
            {/* Thumbnail URL */}
            <div className="mb-4">
              <label className="block text-sm mb-2" htmlFor="thumbnail">
                Thumbnail (URL)
              </label>
              <input
                type="text"
                name="thumbnail"
                id="thumbnail"
                placeholder="Thumbnail URL"
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Game's Name */}
            <div className="mb-4">
              <label className="block text-sm mb-2" htmlFor="title">
                Game's Name
              </label>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Enter Game's Name"
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Review */}
            <div className="mb-4">
              <label className="block text-sm mb-2" htmlFor="review">
                Review Description
              </label>
              <textarea
                name="review"
                id="review"
                placeholder="Write your detailed review"
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Rating */}
            <div className="mb-4">
              <label className="block text-sm mb-2" htmlFor="rating">
                Rating (1-5)
              </label>
              <input
                type="number"
                name="rating"
                id="rating"
                placeholder="Give your rating"
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                min="1"
                max="5"
                required
              />
            </div>

            {/* Published Year */}
            <div className="mb-4">
              <label className="block text-sm mb-2" htmlFor="year">
                Published Year
              </label>
              <input
                type="text"
                name="year"
                id="year"
                placeholder="Published Year"
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Genres */}
            <div className="mb-4">
              <label className="block text-sm mb-2" htmlFor="genres">
                Genres
              </label>
              <select
                name="genres"
                id="genres"
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="" disabled selected>
                  Select a Genre
                </option>
                <option value="Action">Action</option>
                <option value="Adventure">Adventure</option>
                <option value="RPG">RPG</option>
                <option value="Simulation">Simulation</option>
                <option value="Racing">Racing</option>
                <option value="Card">Card</option>
                <option value="Board">Board</option>
              </select>
            </div>

            {/* Email (Read-Only) */}
            <div className="mb-4">
              <label className="block text-sm mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                readOnly
                defaultValue={user?.email}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none cursor-not-allowed"
              />
            </div>

            {/* Name (Read-Only) */}
            <div className="mb-4">
              <label className="block text-sm mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                readOnly
                defaultValue={user?.displayName}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none cursor-not-allowed"
              />
            </div>

            {/* Submit Button */}
            <button
              className="w-full bg-blue-500 text-white hover:bg-blue-600 py-2 rounded font-semibold transition duration-300"
              type="submit"
            >
              POST
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
