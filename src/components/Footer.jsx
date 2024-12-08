import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1d232a] text-gray-300">
      <div className="container mx-auto px-6 py-10">
        {/* Social Media Section */}
        <div className="flex justify-between items-center border-b border-gray-700 pb-6">
          <p>Get connected with us on social networks:</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-gray-100">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-100">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-100">
              <i className="fab fa-google"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-100">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-100">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-100">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>

        {/* Footer Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
          {/* Company Info */}
          <div>
            <h6 className="uppercase font-semibold mb-4 flex items-center">
              <i className="fas fa-gem mr-2"></i>EPIC GAMERS
            </h6>
            <p>
              Here you can use rows and columns to organize your footer content. Lorem ipsum
              dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>

          {/* Products */}
          <div>
            <h6 className="uppercase font-semibold mb-4">Products</h6>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:underline">Angular</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:underline">React</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:underline">Vue</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:underline">Laravel</a>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h6 className="uppercase font-semibold mb-4">Useful Links</h6>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:underline">Pricing</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:underline">Settings</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:underline">Orders</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:underline">Help</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h6 className="uppercase font-semibold mb-4">Contact</h6>
            <ul className="space-y-2">
              <li className="flex items-center">
                <i className="fas fa-home mr-2"></i>
                New York, NY 10012, US
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-2"></i>
                info@example.com
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone mr-2"></i>
                + 01 234 567 88
              </li>
              <li className="flex items-center">
                <i className="fas fa-print mr-2"></i>
                + 01 234 567 89
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center py-6 border-t border-gray-700 mt-6">
          © 2021 Copyright: 
          <a href="#" className="text-gray-400 hover:underline"> epicgamers.com</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
