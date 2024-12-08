import React, { useContext, useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { MdDelete, MdModeEdit } from "react-icons/md";
import Swal from "sweetalert2";
import noDataFound from "../../assets/nodatafound.jpg";

const MyReview = () => {
  const { user, loading, setLoading } = useContext(AuthContext);
  const allReviews = useLoaderData();
  const [allReview, setReview] = useState(allReviews);

  console.log(allReview);
  console.log(allReviews);

  // Sync reviews when user or loader data changes
  useEffect(() => {
    if (user && allReviews) {
      const myReview = allReviews.filter(
        (review) => review.email === user?.email
      );
      setReview(myReview);
    }
  }, [user, allReviews]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setLoading(true);
        fetch(`https://a10-server-side-iota.vercel.app/deleteReviews/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => {
            Swal.fire("Deleted!", "Your review has been deleted.", "success");
            const restReview = allReview.filter((review) => review._id !== _id);
            console.log("Updated reviews:", restReview); // Log updated reviews
            setReview(restReview);
          })
          .catch((error) => {
            console.error("API Error:", error);
            Swal.fire("Error", "Could not delete review.", "error");
          })
          .finally(() => setLoading(false));
      }
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loading loading-spinner text-info"></span>
      </div>
    );
  }

  return (
    <div className="pt-24 px-4 md:px-8 max-w-screen-xl mx-auto min-h-screen">
      <h1 className="text-3xl font-bold md:text-4xl text-center mb-6">
        MY REVIEW
      </h1>
      {allReview.length === 0 ? (
        <div className="text-center my-12">
          <img
            src={noDataFound}
            alt="No data found"
            className="mx-auto mb-6 w-64 h-auto"
          />
          <h2 className="text-2xl font-semibold text-gray-600">
            No reviews available at the moment.
          </h2>
          <p className="text-gray-500">
            Try adjusting your filters or check back later.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr>
                <th className="px-4 py-2 text-center">#</th>
                <th className="px-4 py-2 text-center">Title</th>
                <th className="px-4 py-2 text-center">Description</th>
                <th className="px-4 py-2 text-center">Update</th>
                <th className="px-4 py-2 text-center">Delete</th>
              </tr>
            </thead>
            <tbody>
              {allReview.map((details, index) => (
                <tr
                  key={details._id}
                  className="text-center border-t border-gray-200"
                >
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{details.title}</td>
                  <td className="px-4 py-2">{details.review}</td>
                  <td className="px-4 py-2">
                    <Link to={`/updateReviews/${details._id}`}>
                      <MdModeEdit
                        className="mx-auto text-blue-500 cursor-pointer text-lg md:text-xl"
                        aria-label="Edit review"
                        title="Edit review"
                      />
                    </Link>
                  </td>
                  <td className="px-4 py-2">
                    <MdDelete
                      onClick={() => handleDelete(details._id)}
                      className="mx-auto text-red-500 cursor-pointer text-lg md:text-xl"
                      aria-label="Delete review"
                      title="Delete review"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyReview;
