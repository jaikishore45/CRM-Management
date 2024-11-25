import React from 'react';

const AddMemberModal = ({ isOpen, setIsOpen, newMember, setNewMember, handleAddMember }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full sm:w-96 p-8 transform transition-all duration-300 scale-100 opacity-100">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">Add New Member</h2>

        {/* Email Input */}
        <div className="mb-6">
          <label className="block text-lg text-gray-700 mb-2">Email Address</label>
          <input
            type="email"
            value={newMember.email}
            onChange={(e) => setNewMember({ ...newMember, email: e.target.value })}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-md text-gray-800 focus:outline-none focus:border-blue-500 transition-all duration-300"
            placeholder="Enter email"
          />
        </div>

        {/* Role Selection */}
        <div className="mb-6">
          <label className="block text-lg text-gray-700 mb-2">Select Role</label>
          <select
            value={newMember.role}
            onChange={(e) => setNewMember({ ...newMember, role: e.target.value })}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-md text-gray-800 focus:outline-none focus:border-blue-500 transition-all duration-300"
          >
            <option value="user">User</option>
            <option value="vendor">Client</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="flex justify-between items-center">
          <button
            onClick={() => setIsOpen(false)}
            className="px-6 py-3 text-gray-800 border-2 border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none transition-all duration-300"
          >
            Cancel
          </button>
          <button
            onClick={handleAddMember}
            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none transition-all duration-300"
          >
            Add Member
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddMemberModal;
