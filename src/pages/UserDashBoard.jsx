import React, { useState } from "react";
import Sidebar from "../components/UserNav";
import Shimmer from "../components/Shimmer";
import { Link } from "react-router-dom";

const UserDashboard = () => {
  const [error, setError] = useState(null);

  const [posts, setPosts] = useState([
    { id: 1, title: "CRM System: Solving Customer Issues Efficiently", content: "CRM systems are essential tools for managing customer relationships. They allow businesses to track issues, raise support tickets, and resolve problems quickly, improving customer satisfaction and retention.", date: "2024-01-01" },
    { id: 2, title: "How CRM Systems Handle Problem Resolution", content: "CRM platforms have built-in features to track customer issues, log complaints, and assign tasks to teams. This helps businesses stay organized and ensures customers receive timely solutions.", date: "2024-02-15" },
    { id: 3, title: "The Role of Ticketing in CRM Systems", content: "Issue tracking is a core feature of modern CRM solutions. A structured ticketing system ensures that every customer concern is addressed, prioritized, and resolved in an efficient manner.", date: "2024-03-10" },
    { id: 4, title: "Automating CRM for Faster Problem Resolution", content: "Automation in CRM systems helps streamline the problem-solving process by automatically assigning tickets, sending updates, and triggering alerts for unresolved issues.", date: "2024-04-01" },
    { id: 5, title: "Best Practices for Using CRM to Track Customer Problems", content: "To effectively manage customer issues, businesses must adopt best practices such as categorizing problems, prioritizing urgent issues, and continuously monitoring resolution progress.", date: "2024-05-18" },
  ]);

  if (error) {
    return <div className="text-center text-red-600 text-lg">{error}</div>;
  }

  return (
    <div className="flex min-h-screen bg-gray-100 font-spaceGrotesk">
      <Sidebar />

      <main className="ml-0 sm:ml-64 flex-1 p-8 sm:p-12 lg:p-16 bg-white transition-all duration-300">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center sm:text-left">
          Ticket Raised
        </h1>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <div
                key={post.id}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h2 className="text-lg font-semibold text-gray-800 mb-4">{post.title}</h2>
                <p className="text-sm text-gray-600 mb-4">{post.content}</p>

                <Link
                  to="#"
                  className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-300"
                >
                  Read More
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <Shimmer />
        )}
      </main>
    </div>
  );
};

export default UserDashboard;
