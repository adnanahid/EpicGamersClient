import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { ClipLoader } from "react-spinners";

const WishList = () => {
  const { user, loading } = useContext(AuthContext);
  const wishlists = useLoaderData()
  console.log(wishlists);

  // Filter wishlist based on user email
  const myWishlist = wishlists.filter(
    (wishlist) => wishlist.userEmail === user?.email
  );

  // Show loading spinner if data is still loading
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <ClipLoader color="#4A90E2" size={50} />
      </div>
    );
  }

  if (!myWishlist.length) {
    return (
      <div className="text-center flex flex-col items-center justify-center mt-8 pt-16">
        <p className="text-lg md:text-xl font-medium text-gray-500">
          Your wishlist is empty!
        </p>
        <button
          className="mt-4 px-6 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md"
          onClick={() => navigate("/explore")}
        >
          Explore Games
        </button>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto max-w-screen-md mx-auto pt-24 md:pt-36 min-h-screen">
      <h1 className="text-3xl md:text-4xl font-bold text-center">
        MY WISHLIST
      </h1>
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th className="text-center py-2 text-sm md:text-base">Index</th>
            <th className="text-center py-2 text-sm md:text-base">Name</th>
            <th className="text-center py-2 text-sm md:text-base">Genres</th>
            <th className="text-center py-2 text-sm md:text-base">Rating</th>
          </tr>
        </thead>
        <tbody>
          {myWishlist.map((myList, index) => (
            <tr
              key={myList._id}
              className="hover:bg-gray-50 border-b border-gray-200"
            >
              <th className="text-center py-2 text-sm md:text-base">
                {index + 1}
              </th>
              <td className="text-center py-2 text-sm md:text-base">
                {myList.title}
              </td>
              <td className="text-center py-2 text-sm md:text-base">
                {myList.genres}
              </td>
              <td className="text-center py-2 text-sm md:text-base">
                {myList.rating}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WishList;
