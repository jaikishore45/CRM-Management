import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { HiOutlineHome, HiOutlineUserGroup, HiOutlineLogout } from "react-icons/hi";

const Sidebar = () => {
  const { logout } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogOut = () => {
    logout();
  };

  return (
    <>
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="sm:hidden fixed top-4 left-4 mt-10 z-50 bg-indigo-600 p-3 rounded-full text-white shadow-md"
      >
        {isSidebarOpen ? "Close" : "Menu"}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-gradient-to-b from-indigo-800 to-indigo-600 shadow-lg flex flex-col transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0 sm:w-72 z-40`}
      >
        <div className="p-6 text-2xl font-bold text-white border-b border-indigo-500">
          <span>User Role</span>
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-6">
            <li>
              <Link
                to="/user"
                className="flex items-center p-4 rounded-md text-lg text-white hover:bg-indigo-500 hover:text-white transition"
              >
                <HiOutlineHome className="mr-3 text-xl" />
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/user/following"
                className="flex items-center p-4 rounded-md text-lg text-white hover:bg-indigo-500 hover:text-white transition"
              >
                <HiOutlineUserGroup className="mr-3 text-xl" />
                Client-Following
              </Link>
            </li>
          </ul>
        </nav>
        <div className="p-4 border-t border-indigo-500">
          <button
            onClick={handleLogOut}
            className="w-full p-3 text-center bg-red-600 rounded-md hover:bg-red-700 transition text-lg font-medium text-white"
          >
            <HiOutlineLogout className="mr-3 inline-block" />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
