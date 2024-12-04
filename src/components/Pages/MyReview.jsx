import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const allReview = useLoaderData();
  const myReview = allReview.filter((review) => review.email === user?.email);
  console.log(myReview);
  return (
    <div className="py-48 max-w-screen-xl mx-auto">
      <div>
        <div className="overflow-x-auto">
          <table className="table w-[700px] mx-auto">
            {/* head */}
            <thead>
              <tr>
                <th className="text-center">index</th>
                <th className="text-center">Title</th>
                <th className="text-center">Description</th>
                <th className="text-center">Update</th>
                <th className="text-center">Delete</th>
              </tr>
            </thead>
            <tbody>
              {myReview.map((details, index) => (
                <tr className="text-center">
                  <th className="text-center">{index + 1}</th>
                  <td className="text-center">{details.title}</td>
                  <td className="text-center">{details.review}</td>
                  <td>
                    <MdModeEdit className="mx-auto" />
                  </td>
                  <td>
                    <MdDelete className="mx-auto" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyReview;
