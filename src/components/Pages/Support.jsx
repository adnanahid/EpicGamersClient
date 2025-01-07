import React from "react";
import { toast, ToastContainer } from "react-toastify";

const Support = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("we will connect you soon");
  };

  return (
    <div className="support-section pt-24 pb-12">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8">Support</h2>
        {/* Contact Form */}
        <div className="contact-form mb-12">
          <form
            onSubmit={handleSubmit}
            className="shadow-md rounded-lg p-6 max-w-screen-sm mx-auto"
          >
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 p-3 block w-full rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm bg-[#4a4a4d] text-white"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 p-3 block w-full rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm bg-[#4a4a4d] text-white"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="mt-1 p-3 block w-full rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm bg-[#4a4a4d] text-white"
                placeholder="Write your message here"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn w-full text-white bg-[#4a4a4d] hover:bg-[#3b3b3d] transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Support;
