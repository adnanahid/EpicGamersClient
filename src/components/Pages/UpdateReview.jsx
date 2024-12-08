import { useLoaderData } from "react-router-dom";

const UpdateReview = () => {
  const data = useLoaderData();
  console.log(data);
  const handleSubmit = (e) => {
    e.preventDefault();

    const thumbnail = e.target.thumbnail.value;
    const title = e.target.title.value;
    const review = e.target.review.value;
    const rating = e.target.rating.value;
    const year = e.target.year.value;
    const genres = e.target.genres.value;

    console.log(thumbnail, title, review, year, genres);
    const reviewInfo = { thumbnail, title, review, rating, year, genres };

    fetch(`https://a10-server-side-iota.vercel.app/updateReviews/${data._id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(reviewInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
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
          title: "Review Updated Successfully",
        });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-2xl rounded-lg shadow-lg">
        <div className="p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            UPDATE REVIEW
          </h2>
          <form onSubmit={handleSubmit}>
            {/* Game Cover IMG URL Input */}
            <div className="mb-4">
              <label className="block text-sm mb-2" htmlFor="photo">
                Thumbnail
              </label>
              <input
                type="text"
                name="thumbnail"
                id="thumbnail"
                defaultValue={data.thumbnail}
                placeholder="Thumbnail URL"
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* Game's Name Input */}
            <div className="mb-4">
              <label className="block text-sm mb-2" htmlFor="name">
                Game's Name
              </label>
              <input
                type="text"
                name="title"
                id="title"
                defaultValue={data.title}
                placeholder="Enter Game's Name"
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* Description Input */}
            <div className="mb-4">
              <label className="block text-sm mb-2" htmlFor="name">
                Review
              </label>
              <textarea
                type="text"
                name="review"
                id="review"
                defaultValue={data.review}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write your detailed review"
              />
            </div>
            {/* Rating Input */}
            <div className="mb-4">
              <label className="block text-sm mb-2" htmlFor="rating">
                Rating
              </label>
              <input
                type="number"
                name="rating"
                id="rating"
                defaultValue={data.rating}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Give your rating"
                min="1"
                max="5"
              />
            </div>
            {/* Published year */}
            <div className="mb-4">
              <label className="block text-sm mb-2" htmlFor="name">
                Published Year
              </label>
              <input
                type="number"
                name="year"
                id="year"
                defaultValue={data.year}
                placeholder="Published Year"
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* Genres */}
            <div className="mb-4">
              <label className="block text-sm mb-2" htmlFor="name">
                Genres
              </label>
              <select
                name="genres"
                id="genres"
                defaultValue={data.genres}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Action">Action</option>
                <option value="Adventure">Adventure</option>
                <option value="RPG">RPG</option>
                <option value="Simulation">Simulation</option>
                <option value="Racing">Racing</option>
                <option value="Card">Card</option>
                <option value="Board">Board</option>
              </select>
            </div>

            {/* Update Button */}
            <button
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded font-semibold transition duration-300"
              type="submit"
            >
              UPDATE POST
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateReview;
