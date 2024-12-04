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
        fetch(`http://localhost:3333/reviews/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => {
            Swal.fire("Deleted!", "Your review has been deleted.", "success");
            const restReview = allReview.filter((review) => review._id !== _id);
            setReview(restReview);
          })
          .catch((error) => {
            console.error(error);
            Swal.fire("Error", "Could not delete review.", "error");
          })
          .finally(() => {
            setLoading(false);
          });
      }
    });
  };

  return (
    <div className="py-48 max-w-screen-xl mx-auto">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <div className="overflow-x-auto">
            <table className="table w-[700px] mx-auto">
              {/* Table Head */}
              <thead>
                <tr>
                  <th className="text-center">Index</th>
                  <th className="text-center">Title</th>
                  <th className="text-center">Description</th>
                  <th className="text-center">Update</th>
                  <th className="text-center">Delete</th>
                </tr>
              </thead>
              <tbody>
                {allReview.map((details, index) => (
                  <tr key={details._id} className="text-center">
                    <th className="text-center">{index + 1}</th>
                    <td className="text-center">{details.title}</td>
                    <td className="text-center">{details.review}</td>
                    <td>
                      <Link to={`/updateReviews/${details._id}`}>
                        <MdModeEdit
                          className="mx-auto text-blue-500 cursor-pointer"
                          aria-label="Edit review"
                          title="Edit review"
                        />
                      </Link>
                    </td>
                    <td>
                      <MdDelete
                        onClick={() => handleDelete(details._id)}
                        className="mx-auto text-red-500 cursor-pointer"
                        aria-label="Delete review"
                        title="Delete review"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyReview;
