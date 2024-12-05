import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const WishList = () => {
  const { user } = useContext(AuthContext);
  console.log(user.email);
  const wishlists = useLoaderData();
  console.log(wishlists);

  const myWishlist = wishlists.filter(
    (wishlist) => wishlist.email === user.email
  );

  console.log(myWishlist);

  return (
    <div className="overflow-x-auto max-w-screen-md mx-auto md:pt-56">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th className="text-center">index</th>
            <th className="text-center">Name</th>
            <th className="text-center">Job</th>
            <th className="text-center">Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          {myWishlist.map((myList, index) => (
            <tr>
              <th className="text-center">{index + 1}</th>
              <td className="text-center">{myList.title}</td>
              <td className="text-center">{myList.genres}</td>
              <td className="text-center">{myList.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WishList;
