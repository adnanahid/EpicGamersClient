import React, { useContext, useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import Swal from "sweetalert2";

const MyReview = () => {
  const { user, loading, setLoading } = useContext(AuthContext);
  const allReviews = useLoaderData();
  const [allReview, setReview] = useState([]);

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
        fetch(`${process.env.REACT_APP_API_BASE_URL || "http://localhost:3333"}/reviews/${_id}`, {
          method: "DELETE",
        })
          .then((res) => {
            if (!res.ok) throw new Error("Failed to delete the review.");
            return res.json();
          })
          .then(() => {
            Swal.fire("Deleted!", "Your review has been deleted.", "success");
            const restReview = allReview.filter((review) => review._id !== _id);
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

  // Show loading spinner if data is still loading
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loading loading-spinner text-info"></span>
      </div>
    );
  }

  return (
    <div className="py-16 px-4 md:px-8 max-w-screen-xl mx-auto min-h-screen">
      <h1 className="text-3xl font-bold md:text-4xl text-center">MY REVIEW</h1>
      {allReview.length === 0 ? (
        <div className="flex items-center justify-center py-10">
          <p className="text-lg font-semibold text-gray-600">
            No reviews found. Start writing your first review!
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
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
                  className="text-center hover:bg-gray-50 border-t border-gray-200"
                >
                  <td>{index + 1}</td>
                  <td>{details.title}</td>
                  <td>{details.review}</td>
                  <td>
                    <Link to={`/updateReviews/${details._id}`}>
                      <MdModeEdit
                        className="mx-auto text-blue-500 cursor-pointer text-lg md:text-xl"
                        aria-label="Edit review"
                        title="Edit review"
                      />
                    </Link>
                  </td>
                  <td>
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
