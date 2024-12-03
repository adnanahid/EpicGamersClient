import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const { setUser, registerWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    console.log(name, email, photo, password);
  };

  const googleRegister = (e) => {
    e.preventDefault();
    registerWithGoogle()
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        navigate("/");
        fetch("http://localhost:3333/users", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        console.log(errorMessage);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="flex w-full max-w-4xl bg-gray-800 rounded-lg overflow-hidden shadow-lg">
        {/* Left Image Section */}
        <div className="w-1/2 bg-cover bg-center bg-banner"></div>

        {/* Right Form Section */}
        <div className="w-1/2 bg-gray-900 p-8">
          <h2 className="text-2xl text-white font-semibold mb-6">
            REGISTRATION
          </h2>
          <form onSubmit={handleRegister}>
            {/* Name Input */}
            <div className="mb-4">
              <label
                className="block text-gray-400 text-sm mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="w-full px-4 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="name"
                id="name"
                placeholder="Enter your Name"
              />
            </div>
            {/* Email Input */}
            <div className="mb-4">
              <label
                className="block text-gray-400 text-sm mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full px-4 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                id="email"
                placeholder="Enter your Email"
              />
            </div>
            {/* Photo URL Input */}
            <div className="mb-4">
              <label
                className="block text-gray-400 text-sm mb-2"
                htmlFor="photo"
              >
                Photo URL
              </label>
              <input
                className="w-full px-4 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="photo"
                id="photo"
                placeholder="Enter your Photo URL"
              />
            </div>

            {/* Password Input */}
            <div className="mb-4 relative">
              <label
                className="block text-gray-400 text-sm mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="w-full px-4 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="password"
                id="password"
                placeholder="Enter Your Password"
              />
              <button
                type="button"
                className="absolute right-4 top-9 text-gray-400 hover:text-white"
              ></button>
            </div>

            {/* Registration Button */}
            <button
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded font-semibold transition duration-300"
              type="submit"
            >
              REGISTER
            </button>

            {/* Social Media Buttons */}
            <p className="text-center text-gray-400 my-4 text-sm">
              or Register With
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={googleRegister}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded font-semibold transition duration-300"
                type="submit"
              >
                REGISTER WITH GOOGLE
              </button>
            </div>

            {/* Login Link */}
            <p className="text-gray-400 text-sm mt-4 text-center">
              Have an account?
              <Link to="/login" className="text-blue-500 hover:underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
