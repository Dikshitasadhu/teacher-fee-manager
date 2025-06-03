import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  FaBars,
  FaTachometerAlt,
  FaUsers,
  FaComments,
  FaSignOutAlt,
  FaGraduationCap,
} from "react-icons/fa";

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  const handleLogout = () => {
    // Add your logout logic here
    console.log("Logging out...");
    // Example: localStorage.removeItem('token');
    // Example: navigate('/login');
  };

  const navItems = [
    { name: "Dashboard", path: "/", icon: <FaTachometerAlt /> },
    { name: "Students", path: "/students", icon: <FaUsers /> },
    { name: "Courses", path: "/courses", icon: <FaGraduationCap /> },
    { name: "Feedback", path: "/feedback", icon: <FaComments /> },
  ];

  return (
    <>
      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900
          transition-all duration-300 ease-in-out z-50 shadow-2xl
          ${isOpen ? "w-64" : "w-16"}
          border-r border-slate-700/50
        `}
      >
        {/* Decorative top accent */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500"></div>
        
        {/* Header with toggle button */}
        <div className="flex items-center justify-between p-4 border-b border-slate-700/50 bg-slate-800/50">
          {isOpen && (
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                <FaGraduationCap className="text-white text-sm" />
              </div>
              <h1 className="text-white font-bold text-lg bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Teacher Panel
              </h1>
            </div>
          )}
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-700/50 transition-all duration-200 group"
          >
            <FaBars className="group-hover:scale-110 transition-transform duration-200" />
          </button>
        </div>

        {/* Nav items container */}
        <div className="flex flex-col justify-between h-[calc(100%-73px)]">
          {/* Navigation items */}
          <nav className="flex-1 px-3 py-6 space-y-2">
            {navItems.map(({ name, path, icon }) => {
              const active = location.pathname === path;
              return (
                <Link
                  key={path}
                  to={path}
                  className={`
                    flex items-center px-3 py-3 rounded-xl transition-all duration-200 group relative
                    ${
                      active
                        ? "bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-white border border-blue-500/30 shadow-lg shadow-blue-500/10"
                        : "text-slate-300 hover:text-white hover:bg-slate-700/50"
                    }
                  `}
                >
                  {/* Active indicator */}
                  {active && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-r-full"></div>
                  )}
                  
                  <span className={`text-lg ${active ? 'text-blue-400' : 'group-hover:text-blue-400'} transition-colors duration-200`}>
                    {icon}
                  </span>
                  {isOpen && (
                    <span className="ml-3 font-medium group-hover:translate-x-1 transition-transform duration-200">
                      {name}
                    </span>
                  )}
                  
                  {/* Hover effect */}
                  {!active && (
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-200"></div>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Logout section */}
          <div className="px-3 pb-6">
            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent mb-4"></div>
            
            <button
              onClick={handleLogout}
              className={`
                w-full flex items-center px-3 py-3 rounded-xl transition-all duration-200 group
                text-slate-300 hover:text-red-400 hover:bg-red-500/10 border border-transparent hover:border-red-500/30
              `}
            >
              <span className="text-lg group-hover:scale-110 transition-transform duration-200">
                <FaSignOutAlt />
              </span>
              {isOpen && (
                <span className="ml-3 font-medium">
                  Logout
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Overlay for mobile when sidebar open */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Page content wrapper */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? "ml-64" : "ml-16"
        } ${isMobile ? "ml-0" : ""}`}
      >
        <Outlet />
      </div>
    </>
  );
};

export default Sidebar;