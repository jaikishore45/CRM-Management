import React, { useReducer, useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { initialState, reducer, actionTypes } from "../utils/Reducer";
import AddMemberModal from "../components/forms/AddModal";
import { HiOutlineUserGroup, HiOutlineUsers, HiOutlineLogout } from "react-icons/hi";

const AdminDashboard = () => {
  const { auth, logout } = useAuth();
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newMember, setNewMember] = useState({ email: "", role: "user" });
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState("users");  // Track active section ("users" or "creators")

  useEffect(() => {
    console.log("Current members state:", state.members);
  }, [state.members]);

  const handleRoleChange = (id) => {
    dispatch({ type: actionTypes.TOGGLE_ROLE, id });
  };

  const handleDelete = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this member?");
    if (confirmed) {
      dispatch({ type: actionTypes.DELETE_MEMBER, id });
    }
  };

  const handleAddMember = () => {
    if (newMember.email.trim()) {
      dispatch({ type: actionTypes.ADD_MEMBER, payload: newMember });
      setNewMember({ email: "", role: "user" });
      setIsModalOpen(false);
    } else {
      alert("Please provide a valid email.");
    }
  };

  const handleLogout = () => {
    logout();
  };

  const users = state.members.filter((member) => member.role === "user");
  const creators = state.members.filter((member) => member.role === "creator");

  return (
    <div className="flex min-h-screen bg-gray-100 transition-all duration-300">
      {/* Sidebar */}
      <div
        className={`w-64 bg-indigo-800 text-white min-h-screen flex flex-col transition-all duration-300 ${isSidebarOpen ? "block" : "hidden sm:block"}`}
      >
        <div className="p-6 border-b border-indigo-700">
          <h1 className="text-3xl font-bold tracking-wide text-center">Admin Panel</h1>
        </div>
        <nav className="flex-1">
          <ul className="space-y-4 mt-8">
            <li>
              <button
                onClick={() => setActiveSection("users")} // Set active section to "users"
                className="flex items-center space-x-2 w-full px-6 py-3 text-gray-100 hover:bg-indigo-700 hover:text-white transition-colors duration-300"
              >
                <HiOutlineUsers className="text-lg" />
                <span>Manage Users</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection("creators")} // Set active section to "creators"
                className="flex items-center space-x-2 w-full px-6 py-3 text-gray-100 hover:bg-indigo-700 hover:text-white transition-colors duration-300"
              >
                <HiOutlineUserGroup className="text-lg" />
                <span>Manage Client</span>
              </button>
            </li>
          </ul>
        </nav>

        <div className="p-6 border-t border-indigo-700">
          <button
            onClick={handleLogout}
            className="w-full mt-4 p-2 text-center bg-red-600 text-white rounded hover:bg-red-700"
          >
            <HiOutlineLogout className="inline-block mr-2" />
            Logout
          </button>
        </div>
      </div>

      {/* Main content */}
      <main className={`flex-1 p-8 bg-white transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-0"}`}>
        {/* Mobile Sidebar Toggle */}
        <div className="block sm:hidden p-4">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-gray-800 focus:outline-none"
          >
            {isSidebarOpen ? (
              <span className="text-xl">&#x2715; Close</span>
            ) : (
              <span className="text-xl">&#9776; Open</span>
            )}
          </button>
        </div>

        {/* Header */}
        <header className="flex items-center justify-between pb-4 border-b border-gray-300">
          <h1 className="text-3xl font-semibold text-gray-800">Welcome, {auth.role}</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Add Member
          </button>
        </header>

        {/* Conditional Rendering of Sections */}
        <section id="manage-users" className="my-8">
          {activeSection === "users" && (
            <>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Manage Users</h2>
              {users.length === 0 ? (
                <p>No users found</p>
              ) : (
                <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
                  <table className="min-w-full">
                    <thead className="bg-indigo-600 text-white">
                      <tr>
                        <th className="py-2 px-4 text-left">Email</th>
                        <th className="py-2 px-4 text-left">Role</th>
                        <th className="py-2 px-4 text-left">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user) => (
                        <tr key={user.id} className="hover:bg-indigo-50">
                          <td className="py-2 px-4 border">{user.email}</td>
                          <td className="py-2 px-4 border">{user.role}</td>
                          <td className="py-2 px-4 border">
                            <button
                              onClick={() => handleRoleChange(user.id)}
                              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                            >
                              Make Creator
                            </button>
                            <button
                              onClick={() => handleDelete(user.id)}
                              className="ml-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </>
          )}
        </section>

        <section id="manage-creators" className="my-8">
          {activeSection === "creators" && (
            <>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Manage Client</h2>
              {creators.length === 0 ? (
                <p>No client found</p>
              ) : (
                <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
                  <table className="min-w-full">
                    <thead className="bg-indigo-600 text-white">
                      <tr>
                        <th className="py-2 px-4 text-left">Email</th>
                        <th className="py-2 px-4 text-left">Role</th>
                        <th className="py-2 px-4 text-left">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {creators.map((creator) => (
                        <tr key={creator.id} className="hover:bg-indigo-50">
                          <td className="py-2 px-4 border">{creator.email}</td>
                          <td className="py-2 px-4 border">{creator.role}</td>
                          <td className="py-2 px-4 border">
                            <button
                              onClick={() => handleRoleChange(creator.id)}
                              className="px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700"
                            >
                              Make User
                            </button>
                            <button
                              onClick={() => handleDelete(creator.id)}
                              className="ml-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </>
          )}
        </section>
      </main>

      {/* Add Member Modal */}
      <AddMemberModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        newMember={newMember}
        setNewMember={setNewMember}
        handleAddMember={handleAddMember}
      />
    </div>
  );
};

export default AdminDashboard;
