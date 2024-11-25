import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { HiOutlineMenuAlt3, HiOutlineX, HiOutlineLogout } from "react-icons/hi";

const CSidebar = () => {
  const { logout } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogOut = () => {
    logout();
  };

  return (
    <>
    {/* Sidebar Toggle Button (Only on small screens) */}
    <button
      onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      className="sm:hidden fixed top-4 left-4 z-50 p-3 rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition"
    >
      {isSidebarOpen ? <HiOutlineX className="text-2xl" /> : <HiOutlineMenuAlt3 className="text-2xl" />}
    </button>

    {/* Sidebar */}
    <aside
      className={`fixed top-0 left-0 h-full bg-gradient-to-b from-[#1e293b] to-[#2d3d55] text-white flex flex-col transform transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0 sm:w-64`}
    >
      {/* Sidebar Header */}
      <div className="p-6 text-xl font-semibold text-[#F09120] border-b border-gray-700">
        <h2>Client Dashboard</h2>
      </div>

      {/* Sidebar Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-4">
          <li>
            <Link
              to="/client"
              className="block p-4 rounded-md text-lg bg-transparent hover:bg-blue-700 hover:text-[#F09120] transition duration-300"
            >
              Raised Ticket
            </Link>
          </li>
          <li>
            <Link
              to="/client/write"
              className="block p-4 rounded-md text-lg bg-transparent hover:bg-blue-700 hover:text-[#F09120] transition duration-300"
            >
              Raise a Ticket
            </Link>
          </li>
        </ul>
      </nav>

      {/* Logout Section */}
      <div className="p-4 border-t border-gray-700">
        <button
          onClick={handleLogOut}
          className="w-full p-3 text-center bg-red-600 hover:bg-red-700 rounded-md transition text-lg font-medium"
        >
          <HiOutlineLogout className="inline-block mr-2" />
          Logout
        </button>
      </div>
    </aside>
  </>
);
};

export default CSidebar;
