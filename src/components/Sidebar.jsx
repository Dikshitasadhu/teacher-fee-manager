// src/components/Sidebar.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaBars,
  FaTachometerAlt,
  FaUsers,
  FaMoneyBillWave,
  FaComments,
} from "react-icons/fa";

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true); // Start open by default on desktop
  const [isMobile, setIsMobile] = useState(false);

  // Handle window resize to control sidebar behavior
  useEffect(() => {
    function handleResize() {
      const mobile = window.innerWidth < 768; // Tailwind md breakpoint
      setIsMobile(mobile);
      if (mobile) {
        setIsOpen(false); // collapsed on mobile initially
      } else {
        setIsOpen(true); // open on desktop initially
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  const navItems = [
    { name: "Dashboard", path: "/", icon: <FaTachometerAlt /> },
    { name: "Students", path: "/students", icon: <FaUsers /> },
    { name: "Payments", path: "/payments", icon: <FaMoneyBillWave /> },
    { name: "Feedback", path: "/feedback", icon: <FaComments /> },
  ];

  return (
    <>
      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-screen bg-white shadow-md z-50
          flex flex-col transition-width duration-300 ease-in-out
          ${isOpen ? "w-60" : "w-16"}
        `}
      >
        {/* Header with toggle button */}
        <div className="flex items-center justify-between p-4 border-b">
          {isOpen && <h2 className="text-xl font-bold select-none">Teacher Panel</h2>}
          <button
            onClick={toggleSidebar}
            aria-label="Toggle sidebar"
            className="text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            <FaBars size={24} />
          </button>
        </div>

        {/* Nav items */}
        <nav className="flex flex-col p-2 space-y-1 flex-1 overflow-y-auto">
          {navItems.map(({ name, path, icon }) => {
            const active = location.pathname === path;
            return (
              <Link
                key={name}
                to={path}
                className={`
                  flex items-center gap-3 p-3 rounded-md
                  hover:bg-gray-100 transition-colors duration-200
                  ${active ? "bg-gray-200 font-semibold" : "text-gray-700"}
                `}
              >
                <span className="text-lg">{icon}</span>
                {isOpen && <span>{name}</span>}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Overlay for mobile when sidebar open */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-40"
          onClick={toggleSidebar}
        />
      )}

      {/* Page content wrapper */}
      <div
        className={`transition-margin duration-300 ease-in-out ml-16 md:ml-${isOpen ? "60" : "16"
          }`}
        style={{ marginLeft: isOpen ? 240 : 64 }} // Tailwind w-60=240px, w-16=64px
      >
        {/* The rest of your page content will go here, e.g. <Outlet /> or <Dashboard /> */}
      </div>
    </>
  );
};

export default Sidebar;
