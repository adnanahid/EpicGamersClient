import React from "react";

const Footer = () => {
  return (
    <footer className="text-white bg-[#4a4a4d]">
      <div className="container mx-auto px-6 pt-16">
        {/* Social Media Section */}
        <div className="flex justify-between items-center border-b border-white pb-6">
          <p>Get connected with us on social networks:</p>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/profile.php?id=100013639030004"
              target="_blank"
              className="text-gray-400 hover:text-gray-100"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://x.com/dnan_nahid"
              target="_blank"
              className="text-gray-400 hover:text-gray-100"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/adnan-nahid-693299219/"
              target="_blank"
              className="text-gray-400 hover:text-gray-100"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/adnanahid"
              target="_blank"
              className="text-gray-400 hover:text-gray-100"
            >
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
              We are a passionate community of gamers and tech enthusiasts,
              bringing you the latest news, reviews, and in-depth guides on all
              things gaming. Join us as we explore new releases, technologies,
              and gaming culture.
            </p>
          </div>

          {/* Products */}
          <div>
            <h6 className="uppercase font-semibold mb-4">Products</h6>
            <ul className="space-y-2">
              <li>Angular</li>
              <li>React</li>
              <li>Vue</li>
              <li>Laravel</li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h6 className="uppercase font-semibold mb-4">Useful Links</h6>
            <ul className="space-y-2">
              <li>Pricing</li>
              <li>Settings</li>
              <li>Orders</li>
              <li>Help</li>
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
                <i className="fas fa-phone mr-2"></i>+ 01 234 567 88
              </li>
              <li className="flex items-center">
                <i className="fas fa-print mr-2"></i>+ 01 234 567 89
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center py-6 border-t border-white mt-6">
          © 2021 Copyright:
          <a href="#" className="text-gray-400 hover:underline">
            {" "}
            epicgamers.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
