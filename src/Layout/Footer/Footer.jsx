import React from "react";
import { Link } from "react-router";
import Logo from "../../Components/NavItems/Logo/Logo";

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-[#0F172A] text-gray-800 dark:text-gray-100 px-6 pt-12 pb-6">
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3 border-b border-gray-200 dark:border-gray-700 pb-8">
        {/* Logo + Description */}
        <div>
          <Link to="/" className="flex items-center mb-4">
            <Logo />
          </Link>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Helping you reduce food waste and manage your kitchen inventory efficiently.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h2 className="text-base font-semibold mb-4">Useful Links</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/my-fridge" className="hover:text-green-600 dark:hover:text-green-400 transition">
                My Fridge
              </Link>
            </li>
            <li>
              <Link to="/add-food" className="hover:text-green-600 dark:hover:text-green-400 transition">
                Add New Food
              </Link>
            </li>
            <li>
              <Link to="/my-items" className="hover:text-green-600 dark:hover:text-green-400 transition">
                My Items List
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-base font-semibold mb-4">Contact Us</h2>
          <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
            <li>123 FoodSaver Lane</li>
            <li>Kitchen City, KC 12345</li>
            <li>Email: support@foodexpiry.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pt-6 text-center text-xs text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} FoodExpiry. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
