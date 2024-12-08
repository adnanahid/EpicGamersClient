import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { ClipLoader } from "react-spinners";
import noDataFound from "../../assets/nodatafound.jpg";

const WishList = () => {
  const { user, loading } = useContext(AuthContext);
  const wishlists = useLoaderData();
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
      <div className="text-center pt-24 min-h-screen">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
          MY WISHLIST
        </h1>
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
    );
  }

  return (
    <div className="overflow-x-auto max-w-screen-md mx-auto pt-24 min-h-screen">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
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
