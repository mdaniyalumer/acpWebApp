import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { FaBars, FaTimes, FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

// ACP Logo
import acpLogo from '/src/assets/acp-logo-and-hero-img/acp-logo-fullName-white.png';

// Aaf Logo
import AafFooterLogo from "/src/assets/ArtsAlumniAssets/alumni-festival-logo.png";

import centerimg from "/src/assets/auc-assets/Untitled-1.png";

// AUC Logo
// import AucLogo from "/src/assets/auc-assets/auc-logo.png";

const AafNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  // Close menu on route change and outside clicks
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Check if link is active
  const isActiveLink = (path) => location.pathname === path;

  // NavLink component
  const NavLink = ({ to, children }) => (
    <Link
      to={to}
      className={`block py-2 px-4 text-white hover:text-white hover:bg-orange-800 rounded-md transition-colors duration-200 ${isActiveLink(to) ? "text-white font-semibold bg-orange-700" : "font-medium"
        }`}
    >
      {children}
    </Link>
  );

  NavLink.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
  };

  return (
    <header className="bg-gradient-to-r from-black/80 to-black/90 sticky top-0 z-50 shadow-md">
      <nav
        className="h-[100px] max-w-screen-xl flex items-center justify-between mx-auto px-4 sm:px-6 lg:px-8"
        ref={navRef}
      >
        {/* ACP X PLF Logo */}
        <div className="flex items-center gap-2 h-full">
          <Link to="/" className="h-full flex items-center">
            <img
              src={acpLogo}
              alt="ACP Logo"
              className="object-contain w-auto max-h-[130px] max-w-[200px] sm:max-h-[150px] lg:max-h-[150px]"
            />
          </Link>

          <Link to="/" className="h-full flex items-center">
            <img
              src={centerimg}
              alt="Line"
              className="object-contain w-auto max-h-[150px] max-w-[200px] sm:max-h-[150px] lg:max-h-[150px]"
            />
          </Link>
          <Link to="/festival/aaf" className="h-full flex items-center">
            <img
              src={AafFooterLogo}
              alt="Arts Alumni Festival Logo"
              className="object-contain w-auto max-h-[100px] max-w-[200px] sm:max-h-[100px] lg:max-h-[100px]"
            />
          </Link>
        </div>

        {/* Hamburger Icon */}
        <button onClick={toggleMenu} className="text-white lg:hidden">
          {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-0.5 items-center ms-2">
          <li><NavLink to="/festival/aaf">Home</NavLink></li>
          {/* /festival/aaf/about */}
          <li><NavLink to="/festival/aaf/about">About</NavLink></li>
          {/* /festival/aaf/AlumniPage */}
          <li><NavLink to="/festival/aaf/AlumniPage">Alumni</NavLink></li>
          {/* /festival/aaf/gallery */}
          <li><NavLink to="/festival/aaf/gallery">Gallery</NavLink></li>
          {/* <li><NavLink to="/festival/aaf/alumniSessions">Gallery</NavLink></li> */}
          <li className="relative group">
            {/* <DropdownButton onClick={(e) => toggleSubMenu("events", e)} isOpen={isSubMenuOpen["events"]}>
              Gallery
            </DropdownButton> */}
            {/* {isSubMenuOpen["events"] && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-black rounded-md shadow-lg z-40">
                <div className="relative">
                  <SubSubMenuButton onClick={(e) => toggleSubSubMenu("karachi", e)} isOpen={isSubSubMenuOpen["karachi"]}>
                    Karachi
                  </SubSubMenuButton>
                  {isSubSubMenuOpen["karachi"] && (
                    <div className="absolute top-0 left-full ml-2 w-64 bg-black rounded-md shadow-lg z-50">
                      <NavLink to="/festival/auc/events/karachi/1-16">1 to 16</NavLink>
                    </div>
                  )}
                </div>
                <NavLink to="/festival/auc/events/houston">Houston</NavLink>
              </div>
            )} */}
          </li>
          {/* <li><NavLink to="/festival/auc/sessions">Sessions</NavLink></li> */}
          {/* /festival/aaf/contactUs */}
          <li><NavLink to="/festival/aaf/contactUs">Contact Us</NavLink></li>
          <li>
            {/* <button className="bg-orange-700 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-800 transition duration-300">
              Register Now
            </button> */}
          </li>
        </ul>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed top-0 right-0 w-4/5 max-w-xs h-full bg-black/95 z-50 transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="flex justify-between items-center p-4 border-b border-gray-700">
            <h2 className="text-white font-bold text-lg">Menu</h2>
            <button onClick={toggleMenu} className="text-white">
              <FaTimes />
            </button>
          </div>
          <ul className="flex flex-col p-4 space-y-2 text-white">
            <li><NavLink to="/festival/aaf">Home</NavLink></li>
            {/* /festival/aaf/about */}
            <li><NavLink to="/festival/aaf/about">About</NavLink></li>
            {/* /festival/aaf/AlumniPage */}
            <li><NavLink to="/festival/aaf/AlumniPage">Alumni</NavLink></li>
            {/* /festival/aaf/gallery */}
            <li><NavLink to="/festival/aaf/gallery">Gallery</NavLink></li>
            {/* <li><NavLink to="/festival/aaf/alumniSessions">Gallery</NavLink></li> */}
            {/* <li className="relative">
              <DropdownButton onClick={(e) => toggleSubMenu("events", e)} isOpen={isSubMenuOpen["events"]}>
                Events
              </DropdownButton>
              {isSubMenuOpen["events"] && (
                <div className="ml-4">
                  <SubSubMenuButton onClick={(e) => toggleSubSubMenu("karachi", e)} isOpen={isSubSubMenuOpen["karachi"]}>
                    Karachi
                  </SubSubMenuButton>
                  {isSubSubMenuOpen["karachi"] && (
                    <div className="ml-4">
                      <NavLink to="/festival/auc/events/karachi/1-16">1 to 16</NavLink>
                    </div>
                  )}
                  <NavLink to="/festival/auc/events/houston">Houston</NavLink>
                </div>
              )}
            </li> */}
            {/* <li><NavLink to="/festival/auc/sessions">Sessions</NavLink></li> */}
            {/* /festival/aaf/contactUs */}
            <li><NavLink to="/festival/aaf/contactUs">Contact Us</NavLink></li>
            <li>
              {/* <button className="bg-orange-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-800 transition duration-300 w-full">
                Register Now
              </button> */}
              <Link
                to="/"
                className="block w-full text-center px-4 py-2 mt-2 text-white bg-orange-700 rounded-md hover:bg-orange-800 transition duration-200"
              >
                Back to ACP Home
              </Link>
            </li>
            {/* Social Media Icons in Mobile Menu */}
            <li>
              <div className="flex justify-center space-x-4 mt-4">
                {[
                  {
                    href: "https://www.instagram.com/acpkhiofficial",
                    icon: <FaInstagram className="h-6 w-6" />,
                    alt: "Instagram",

                  },
                  {
                    href: "https://www.facebook.com/ACPKHI/", icon: <FaFacebookF className="h-6 w-6" />,
                    alt: "Facebook",
                  },
                  {
                    href: "https://www.tiktok.com/@acpkhi", icon: <FaTiktok className="h-6 w-6" />,
                    alt: "TikTok",
                  },
                  {
                    href: "https://youtube.com/@acpkhi", icon: <FaYoutube className="h-6 w-6" />,
                    alt: "YouTube",
                  },
                ].map((item) => (
                  <a
                    key={item.alt}
                    href={item.href}
                    className="text-white hover:text-orange-700 transition duration-300"
                    aria-label={item.alt}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </nav>

      {/* Social Media Sidebar (Desktop Only) */}
      <div className="hidden md:block fixed top-1/2 transform -translate-y-1/2 right-0 z-50">
        <div className="bg-black text-white p-2 rounded-l-lg shadow-lg">
          <div className="space-y-4">
            {[
              { href: "#", icon: <FaInstagram className="h-6 w-6" />, alt: "Instagram" },
              { href: "#", icon: <FaFacebookF className="h-6 w-6" />, alt: "Facebook" },
              { href: "#", icon: <FaTiktok className="h-6 w-6" />, alt: "TikTok" },
              { href: "#", icon: <FaYoutube className="h-6 w-6" />, alt: "YouTube" },
            ].map((item) => (
              <a
                key={item.alt}
                href={item.href}
                className="block text-white hover:text-orange-700 transition duration-300"
                aria-label={item.alt}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default AafNavbar;