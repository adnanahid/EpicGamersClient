import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const WishList = () => {
  const { user, loading } = useContext(AuthContext);
  const wishlists = useLoaderData();

  // Filter wishlist based on user email
  const myWishlist = wishlists.filter(
    (wishlist) => wishlist.email === user?.email
  );

  // Show loading spinner if data is still loading
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loading loading-spinner text-info"></span>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto max-w-screen-md mx-auto pt-24 md:pt-36">
      {myWishlist.length > 0 ? (
        <table className="table table-zebra w-full">
          {/* Table Head */}
          <thead>
            <tr>
              <th className="text-center py-2 text-sm md:text-base">Index</th>
              <th className="text-center py-2 text-sm md:text-base">Name</th>
              <th className="text-center py-2 text-sm md:text-base">Genres</th>
              <th className="text-center py-2 text-sm md:text-base">Rating</th>
            </tr>
          </thead>
          {/* Table Body */}
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
      ) : (
        <div className="text-center text-gray-500 mt-8">
          <p className="text-lg md:text-xl font-medium">
            Your wishlist is empty!
          </p>
          <p className="text-sm md:text-base mt-2">
            Start adding your favorite games to your wishlist.
          </p>
        </div>
      )}
    </div>
  );
};

export default WishList;
