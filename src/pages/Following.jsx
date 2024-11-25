import React, { useReducer } from "react";
import { initialState, reducer, actionTypes } from "../utils/Reducer";
import Sidebar from "../components/UserNav";

const Following = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const creators = state.members.filter((member) => member.role === "creator");

  const toggleFollow = (id) => {
    dispatch({ type: actionTypes.TOGGLE_FOLLOW, id });
  };

  return (
    <div className="flex min-h-screen font-spaceGrotesk bg-[#F9FAFB]">
      <Sidebar />

      <main className="ml-0 sm:ml-64 flex-1 p-8 sm:p-12 lg:p-16 transition-all duration-300">
        <h1 className="text-3xl font-bold mb-6 text-[#1F74BA] text-center sm:text-left">
          Explore Client
        </h1>

        {creators.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {creators.map((creator) => (
              <div
                key={creator.id}
                className="creator-card p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
              >
                <div className="mb-6 w-16 h-16 bg-[#F09120] text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  {creator.email[0].toUpperCase()}
                </div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {creator.email}
                </h2>
                <p className="text-sm text-gray-500 capitalize mb-4">Role: Client</p>
                <button
                  onClick={() => toggleFollow(creator.id)}
                  className={`px-6 py-3 rounded-lg font-medium text-sm transition-colors duration-300 ${
                    creator.isFollowing
                      ? "bg-red-500 hover:bg-red-600 text-white"
                      : "bg-green-500 hover:bg-green-600 text-white"
                  }`}
                >
                  {creator.isFollowing ? "Unfollow Creator" : "Follow Creator"}
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 text-lg mt-6">
            No creators available at the moment. Check back later to discover and connect with amazing creators!
          </p>
        )}
      </main>
    </div>
  );
};

export default Following;
